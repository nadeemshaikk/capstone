package com.project.CarReportService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class CarReportServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarReportServiceApplication.class, args);
	}

}
