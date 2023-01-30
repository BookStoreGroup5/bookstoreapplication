package com.cg.bookstoreapplication.entities;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class BookOrder {
	private int orderId;
	private Customer customer;
	private LocalDate orderDate;
	private double orderTotal;
	private String status;
	private Address ShippingAddress;
	private String paymentMethod;
	private String recipientName;
	private String recipientPhone;

}
