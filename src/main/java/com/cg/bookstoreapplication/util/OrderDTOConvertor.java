package com.cg.bookstoreapplication.util;

import org.springframework.stereotype.Component;

import com.cg.bookstoreapplication.dto.OrderAdminResponseDTO;
import com.cg.bookstoreapplication.dto.OrderDTO;
import com.cg.bookstoreapplication.entities.Order;

@Component
public class OrderDTOConvertor {

	public OrderAdminResponseDTO getOrderAdminResponseDTO(Order order)
	{
		OrderAdminResponseDTO dto = new OrderAdminResponseDTO();
		dto.setOrderId(order.getOrderId());
		dto.setUserName(order.getUserName());
		
		dto.setCategory(order.getCategory());
		dto.setbookId(order.getBookId());
		dto.setTransactionMode(order.getTransactionMode());
		dto.setCustomerId(order.getCustomerId());
		dto.setQuantity(order.getQuantity());
		dto.setTotalAmount(order.getTotalAmount());
		
		dto.setMsg("Order saved");
		
		return dto;
	}
	
	public OrderDTO getOrderDTO(Order order)
	{

		OrderDTO obj = new OrderDTO(order.getOrderId(),order.getUserName(),order.getCategory(),order.getBookId(),order.getTransactionMode(),order.getCustomerId(),order.getQuantity(),order.getTotalAmount());
		return obj;

	}
}
