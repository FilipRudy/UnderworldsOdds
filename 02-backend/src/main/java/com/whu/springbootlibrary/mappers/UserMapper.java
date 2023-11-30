package com.whu.springbootlibrary.mappers;

import com.whu.springbootlibrary.dto.user.SignUpDto;
import com.whu.springbootlibrary.dto.user.UserDto;
import com.whu.springbootlibrary.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);


    User dtoToUser(UserDto userDto);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
