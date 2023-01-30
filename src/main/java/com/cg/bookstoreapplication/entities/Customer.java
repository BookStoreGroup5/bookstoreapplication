package com.cg.bookstoreapplication.entities;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	private int customerId;
	private String email;
	private String fullName;
	private String password;
	private Address address;
	private String mobileNumber;
	private LocalDate registerOn;

}
