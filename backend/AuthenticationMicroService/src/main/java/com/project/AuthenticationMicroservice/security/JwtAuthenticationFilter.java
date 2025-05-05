package com.project.AuthenticationMicroservice.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.filter.OncePerRequestFilter;

import com.project.AuthenticationMicroservice.feign.UserFeignClient;
import com.project.AuthenticationMicroservice.model.UserResponse;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Set;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;
    private final UserFeignClient userFeignClient;

    public JwtAuthenticationFilter(JwtUtils jwtUtils, UserFeignClient userFeignClient) {
        this.jwtUtils = jwtUtils;
        this.userFeignClient = userFeignClient;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("Authorization");

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // Remove "Bearer " prefix
            try {
                Claims claims = Jwts.parserBuilder()
                        .setSigningKey(jwtUtils.getSecret().getBytes())
                        .build()
                        .parseClaimsJws(token)
                        .getBody();
                        
                String username = claims.getSubject();
                Set<String> roles = claims.get("roles", Set.class);

                if (username != null) {
                    // Fetch user details from UserManagementService
                    UserResponse user = userFeignClient.getUserByEmail(username);

                    // Parse roles string from UserResponse and create authorities
                    Set<SimpleGrantedAuthority> authorities = user.getRole()
                            .stream()
                            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                            .collect(Collectors.toSet());

                    // Set the authentication in the security context
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            } catch (Exception e) {
                // Handle token validation failure (e.g., expired or invalid token)
                SecurityContextHolder.clearContext();
            }
        }

        filterChain.doFilter(request, response); // Continue the filter chain
    }
}
