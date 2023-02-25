package com.cg.bookstoreapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.bookstoreapplication.entities.Order;

@Repository
public interface IOrderRepository extends JpaRepository<Order,Integer> {

	public List<Order> getOrderByCategory(String category);
	public List<Order> getOrderByBookId(int bookId);
}
