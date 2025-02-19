package com.sliceofheaven.service;

import com.sliceofheaven.entity.Pizza;
import com.sliceofheaven.repository.PizzaRepository;
import com.sliceofheaven.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PizzaServiceImpl implements PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    @Override
    public Pizza addPizza(Pizza pizza) {
        return pizzaRepository.save(pizza);
    }

    @Override
    public Pizza updatePizza(Long id, Pizza pizza) {
        if (pizzaRepository.existsById(id)) {
            pizza.setId(id);
            return pizzaRepository.save(pizza);
        }
        return null;
    }

    @Override
    public Optional<Pizza> getPizzaById(Long id) {
        return pizzaRepository.findById(id);
    }

    @Override
    public List<Pizza> getAllPizzas() {
        return pizzaRepository.findAll();
    }

    @Override
    public void deletePizza(Long id) {
        pizzaRepository.deleteById(id);
    }
}