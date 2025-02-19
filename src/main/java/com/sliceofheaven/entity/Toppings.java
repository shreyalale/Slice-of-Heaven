package com.sliceofheaven.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "toppings")
public class Toppings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private double price;

    @Enumerated(EnumType.STRING) // Store as string in the database
    @Column(nullable = false)
    private ToppingType type;

    // Default constructor
    public Toppings() {}

    // Parameterized constructor
    public Toppings(String name, double price, ToppingType type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public ToppingType getType() {
        return type;
    }

    public void setType(ToppingType type) {
        this.type = type;
    }

    // Enum for topping types
    public enum ToppingType {
        VEG, NON_VEG
    }
}