package com.project.ServiceAppointmentService.repository;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ServiceAppointmentService.entity.ServiceAppointment;

@Repository
public interface ServiceAppointmentRepository extends JpaRepository<ServiceAppointment, Long>{

	List<ServiceAppointment> findByUserId(Long userId);
    List<ServiceAppointment> findByServiceProviderId(Long serviceProviderId);
    List<ServiceAppointment> findByCarId(Long carId);
    List<ServiceAppointment> findByStatus(String status);
    List<ServiceAppointment> findByAppointmentDateAfter(Date currentDate);  // For upcoming appointments
}
