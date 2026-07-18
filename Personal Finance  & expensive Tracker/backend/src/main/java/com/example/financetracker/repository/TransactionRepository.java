package com.example.financetracker.repository;

import com.example.financetracker.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository for transaction data.
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
