package com.sliceofheaven.service;

import com.sliceofheaven.entity.Toppings;
import com.sliceofheaven.exception.ResourceNotFoundException;
import com.sliceofheaven.exception.InvalidDataException;
import com.sliceofheaven.repository.ToppingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToppingsService {

    @Autowired
    private ToppingsRepository toppingsRepository;

    public List<Toppings> getAllToppings() {
        return toppingsRepository.findAll();
    }

    public Toppings getToppingById(Long id) {
        return toppingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Topping not found with id: " + id));
    }

    public Toppings addTopping(Toppings topping) {
        if (topping.getName() == null || topping.getName().isEmpty()) {
            throw new InvalidDataException("Topping name cannot be empty");
        }
        return toppingsRepository.save(topping);
    }

    public Toppings updateTopping(Long id, Toppings topping) {
        if (topping.getName() == null || topping.getName().isEmpty()) {
            throw new InvalidDataException("Topping name cannot be empty");
        }
        Toppings existingTopping = toppingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Topping not found with id: " + id));
        
        existingTopping.setName(topping.getName());
        existingTopping.setPrice(topping.getPrice());
        existingTopping.setType(topping.getType());
        
        return toppingsRepository.save(existingTopping);
    }

    public boolean deleteTopping(Long id) {
        Toppings topping = toppingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Topping not found with id: " + id));
        
        toppingsRepository.delete(topping);
        return true;
    }
}