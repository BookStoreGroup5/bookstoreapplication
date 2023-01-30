package com.cg.bookstoreapplication.entities;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Address {
	
	private int addressId;
	private String address;
	private String city;
	private String country;
	private String pincode;


}
