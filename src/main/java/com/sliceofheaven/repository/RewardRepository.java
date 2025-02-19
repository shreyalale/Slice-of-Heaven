package com.sliceofheaven.repository;

import com.sliceofheaven.entity.Reward;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RewardRepository extends JpaRepository<Reward, Long> {
    // Custom queries if needed
}
