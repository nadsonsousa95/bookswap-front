import type { Book } from "../types/Book";
import axios from 'axios';

const BASE_URL = "http://localhost:3001/books";

export const getBooks = () => axios.get(BASE_URL)
export const getBookById = (id: string) => axios.get(`${BASE_URL}/${id}`)
export const createBook = (book: Book) => axios.post(BASE_URL, book);
export const deleteBookById = (id: string) => axios.delete(`${BASE_URL}/${id}`)
export const getBooksByUserId = async (userid: string) =>{
     const res = await axios.get(BASE_URL, {
      params: { userid } 
    });
    return res.data
  }
