package com.cg.bookstoreapplication.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
	private int userId;
	private String email;
	private String password;
	private String role;

}
