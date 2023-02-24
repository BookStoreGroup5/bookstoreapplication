package com.cg.bookstoreapplication.util;

import org.springframework.stereotype.Component;

import com.cg.bookstoreapplication.dto.UserDTO;
import com.cg.bookstoreapplication.entities.User;

@Component
public class UserDTOConvertor {

	public UserDTO convertTo(User user) {

		return new UserDTO(user.getUserId(), user.getFirstName(), user.getLastName(), user.getPhoneNumber(),user.getEmailId(),
				user.getAddress());
	}
}
