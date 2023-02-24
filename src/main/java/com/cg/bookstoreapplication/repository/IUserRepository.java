package com.cg.bookstoreapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.bookstoreapplication.entities.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {

}
