package com.numericanalysis.numericanalysisbackend.model;

import java.util.Objects;

public class User {
    private String email;
    private String password;
    private int age;
    private String nickname;
    private String activity;
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return age == user.age &&
                email.equals( user.email ) &&
                password.equals( user.password ) &&
                nickname.equals( user.nickname ) &&
                Objects.equals( activity, user.activity ) &&
                Objects.equals( description, user.description );
    }

    @Override
    public int hashCode() {
        return Objects.hash( email, password, age, nickname, activity, description );
    }

    public User(String email, String password, int age, String nickname, String activity, String description) {
        this.email = email;
        this.password = password;
        this.age = age;
        this.nickname = nickname;
        this.activity = activity;
        this.description = description;
    }

    public User() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if(age < 0 || age > 150)
            throw new IllegalArgumentException("Unreal age");
        this.age = age;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}