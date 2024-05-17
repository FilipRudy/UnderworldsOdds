package com.whu.springbootlibrary.service;

import com.whu.springbootlibrary.dto.auth.CredentialsDto;
import com.whu.springbootlibrary.dto.auth.ResetPasswordDto;
import com.whu.springbootlibrary.dto.user.SignUpDto;
import com.whu.springbootlibrary.dto.user.UserDto;
import com.whu.springbootlibrary.exceptions.AppException;
import com.whu.springbootlibrary.mappers.UserMapper;
import com.whu.springbootlibrary.model.User;
import com.whu.springbootlibrary.repository.UserRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.nio.CharBuffer;
import java.sql.Struct;
import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserMapper userMapper;

    @Autowired
    private JavaMailSender mailSender;


    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByEmail(credentialsDto.getEmail());

        if(user == null)
        {
            throw new AppException("Unknown user", HttpStatus.NOT_FOUND);
        }

        if(!user.isConfirmed())
            throw new AppException("User's email is not verified", HttpStatus.BAD_REQUEST);


        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto) throws MessagingException, UnsupportedEncodingException {
        Optional<User> optionalUser = userRepository.findByLogin(userDto.getLogin());

        if (optionalUser.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));

        user.setVerificationCode(RandomString.make(64));
        user.setConfirmed(false);

        User savedUser = userRepository.save(user);

        sendVerificationEmail(user.getEmail());

        return userMapper.toUserDto(savedUser);
    }

    public User findByLogin(String login) {
        Optional<User> user = userRepository.findByLogin(login);
        if(user.isEmpty())
        {
            throw new AppException("No user with username " + login + " was found", HttpStatus.BAD_REQUEST);
        }
        return user.get();
    }

    public User getCurrentUser() {
        User userDto = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return userDto;
    }

    public void sendVerificationEmail(String email)
        throws MessagingException, UnsupportedEncodingException {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new AppException("No user with email " + email + " was found", HttpStatus.BAD_REQUEST);
        }

        if(user.isConfirmed())
        {
            throw new AppException("User is already confirmed", HttpStatus.BAD_REQUEST);
        }

        String toAddress = user.getEmail();
        String fromAddress = "underworlds.odds@gmail.com";
        String senderName = "Underworlds-odds";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getLogin());
        String verifyURL = "http://localhost:3000" + "/verify?code=" + user.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

    }

    public boolean verify(String verificationCode) {
        User user = userRepository.findByVerificationCode(verificationCode);

        if (user == null || user.isConfirmed()) {
            return false;
        } else {
            user.setVerificationCode(null);
            user.setConfirmed(true);
            userRepository.save(user);

            return true;
        }

    }
    public void resetPassword(String email) throws MessagingException, UnsupportedEncodingException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new AppException("No user with email " + email + " was found", HttpStatus.BAD_REQUEST);
        }
        if(!user.isConfirmed())
        {
            throw new AppException("User is not yet confirmed", HttpStatus.BAD_REQUEST);
        }

        String newPassword = (RandomString.make(20));
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(newPassword)));
        userRepository.save(user);

        String toAddress = user.getEmail();
        String fromAddress = "underworlds.odds@gmail.com";
        String senderName = "Underworlds-odds";
        String subject = "New password";
        String content = "Dear [[name]],<br>"
                + "Below is your new password:<br>"
                + "\"[[URL]]\""
                + "You can change it in your profile<br>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getLogin());

        content = content.replace("[[URL]]", newPassword);

        helper.setText(content, true);

        mailSender.send(message);

    }
    public void changePassword(ResetPasswordDto resetPasswordDto) throws MessagingException, UnsupportedEncodingException {
        Optional<User> optionalUser = userRepository.findByLogin(resetPasswordDto.getUsername());


        if (optionalUser.isEmpty()) {
            throw new AppException("No user with username " + resetPasswordDto.getUsername() + " was found", HttpStatus.BAD_REQUEST);
        }

        User user = optionalUser.get();
        User currentUser = getCurrentUser();

        if(!Objects.equals(user.getLogin(), currentUser.getLogin()))
        {
            throw new AppException("User not logged in", HttpStatus.BAD_REQUEST);
        }

        if(!user.isConfirmed())
        {
            throw new AppException("User is not yet confirmed", HttpStatus.BAD_REQUEST);
        }

        if(resetPasswordDto.getNewPassword().length() < 6)
        {
            throw new AppException("Password need to be at least 6 characters long", HttpStatus.BAD_REQUEST);
        }

        if(!Objects.equals(resetPasswordDto.getNewPassword(), resetPasswordDto.getNewPasswordConfirmation()))
        {
            throw new AppException("Passwords are not matching", HttpStatus.BAD_REQUEST);
        }

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(resetPasswordDto.getNewPassword())));
        userRepository.save(user);

    }

}
