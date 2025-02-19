package com.sliceofheaven.service;

import com.sliceofheaven.entity.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    User addUser(User user);
    User updateUser(Long id, User user);
    Optional<User> getUserById(Long id);
    List<User> getAllUsers();
    void deleteUser(Long id);
    User validateUser(String email, String password);
    User findByEmail(String email); // Added this method for email lookup
}