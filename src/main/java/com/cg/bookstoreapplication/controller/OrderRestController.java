package com.cg.bookstoreapplication.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.bookstoreapplication.dto.OrderAdminResponseDTO;
import com.cg.bookstoreapplication.dto.OrderDTO;
import com.cg.bookstoreapplication.entities.Order;
import com.cg.bookstoreapplication.exception.OrderNotFoundException;
import com.cg.bookstoreapplication.service.IOrderService;
import com.cg.bookstoreapplication.util.OrderDTOConvertor;

@RestController
@RequestMapping("/orderdetails")
public class OrderRestController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	@Autowired
	IOrderService orderService;
	
	@Autowired
	OrderDTOConvertor dtoconvertor;
	
public OrderRestController() {
		
		logger.info("---Order Controller Called --");
		logger.warn("---Order Controller Called --");
		
		System.err.println("Order Controller Called");
	}
	
	@PostMapping("/addorder")
	public ResponseEntity<OrderAdminResponseDTO> addOrder(@RequestBody Order order) throws Exception{
		Order savedOrder = orderService.addOrder(order);
		OrderAdminResponseDTO responseDTO=dtoconvertor.getOrderAdminResponseDTO(savedOrder);
		return new ResponseEntity<OrderAdminResponseDTO>(responseDTO,HttpStatus.OK);
	}
	
	@PutMapping("/updateorder/{orderId}")
	public String updateOrder(@PathVariable int orderId)throws Exception{
		Order updatedOrder=orderService.viewOrder(orderId);
		return updatedOrder.toString();
		
	}
	@DeleteMapping("/order/delete/{oID}")
	public ResponseEntity<Order> deleteOrder(@PathVariable Integer oID) throws Exception{
		if(oID == null) {
			throw new OrderNotFoundException("No customer exist with this key");
		}
		else {
			Order deletedOrder =orderService.deleteOrder(oID);
			return new ResponseEntity<Order>(deletedOrder,HttpStatus.OK);
		}
	}
	@GetMapping("/order/view/{oID}")
	public ResponseEntity<Order> viewOrder(@PathVariable Integer oID)throws Exception
	{
		Order viewOrder=orderService.viewOrder(oID);
		return new ResponseEntity<Order>(viewOrder,HttpStatus.OK);
		
	}
	@GetMapping("/orders")
	public ResponseEntity<List<OrderDTO>> viewAllOrders() throws Exception
	{
		List<Order> allOrders = orderService.viewAllOrders();
		
		List<OrderDTO> allOrderDTO = new ArrayList<>();
		for(Order order:allOrders) {
			allOrderDTO.add(dtoconvertor.getOrderDTO(order));
		}
		return new ResponseEntity<List<OrderDTO>>(allOrderDTO,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/order/category/{category}")
	public ResponseEntity<List<OrderDTO>> getOrderByCategory(@PathVariable String category){
		List<Order> allOrders=orderService.getOrderByCategory(category);
		List<OrderDTO> allOrderDTO=new ArrayList<>();
		for(Order order:allOrders) {
			allOrderDTO.add(dtoconvertor.getOrderDTO(order));
		}
		return new ResponseEntity<List<OrderDTO>>(allOrderDTO,HttpStatus.OK);
	}
	@GetMapping("/order/bookid/{bookid}")
	public ResponseEntity<List<OrderDTO>> getBookId(@PathVariable int bookId){
		List<Order> allOrders=orderService.getOrderByBookId(bookId);
		List<OrderDTO> allOrderDTO=new ArrayList<>();
		for(Order order:allOrders) {
			allOrderDTO.add(dtoconvertor.getOrderDTO(order));
		}
		return new ResponseEntity<List<OrderDTO>>(allOrderDTO,HttpStatus.OK);
	}
	
}
