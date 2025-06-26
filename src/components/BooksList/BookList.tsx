// src/components/BooksList.tsx
import { useEffect, useState } from "react";
import type { Book } from "../../types/Book";
import { mockBooks } from "../../api/mockbooks";
import styles from "./BookList.module.css";
import { Link } from "react-router-dom";

export const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks(mockBooks);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.imageUrl} alt={book.title} className={styles.image} />
            <h3 className={styles.title}>{book.title}</h3>
            <p className={styles.author}>Autor: {book.author}</p>
            <p className={styles.edition}>Edição: {book.edition}</p>
            <Link to={`/books/${book.id}`}>
                <button>Ver detalhes</button>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};
