package com.cg.bookstoreapplication.service;

import java.util.List;

import com.cg.bookstoreapplication.entities.Book;
import com.cg.bookstoreapplication.entities.Customer;
import com.cg.bookstoreapplication.entities.OrderDetails;

public interface IOrderService {
	public List<OrderDetails> listAllOrders();
	public List<OrderDetails> listOrderByCustomer(Customer cs);
	public OrderDetails viewOrderForCustomer(OrderDetails od);
	public OrderDetails viewOrderForAdmin(OrderDetails od);
	public OrderDetails cancelOrder(OrderDetails od);
	public OrderDetails addOrder(OrderDetails od);
	public OrderDetails updateOrder(OrderDetails od);
	public List<OrderDetails> viewOrderByBook(Book book);
	public List<Book> listBestSellingBook();

}
