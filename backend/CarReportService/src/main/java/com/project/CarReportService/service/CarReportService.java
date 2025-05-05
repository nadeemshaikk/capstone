package com.project.CarReportService.service;

import com.project.CarReportService.model.CarReport;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarReportService {

    private final com.project.CarReportService.repository.CarReportRepository carReportRepository;

    public CarReportService(com.project.CarReportService.repository.CarReportRepository carReportRepository) {
        this.carReportRepository = carReportRepository;
    }

    public CarReport createCarReport(CarReport carReport) {
        return carReportRepository.save(carReport);
    }

    public List<CarReport> getAllCarReports() {
        return carReportRepository.findAll();
    }

    public CarReport getCarReportById(Integer reportId) {
        Optional<CarReport> carReport = carReportRepository.findById(reportId);
        return carReport.orElseThrow(() -> new RuntimeException("Car Report not found with ID: " + reportId));
    }

    public List<CarReport> getCarReportsByCarId(Integer carId) {
        return carReportRepository.findByCarId(carId);
    }

    public void deleteCarReport(Integer reportId) {
        carReportRepository.deleteById(reportId);
    }
}

