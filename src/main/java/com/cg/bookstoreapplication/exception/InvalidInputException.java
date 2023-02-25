package com.cg.bookstoreapplication.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvalidInputException extends Exception {

	String fieldName;
	String msg;
	
	@Override
	public String toString() {
		return fieldName+" "+msg;
	}

	
}
