package com.example.Auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin("")
@SpringBootApplication
@EnableDiscoveryClient
public class RemindersApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RemindersApiApplication.class, args);
	}

}
