package com.project.ServiceAppointmentService.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ServiceAppointmentService.dto.ServiceAppointmentDTO;
import com.project.ServiceAppointmentService.entity.ServiceAppointment;
import com.project.ServiceAppointmentService.exception.ResourceNotFoundException;
import com.project.ServiceAppointmentService.repository.ServiceAppointmentRepository;

@Service
public class ServiceAppointementService {

    @Autowired
    ServiceAppointmentRepository repository;

    public List<ServiceAppointment> getAllAppointments() {
        return repository.findAll();
    }

    public ServiceAppointment getAppointmentById(Long id) {
        return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id: " + id));
    }

    public ServiceAppointment createAppointment(ServiceAppointmentDTO dto) {
        ServiceAppointment appointment = new ServiceAppointment();
        appointment.setUserId(dto.getUserId());
        appointment.setCarId(dto.getCarId());
        appointment.setServiceProviderId(dto.getServiceProviderId());
        appointment.setServiceId(dto.getServiceId());
        appointment.setAppointmentDate(dto.getAppointmentDate());
        appointment.setStatus(dto.getStatus());
        appointment.setEngineCondition(dto.getEngineCondition());
        appointment.setBreakCondition(dto.getBrakeCondition());
        appointment.setTireCondition(dto.getTireCondition());
        appointment.setOverAllCondition(dto.getOverallCondition());
        return repository.save(appointment);
    }

    public ServiceAppointment updateAppointment(Long id, ServiceAppointmentDTO dto) {
        ServiceAppointment appointment = getAppointmentById(id);
        appointment.setAppointmentDate(dto.getAppointmentDate());
        appointment.setStatus(dto.getStatus());
        appointment.setEngineCondition(dto.getEngineCondition());
        appointment.setBreakCondition(dto.getBrakeCondition());
        appointment.setTireCondition(dto.getTireCondition());
        appointment.setOverAllCondition(dto.getOverallCondition());
        return repository.save(appointment);
    }

    public void deleteAppointment(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Appointment not found with id: " + id);
        }
        repository.deleteById(id);
    }

    // Get appointments by user ID
    public List<ServiceAppointment> getAppointmentsByUserId(Long userId) {
        return repository.findByUserId(userId);
    }

    // Get appointments by service provider ID
    public List<ServiceAppointment> getAppointmentsByServiceProviderId(Long serviceProviderId) {
        return repository.findByServiceProviderId(serviceProviderId);
    }

    // Get appointments by car ID
    public List<ServiceAppointment> getAppointmentsByCarId(Long carId) {
        return repository.findByCarId(carId);
    }

    // Get appointments by status
    public List<ServiceAppointment> getAppointmentsByStatus(String status) {
        return repository.findByStatus(status);
    }

    // Get upcoming appointments (appointments with future dates)
    public List<ServiceAppointment> getUpcomingAppointments() {
        Date currentDate = new Date();
        return repository.findByAppointmentDateAfter(currentDate);
    }
}
