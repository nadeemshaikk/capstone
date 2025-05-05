package com.project.AuthenticationMicroservice.feign;

import com.project.AuthenticationMicroservice.model.UserResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "UserManagementService", url = "http://localhost:2025/users")
public interface UserFeignClient {
    @GetMapping("/getUserByEmail")
    UserResponse getUserByEmail(@RequestParam("email") String email);
}