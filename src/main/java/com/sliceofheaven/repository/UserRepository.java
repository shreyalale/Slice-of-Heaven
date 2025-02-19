package com.sliceofheaven.repository;

import com.sliceofheaven.entity.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom query methods can be added here if necessary
	 User findByEmail(String email);
	  User findByUsername(String username);  // New method to find by username
	Optional<User> findByEmailAndPassword(String email, String password);
}
