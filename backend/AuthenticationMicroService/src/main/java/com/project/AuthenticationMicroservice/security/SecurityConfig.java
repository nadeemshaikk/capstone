package com.project.AuthenticationMicroservice.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.project.AuthenticationMicroservice.feign.UserFeignClient;

@Configuration
public class SecurityConfig {

    private final JwtUtils jwtUtils;
    private final UserFeignClient userFeignClient;

    // Constructor with JwtUtils and UserFeignClient
    public SecurityConfig(JwtUtils jwtUtils, UserFeignClient userFeignClient) {
        this.jwtUtils = jwtUtils;
        this.userFeignClient = userFeignClient;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF using lambda syntax
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**", "/users/register").permitAll() // Public endpoints
                        .requestMatchers("/users/getAllUsers").hasRole("ADMIN") // Only allow ADMIN role to access
                        .anyRequest().authenticated() // All other requests need authentication
                )
                .addFilterBefore(new JwtAuthenticationFilter(jwtUtils, userFeignClient), UsernamePasswordAuthenticationFilter.class); // Add JWT filter before the default UsernamePasswordAuthenticationFilter

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
