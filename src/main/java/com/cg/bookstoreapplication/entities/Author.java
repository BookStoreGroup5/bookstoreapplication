package com.cg.bookstoreapplication.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor

public class Author {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int authorId;
	
	private String authorName;
	private String about;
	private int noOfBooksPublished;
	private String email;
	private String phoneNumber;
	
	private String imageName;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "AuthorNumber")//column holds FK value and name of column set through "name attribute"
	private List<Book> allBooks;

	public Author(String authorName, int noOfBooksPublished, String email,String about, String phoneNumber,String imageName) {
		super();
		this.authorName = authorName;
		this.noOfBooksPublished = noOfBooksPublished;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.about=about;
		this.imageName=imageName;
	}
	
	
}
