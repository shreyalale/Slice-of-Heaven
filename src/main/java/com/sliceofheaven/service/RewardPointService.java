package com.sliceofheaven.service;

import com.sliceofheaven.entity.Reward;
import com.sliceofheaven.repository.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RewardPointService {

    @Autowired
    private RewardRepository rewardRepository;

    // Method to save reward
    public Reward saveReward(Reward reward) {
        return rewardRepository.save(reward);
    }
}
