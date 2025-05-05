package com.users.UserManagementService.dto;

import java.util.Set;

public class UserResponse {

    private String email;
    private Set<String> role;
    private String name;
    private String password;

    public UserResponse(String email, Set<String> role, String name, String password) {
        this.email = email;
        this.role = role;
        this.name = name;
        this.password = password;
    }

    public UserResponse() {}

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<String> getRole() {
        return role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
