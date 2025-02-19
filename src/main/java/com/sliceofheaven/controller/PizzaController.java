package com.sliceofheaven.controller;
 
import com.sliceofheaven.entity.Pizza;
import com.sliceofheaven.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
 
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
@RestController
 
@RequestMapping("/api/pizzas")
@PreAuthorize("hasRole('ADMIN')")
public class PizzaController {
 
    @Autowired
    private PizzaService pizzaService;
 
    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Pizza> addPizza(@RequestBody Pizza pizza) {
        Pizza createdPizza = pizzaService.addPizza(pizza);
        return new ResponseEntity<>(createdPizza, HttpStatus.CREATED);
    }
 
    
    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Pizza> updatePizza(@PathVariable Long id, @RequestBody Pizza pizza) {
        Pizza updatedPizza = pizzaService.updatePizza(id, pizza);
        return updatedPizza != null ? new ResponseEntity<>(updatedPizza, HttpStatus.OK)
                                    : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
 
    
    
    @GetMapping("/{id}")
    public ResponseEntity<Pizza> getPizzaById(@PathVariable Long id) {
        Optional<Pizza> pizza = pizzaService.getPizzaById(id);
        return pizza.isPresent() ? new ResponseEntity<>(pizza.get(), HttpStatus.OK)
                                 : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
 
    @GetMapping("/all")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Pizza> getAllPizzas() {
        return pizzaService.getAllPizzas();
    }
 
    
    
    
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deletePizza(@PathVariable Long id) {
        pizzaService.deletePizza(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}