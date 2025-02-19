package com.sliceofheaven.repository;

import com.sliceofheaven.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Custom queries can be added if necessary
}
