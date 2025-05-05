package com.project.ServiceAppointmentService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ServiceAppointmentService.dto.ServiceAppointmentDTO;
import com.project.ServiceAppointmentService.entity.ServiceAppointment;
import com.project.ServiceAppointmentService.service.ServiceAppointementService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class ServiceAppointmentController {

    @Autowired
    ServiceAppointementService service;

    @GetMapping("/appointments")
    public List<ServiceAppointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/appointments/{id}")
    public ServiceAppointment getAppointmentById(@PathVariable Long id) {
        return service.getAppointmentById(id);
    }

    @PostMapping("/appointments")
    public ResponseEntity<ServiceAppointment> createAppointment(@Valid @RequestBody ServiceAppointmentDTO dto) {
        return ResponseEntity.ok(service.createAppointment(dto));
    }

    @PutMapping("/appointments/{id}")
    public ResponseEntity<ServiceAppointment> updateAppointment(@PathVariable Long id, @Valid @RequestBody ServiceAppointmentDTO dto) {
        return ResponseEntity.ok(service.updateAppointment(id, dto));
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
        service.deleteAppointment(id);
        return ResponseEntity.noContent().build();
    }

    // Endpoint to get appointments by user ID                                                                                                                  
    @GetMapping("/appointments/user/{userId}")
    public List<ServiceAppointment> getAppointmentsByUserId(@PathVariable Long userId) {
        return service.getAppointmentsByUserId(userId);
    }

    // Endpoint to get appointments by service provider ID
    @GetMapping("/appointments/provider/{serviceProviderId}")
    public List<ServiceAppointment> getAppointmentsByServiceProviderId(@PathVariable Long serviceProviderId) {
        return service.getAppointmentsByServiceProviderId(serviceProviderId);
    }

    // Endpoint to get appointments by car ID
    @GetMapping("/appointments/car/{carId}")
    public List<ServiceAppointment> getAppointmentsByCarId(@PathVariable Long carId) {
        return service.getAppointmentsByCarId(carId);
    }

    // Endpoint to get appointments by status
    @GetMapping("/appointments/status/{status}")
    public List<ServiceAppointment> getAppointmentsByStatus(@PathVariable String status) {
        return service.getAppointmentsByStatus(status);
    }

    // Endpoint to get upcoming appointments
    @GetMapping("/appointments/upcoming")
    public List<ServiceAppointment> getUpcomingAppointments() {
        return service.getUpcomingAppointments();
    }
}
