package com.sliceofheaven.repository;

import com.sliceofheaven.entity.Toppings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToppingsRepository extends JpaRepository<Toppings, Long> {
    // You can add custom queries if needed
}