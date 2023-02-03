package com.cg.bookstoreapplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Order;

@Service
public interface IOrderService {

	public Order addOrder(Order order)throws Exception;
	public Order updateOrder(int orderId) throws Exception;
	public Order deleteOrder(int orderId)throws Exception;
	public Order viewOrder(int orderId)throws Exception;
	public List<Order> viewAllOrders() throws Exception;
	public List<Order> getOrderByCategory(String category);
	public List<Order> getOrderByBookId(int bookId);
	
}
