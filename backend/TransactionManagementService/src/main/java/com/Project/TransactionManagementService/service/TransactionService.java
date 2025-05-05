package com.Project.TransactionManagementService.service;

import com.Project.TransactionManagementService.repository.TransactionRepository;
import com.Project.TransactionManagementService.dto.CarDto;
import com.Project.TransactionManagementService.dto.TransactionDetailsDto;
import com.Project.TransactionManagementService.dto.UserDto;
import com.Project.TransactionManagementService.feign.CarServiceClient;
import com.Project.TransactionManagementService.feign.UserServiceClient;
import com.Project.TransactionManagementService.model.TransactionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepo;

    @Autowired
    private CarServiceClient carServiceClient;

    @Autowired
    private UserServiceClient userServiceClient;

    public TransactionDetailsDto getTransactionDetails(Long transactionId) {
        TransactionEntity transaction = transactionRepo.findById(transactionId)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));

        CarDto car = carServiceClient.getCarById(transaction.getCarId()).getBody();
        UserDto buyer = userServiceClient.getUserById(transaction.getBuyerId()).getBody();
        UserDto seller = userServiceClient.getUserById(transaction.getSellerId()).getBody();

        return new TransactionDetailsDto(transaction, car, buyer, seller);
    }

    public List<TransactionEntity> getAllTransactions() {
        return transactionRepo.findAll();
    }

    public Optional<TransactionEntity> getTransactionById(Long transactionId) {
        return transactionRepo.findById(transactionId);
    }

    public TransactionEntity addTransaction(TransactionEntity transaction) {
        return transactionRepo.save(transaction);
    }

    public Optional<TransactionEntity> updateTransaction(Long transactionId, TransactionEntity updatedTransaction) {
        return transactionRepo.findById(transactionId).map(existingTransaction -> {
            updatedTransaction.setTransactionId(existingTransaction.getTransactionId());
            return transactionRepo.save(updatedTransaction);
        });
    }

    public boolean deleteTransaction(Long transactionId) {
        if (transactionRepo.existsById(transactionId)) {
            transactionRepo.deleteById(transactionId);
            return true;
        }
        return false;
    }
}
