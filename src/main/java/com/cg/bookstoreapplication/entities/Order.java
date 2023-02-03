package com.cg.bookstoreapplication.entities;
	import java.time.LocalDate; 

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
	import lombok.Data;
	import lombok.NoArgsConstructor;

	@Entity
	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	@Table(name="BookOrder")
	public class Order {
		
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		int orderId;
		
		private String userName;
		private LocalDate date;
		private String category;
		private int bookId;
		private String transactionMode;
		private int customerId;
		private int quantity;
		private String orderStatus;
		private int totalAmount;
		public Order(LocalDate date, String category, int bookId, String transactionMode, int customerId, int quantity,
				int totalAmount) {
			super();
			this.date = LocalDate.now();
			this.category = category;
			this.bookId = bookId;
			this.transactionMode = transactionMode;
			this.customerId = customerId;
			this.quantity = quantity;
			this.totalAmount = totalAmount;
		}
		
}
