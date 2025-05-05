package com.project.AuthenticationMicroservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private Long userId;
    private String email;
    private String name;
    private String password;
    private Set<String> role;

//    public Set<Role> getRoles() {
//        if (roles == null) {
//            roles = new HashSet<>();
//        }
//        return roles;
//    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Role {
        private String name;
    }
}