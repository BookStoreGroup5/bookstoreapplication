package com.cg.bookstoreapplication.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

	private int orderId;
	private String userName;
	private String status;
	private LocalDate date;
}
