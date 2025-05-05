package com.Project.TransactionManagementService.dto;

import com.Project.TransactionManagementService.model.TransactionEntity;

public class TransactionDetailsDto {

    private TransactionEntity transaction;
    private CarDto car;
    private UserDto buyer;
    private UserDto seller;

    public TransactionDetailsDto() {}

    public TransactionDetailsDto(TransactionEntity transaction, CarDto car, UserDto buyer, UserDto seller) {
        this.transaction = transaction;
        this.car = car;
        this.buyer = buyer;
        this.seller = seller;
    }

    public TransactionEntity getTransaction() {
        return transaction;
    }

    public void setTransaction(TransactionEntity transaction) {
        this.transaction = transaction;
    }

    public CarDto getCar() {
        return car;
    }

    public void setCar(CarDto car) {
        this.car = car;
    }

    public UserDto getBuyer() {
        return buyer;
    }

    public void setBuyer(UserDto buyer) {
        this.buyer = buyer;
    }

    public UserDto getSeller() {
        return seller;
    }

    public void setSeller(UserDto seller) {
        this.seller = seller;
    }
}
