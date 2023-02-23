package com.cg.bookstoreapplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.bookstoreapplication.entities.User;

@Service
public interface IUserService {

	public User registerUser(User user)throws Exception;

	public List<User> getAllUsers();
	
	public User getUserById(int userId);
	
	public User updateUser(int userId);
	
	public List<User> getUserByState(String state);
	
	public List<User> getUserByCity (String city);
}
