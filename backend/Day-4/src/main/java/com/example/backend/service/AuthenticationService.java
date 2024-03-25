package com.example.backend.service;

import java.io.IOException;

import com.example.backend.dto.Request.LoginRequest;
import com.example.backend.dto.Request.RegisterRequest;
import com.example.backend.dto.Response.LoginResponse;
import com.example.backend.dto.Response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
