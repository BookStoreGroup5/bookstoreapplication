package com.cg.bookstoreapplication.util;

import org.springframework.stereotype.Component;

import com.cg.bookstoreapplication.dto.UserDTO;
import com.cg.bookstoreapplication.entities.User;

@Component
public class UserDTOConvertor {

	public UserDTO convertTo(User user) {

		String address=user.getAddress().getAddress()+","+user.getAddress().getCity()+","+user.getAddress().getState()+","+user.getAddress().getPincode();
		return new UserDTO(user.getUserId(), user.getFirstName(), user.getLastName(), user.getPhoneNumber(),user.getEmailId(),
				address,user.getUserRole());
	}
}
