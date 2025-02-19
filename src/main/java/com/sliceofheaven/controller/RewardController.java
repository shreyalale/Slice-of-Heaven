package com.sliceofheaven.controller;

import com.sliceofheaven.entity.Reward;
import com.sliceofheaven.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rewards")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")  // Allow React frontend
public class RewardController {

    @Autowired
    private RewardService rewardService;

    // Create a reward
    @PostMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public Reward createReward(@RequestBody Reward reward) {
        return rewardService.saveReward(reward);
    }

    // Get all rewards
    @GetMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Reward> getAllRewards() {
        return rewardService.getAllRewards();
    }

    // Update reward by ID
    @PutMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Reward updateReward(@PathVariable Long id, @RequestBody Reward reward) {
        return rewardService.updateReward(id, reward);
    }

    // Delete reward by ID
    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteReward(@PathVariable Long id) {
        rewardService.deleteReward(id);
        return "Reward deleted successfully!";
    }

    // Claim reward by user
    @PostMapping("/claim")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public String claimReward(@RequestParam Long userId, @RequestParam Long rewardId) {
        rewardService.claimReward(userId, rewardId);
        return "Reward claimed successfully!";
    }
}
