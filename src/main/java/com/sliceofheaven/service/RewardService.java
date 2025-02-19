package com.sliceofheaven.service;

import com.sliceofheaven.entity.Reward;
import com.sliceofheaven.entity.User;
import com.sliceofheaven.repository.RewardRepository;
import com.sliceofheaven.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RewardService {

    @Autowired
    private RewardRepository rewardRepository;

    @Autowired
    private UserRepository userRepository;

    public Reward saveReward(Reward reward) {
        return rewardRepository.save(reward);
    }

    public List<Reward> getAllRewards() {
        return rewardRepository.findAll();
    }

    public Reward updateReward(Long id, Reward rewardDetails) {
        Reward reward = rewardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reward not found"));
        reward.setRewardName(rewardDetails.getRewardName());
        reward.setPointsRequired(rewardDetails.getPointsRequired());
        reward.setDescription(rewardDetails.getDescription());
        return rewardRepository.save(reward);
    }

    public void deleteReward(Long id) {
        rewardRepository.deleteById(id);
    }

    public void claimReward(Long userId, Long rewardId) {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Reward> rewardOptional = rewardRepository.findById(rewardId);

        if (userOptional.isPresent() && rewardOptional.isPresent()) {
            User user = userOptional.get();
            Reward reward = rewardOptional.get();

            if (user.getRewardPoints() >= reward.getPointsRequired()) {
                user.setRewardPoints(user.getRewardPoints() - reward.getPointsRequired());
                userRepository.save(user);
            } else {
                throw new RuntimeException("Insufficient points to claim this reward.");
            }
        } else {
            throw new RuntimeException("User or Reward not found.");
        }
    }
}
