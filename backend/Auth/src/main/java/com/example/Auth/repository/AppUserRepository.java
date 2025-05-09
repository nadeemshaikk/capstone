package com.example.Auth.repository;

import com.example.Auth.model.AppUser;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, String> {

    Optional<AppUser> findByUserName(String userName);

    Optional<AppUser> findByUserNameOrEmail(@NotBlank(message = "Value cannot be blank")
                                            String userName,
                                            @Email(message = "Provide a valid email")
                                            @NotBlank(message = "Email cannot be blank")
                                            String email);
}
