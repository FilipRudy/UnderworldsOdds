package com.whu.springbootlibrary.mappers;

import com.whu.springbootlibrary.dto.SignUpDto;
import com.whu.springbootlibrary.dto.UserDto;
import com.whu.springbootlibrary.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
