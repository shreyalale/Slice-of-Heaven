package com.sliceofheaven.service;

import com.sliceofheaven.entity.Cart;
import com.sliceofheaven.entity.Order;
import com.sliceofheaven.entity.User;
import com.sliceofheaven.repository.CartRepository;
import com.sliceofheaven.repository.OrderRepository;
import com.sliceofheaven.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;

    // Create an order for a user
    public Order createOrder(Long userId) {
        // Fetch the user
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Fetch the user's cart
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null || cart.getPizzas().isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        // Create a new order
        Order order = new Order();
        order.setUser(user);
        order.setPizzas(cart.getPizzas());
        order.setOrderDate(LocalDateTime.now());
        order.setStatus("Pending");

        // Calculate reward points (10 points per ₹100)
        double totalPrice = cart.getTotalPrice();
        int rewardPoints = (int) (totalPrice / 100) * 10;
        user.setRewardPoints(user.getRewardPoints() + rewardPoints);
        userRepository.save(user);

        // Clear the cart
        cartRepository.delete(cart);

        // Save the order
        return orderRepository.save(order);
    }

    // Get all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Get an order by ID
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    // Delete an order by ID
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}