package com.users.UserManagementService.dto;

import com.users.UserManagementService.model.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;

import java.util.Set;

public class UserRequest {

    @Valid
    private User user;

    @NotEmpty(message = "Role names must not be empty")
    private Set<String> roleNames;

    // Getters and Setters
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<String> getRoleNames() {
        return roleNames;
    }

    public void setRoleNames(Set<String> roleNames) {
        this.roleNames = roleNames;
    }
}
