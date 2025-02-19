package com.sliceofheaven.controller;

import com.sliceofheaven.entity.Toppings;
import com.sliceofheaven.service.ToppingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")

@RequestMapping("/api/toppings")
public class ToppingsController {

    @Autowired
    private ToppingsService toppingsService;

    @GetMapping
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<List<Toppings>> getAllToppings() {
        return new ResponseEntity<>(toppingsService.getAllToppings(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Toppings> getToppingById(@PathVariable Long id) {
        Toppings topping = toppingsService.getToppingById(id);
        return new ResponseEntity<>(topping, HttpStatus.OK);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Toppings> addTopping(@RequestBody Toppings topping) {
        Toppings savedTopping = toppingsService.addTopping(topping);
        return new ResponseEntity<>(savedTopping, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Toppings> updateTopping(@PathVariable Long id, @RequestBody Toppings topping) {
        Toppings updatedTopping = toppingsService.updateTopping(id, topping);
        return new ResponseEntity<>(updatedTopping, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteTopping(@PathVariable Long id) {
        boolean isDeleted = toppingsService.deleteTopping(id);
        return isDeleted ? new ResponseEntity<>(HttpStatus.NO_CONTENT) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}