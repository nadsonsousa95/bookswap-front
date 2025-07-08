
import { useEffect, useState } from "react";
import type { Book } from "../../types/Book";
import styles from "./BookList.module.css";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/bookService";

export const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getBooks()
      .then((res)=> {
        setBooks(res.data);
        setLoading(false)
        }
        )

  }, []);

  return (
    <div className={styles.container}>
      {loading && <p>Carregando livros...</p>}

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
