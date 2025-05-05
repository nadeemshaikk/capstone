package com.Project.TransactionManagementService.controller;

import com.Project.TransactionManagementService.dto.TransactionDetailsDto;
import com.Project.TransactionManagementService.model.TransactionEntity;
import com.Project.TransactionManagementService.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<TransactionEntity>> getAllTransactions() {
        return ResponseEntity.ok(transactionService.getAllTransactions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionEntity> getTransactionById(@PathVariable Long id) {
        return transactionService.getTransactionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TransactionEntity> createTransaction(@RequestBody TransactionEntity transaction) {
        return ResponseEntity.ok(transactionService.addTransaction(transaction));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionEntity> updateTransaction(@PathVariable Long id, @RequestBody TransactionEntity updated) {
        return transactionService.updateTransaction(id, updated)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        if (transactionService.deleteTransaction(id)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<TransactionDetailsDto> getTransactionDetails(@PathVariable Long id) {
        return ResponseEntity.ok(transactionService.getTransactionDetails(id));
    }
}
