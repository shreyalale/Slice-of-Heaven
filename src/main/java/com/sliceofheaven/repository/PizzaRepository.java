package com.sliceofheaven.repository;

import com.sliceofheaven.entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Long> {
    // Custom query methods can be added here if necessary
}
