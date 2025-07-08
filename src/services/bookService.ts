import type { Book } from "../types/Book";
import axios from 'axios';

const BASE_URL = "http://localhost:3001/books";

export const getBooks = () => axios.get(BASE_URL)
export const getBookById = (id: string) => axios.get(`${BASE_URL}/${id}`)
export const createBook = (book: Book) => axios.post(BASE_URL, book);
export const deleteBook = (id: string) => axios.delete(`${BASE_URL}/${id}`)