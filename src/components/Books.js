/* eslint-disable */
import React, { useEffect } from "react";
// components
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/books/books";
import Book from "./Book";
import Form from "./Form";

const BookList = () => {
	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBooks());
	}, [dispatch]);

	return (
		<div className="books-container">
			{books.map((item) => (
				<Book
					title={item.title}
					author={item.author}
					genre={item.genre}
					id={item.id}
					key={item.id}
				/>
			))}
		</div>
	);
};

const Books = () => {
	return (
		<>
			<BookList />
			<Form />
		</>
	);
};

export default Books;
