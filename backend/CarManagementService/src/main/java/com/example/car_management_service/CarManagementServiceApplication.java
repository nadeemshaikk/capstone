package com.example.car_management_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CarManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarManagementServiceApplication.class, args);
	}

}
