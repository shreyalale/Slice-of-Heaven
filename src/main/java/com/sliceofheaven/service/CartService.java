package com.sliceofheaven.service;

import com.sliceofheaven.entity.Cart;
import com.sliceofheaven.entity.Pizza;
import com.sliceofheaven.entity.Toppings;
import com.sliceofheaven.entity.User;
import com.sliceofheaven.repository.CartRepository;
import com.sliceofheaven.repository.PizzaRepository;
import com.sliceofheaven.repository.ToppingsRepository;
import com.sliceofheaven.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private ToppingsRepository toppingsRepository;

    public Cart addToCart(Long userId, Long pizzaId, List<Long> toppingIds) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Pizza pizza = pizzaRepository.findById(pizzaId)
                .orElseThrow(() -> new RuntimeException("Pizza not found"));
        List<Toppings> toppings = toppingsRepository.findAllById(toppingIds);

        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
        }

        cart.getPizzas().add(pizza);
        cart.getToppings().addAll(toppings);
        cart.setTotalPrice(cart.getTotalPrice() + pizza.getPrice().doubleValue() +
                toppings.stream().mapToDouble(Toppings::getPrice).sum());

        return cartRepository.save(cart);
    }

    public Cart getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public void clearCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart != null) {
            cartRepository.delete(cart);
        }
    }
}