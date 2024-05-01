package com.whu.springbootlibrary.controller;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.whu.springbootlibrary.config.UserAuthenticationProvider;
import com.whu.springbootlibrary.dto.auth.CredentialsDto;
import com.whu.springbootlibrary.dto.user.SignUpDto;
import com.whu.springbootlibrary.dto.user.UserDto;
import com.whu.springbootlibrary.service.UserService;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.el.parser.Token;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URI;

@CrossOrigin("http:/localhost:3000")
@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody @Valid CredentialsDto credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthenticationProvider.createToken(userDto.getLogin()));
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody @Valid SignUpDto user) throws MessagingException, UnsupportedEncodingException {
        UserDto createdUser = userService.register(user);
        createdUser.setToken(userAuthenticationProvider.createToken(user.getLogin()));
        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);
    }

    @PostMapping("/validate")
    public Boolean validate(@RequestParam String token) {
        try {
            return userAuthenticationProvider.validateToken(token).isAuthenticated();
        } catch (JWTVerificationException e) {
            System.out.println("Token validation failed: " + e.getMessage());
            return false;
        }
    }
    @PostMapping("/recover/activation")
    public String sendActivationMail(@RequestParam String email) {
        try {
            userService.sendVerificationEmail(email);
            return "verify_success";
        } catch (MessagingException | UnsupportedEncodingException e) {
            return "verify_fail";
        }
    }
    @PostMapping("/recover/password")
    public String recoverPassword(@RequestParam String email) {
        try {
            userService.resetPassword(email);
            return "verify_success";
        } catch (MessagingException | UnsupportedEncodingException e) {
            return "verify_fail";
        }
    }

    @GetMapping("/verify")
    public String verifyUser(@Param("code") String code) {
        if (userService.verify(code)) {
            return "verify_success";
        } else {
            return "verify_fail";
        }
    }
}
