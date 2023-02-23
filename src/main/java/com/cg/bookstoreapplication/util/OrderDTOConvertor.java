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
		dto.setDate(order.getDate());
		
		dto.setUserName(order.getUserName());
		
		dto.setMsg("Order saved");
		
		return dto;
	}
	
	public OrderDTO getOrderDTO(Order order)
	{

		OrderDTO obj = new OrderDTO(order.getOrderId(),order.getUserName(),order.getOrderStatus(),order.getDate());
		return obj;

	}
}
