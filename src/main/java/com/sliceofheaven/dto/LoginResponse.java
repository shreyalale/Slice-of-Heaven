package com.sliceofheaven.dto;

public class LoginResponse {
    private String token;
    private String role;
    private String email;
    private String username;

    public LoginResponse(String token, String role, String email, String username) {
        this.token = token;
        this.role = role;
        this.email = email;
        this.username = username;
    }

    // Getters and setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}