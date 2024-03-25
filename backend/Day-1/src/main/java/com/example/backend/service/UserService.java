package com.example.backend.service;

import java.security.Principal;

import com.example.backend.dto.Request.PasswordRequest;

public interface UserService {

    void forgotPassword(PasswordRequest request, Principal principal);

}