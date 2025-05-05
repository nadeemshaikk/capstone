package com.project.BuyRequestService.dto;

import lombok.*;

@Data
//@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class CarDto {
    private Long carId;
    private String status;

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}