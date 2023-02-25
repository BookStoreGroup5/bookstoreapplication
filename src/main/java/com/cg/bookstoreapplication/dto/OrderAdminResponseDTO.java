package com.cg.bookstoreapplication.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderAdminResponseDTO {
	private int orderId;
	private String userName;
	private LocalDate date;
	private String category;
	private int bookId;
	private String transactionMode;
	private int customerId;
	private int quantity;
	
	private int totalAmount;
	private String msg;
	public void setbookId(int bookId) {
		// TODO Auto-generated method stub
		
	}
	
	
}
