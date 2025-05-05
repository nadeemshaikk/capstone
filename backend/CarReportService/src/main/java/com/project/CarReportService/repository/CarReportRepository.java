package com.project.CarReportService.repository;

import com.project.CarReportService.model.CarReport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarReportRepository extends JpaRepository<CarReport, Integer> {
    List<CarReport> findByCarId(Integer carId);
}
