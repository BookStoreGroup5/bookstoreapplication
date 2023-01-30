package com.cg.bookstoreapplication.service;

import java.util.List;

import com.cg.bookstoreapplication.entities.Book;
import com.cg.bookstoreapplication.entities.Customer;

public interface ICustomerService {
	
	public Customer createCustomer(Customer c);
	public List<Customer> listCustomers();
	public Customer deleteCustomer(Customer c);
	public Customer updateCustomer(Customer c);
	public Customer viewCustomer(Customer c);
	public List<Customer> listAllCustomersByBook(Book book);

}
