package com.cg.bookstoreapplication.entities;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetails {
	private Book book;
	private BookOrder bookOrder;
	private int quantity;
	private double subtotal;

}
