package com.project.AuthenticationMicroservice.controller;

import com.project.AuthenticationMicroservice.feign.UserFeignClient;
import com.project.AuthenticationMicroservice.model.UserResponse;
import com.project.AuthenticationMicroservice.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserFeignClient userFeignClient;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        // Fetch user details from UserManagementService
        UserResponse user = userFeignClient.getUserByEmail(email);
        System.out.println("user from feign : " + user);
        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // Generate JWT token with multiple roles
        String token = jwtUtils.generateToken(user.getEmail(), user.getRole());
        // Prepare response
        Map<String, Object> response = new HashMap<>();
        response.put("userId", user.getUserId());
        response.put("username", user.getName());
        response.put("role", user.getRole());
        response.put("token", token);

        return response;
    }
}