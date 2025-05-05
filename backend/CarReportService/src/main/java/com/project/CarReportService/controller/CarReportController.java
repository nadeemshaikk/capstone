package com.project.CarReportService.controller;

import com.project.CarReportService.model.CarReport;
import com.project.CarReportService.service.CarReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carReports")
public class CarReportController {

    private final CarReportService carReportService;

    public CarReportController(CarReportService carReportService) {
        this.carReportService = carReportService;
    }

    @PostMapping
    public ResponseEntity<CarReport> createCarReport(@RequestBody CarReport carReport) {
        CarReport createdReport = carReportService.createCarReport(carReport);
        return ResponseEntity.ok(createdReport);
    }

    @GetMapping
    public ResponseEntity<List<CarReport>> getAllCarReports() {
        return ResponseEntity.ok(carReportService.getAllCarReports());
    }

    @GetMapping("/{reportId}")
    public ResponseEntity<CarReport> getCarReportById(@PathVariable Integer reportId) {
        return ResponseEntity.ok(carReportService.getCarReportById(reportId));
    }

    @GetMapping("/car/{carId}")
    public ResponseEntity<List<CarReport>> getCarReportsByCarId(@PathVariable Integer carId) {
        return ResponseEntity.ok(carReportService.getCarReportsByCarId(carId));
    }

    @DeleteMapping("/{reportId}")
    public ResponseEntity<String> deleteCarReport(@PathVariable Integer reportId) {
        carReportService.deleteCarReport(reportId);
        return ResponseEntity.ok("Car Report deleted successfully");
    }
}
