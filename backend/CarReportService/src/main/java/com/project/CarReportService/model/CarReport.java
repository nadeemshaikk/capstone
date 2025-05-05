package com.project.CarReportService.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "car_reports")
public class CarReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reportId;

    @Column(nullable = false)
    private Integer carId;

    @Column(nullable = false)
    private Integer serviceProviderId;

    @Column(nullable = false)
    private LocalDate reportDate;

    @Column(length = 500)
    private String engineCondition;

    @Column(length = 500)
    private String brakeCondition;

    @Column(length = 500)
    private String tireCondition;

    @Column(length = 500)
    private String overallCondition;
}
