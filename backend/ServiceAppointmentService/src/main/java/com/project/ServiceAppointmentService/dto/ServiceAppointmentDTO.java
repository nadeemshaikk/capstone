package com.project.ServiceAppointmentService.dto;



import java.util.Date;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ServiceAppointmentDTO {

    @NotNull
    private long userId;

    @NotNull
    private long carId;

    @NotNull
    private long serviceProviderId;

    @NotNull
    private long serviceId;

    @NotNull
    private Date appointmentDate;

    @NotNull
    private String status;

    private String engineCondition;
    private String brakeCondition;
    private String tireCondition;
    private String overallCondition;
}


