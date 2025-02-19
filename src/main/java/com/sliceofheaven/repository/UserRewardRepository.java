package com.sliceofheaven.repository;

import com.sliceofheaven.entity.User;
import com.sliceofheaven.entity.UserReward;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRewardRepository extends JpaRepository<UserReward, Long> {

    // Custom method to find UserReward by User
    UserReward findByUser(User user);
}
