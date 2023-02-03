package com.cg.bookstoreapplication.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.Order;
import com.cg.bookstoreapplication.exception.OrderNotFoundException;
import com.cg.bookstoreapplication.repository.IOrderRepository;

@Service
public class IOrderServiceImpl implements IOrderService {

	@Autowired
	IOrderRepository orderRepository;

	@Override
	@Transactional
	public Order addOrder(Order order) throws Exception {
		// TODO Auto-generated method stub
		order.setDate(LocalDate.now());
		Order savedOrder=orderRepository.save(order);
		if(savedOrder!=null) {
			return savedOrder;
		}
		else {
			throw new OrderNotFoundException("no such order");
		}
		
	}

	@Override
	@Transactional
	public Order updateOrder(int orderId) throws Exception {
		// TODO Auto-generated method stub
		Order updatedorder=orderRepository.getReferenceById(orderId);
		orderRepository.save(updatedorder);
		return updatedorder;
	}

	@Override
	@Transactional
	public Order deleteOrder(int orderId) throws Exception {
		// TODO Auto-generated method stub
		Order exsistingOrder=orderRepository.findById(orderId).orElseThrow(() -> new OrderNotFoundException("Order not found"));
		orderRepository.delete(exsistingOrder);
		return exsistingOrder;
		
	}

	@Override
	public Order viewOrder(int orderId) throws Exception {
		// TODO Auto-generated method stub
		Optional<Order> vieworder =orderRepository.findById(orderId);
		if(vieworder.isPresent()) {
			return vieworder.get();
		}
		else {
			throw new OrderNotFoundException("No Order is found");
		}
		
	}

	@Override
	public List<Order> viewAllOrders() throws Exception {
		// TODO Auto-generated method stub
		List<Order> orders=orderRepository.findAll();
		if(orders.size()>0) {
			return orders;
		}
		else {
			throw new OrderNotFoundException("No order found");
		}
		
	}

	@Override
	public List<Order> getOrderByCategory(String category) {
		// TODO Auto-generated method stub
		return orderRepository.getOrderByCategory(category);
	}

	@Override
	public List<Order> getOrderByBookId(int bookId) {
		// TODO Auto-generated method stub
		return orderRepository.getOrderByBookId(bookId);
	}
	
	

	
}
