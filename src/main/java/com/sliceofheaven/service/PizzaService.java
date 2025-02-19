package com.sliceofheaven.service;

import com.sliceofheaven.entity.Pizza;
import java.util.List;
import java.util.Optional;

public interface PizzaService {
    Pizza addPizza(Pizza pizza);
    Pizza updatePizza(Long id, Pizza pizza);
    Optional<Pizza> getPizzaById(Long id);
    List<Pizza> getAllPizzas();
    void deletePizza(Long id);
}
