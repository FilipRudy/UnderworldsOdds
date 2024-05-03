package com.whu.springbootlibrary.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResetPasswordDto {
    private String currentPassword;
    private String newPassword;
    private String newPasswordConfirmation;
    private String username;
}
