package com.Project.TransactionManagementService.dto;

public class CarDto {
    private Long id;
    private String model;
    private String brand;

    public CarDto() {}

    public CarDto(Long id, String model, String brand) {
        this.id = id;
        this.model = model;
        this.brand = brand;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
