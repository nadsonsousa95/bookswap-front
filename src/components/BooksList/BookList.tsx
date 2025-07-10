
import { useEffect, useState } from "react";
import type { Book } from "../../types/Book";
import styles from "./BookList.module.css";
import { Link } from "react-router-dom";
import { getBooks } from "../../services/bookService";

interface IBooksProps{
  books?: Book[]; 
}

export const BooksList = ({books}:IBooksProps) => {
  const [Internalbooks, setInternalBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(books){
      setInternalBooks(books)
      setLoading(false)
    }else{
      getBooks()
      .then((res)=> {
        setInternalBooks(res.data);
        })
        .finally(() => setLoading(false));
    }

  }, [books]);

  return (
    <div className={styles.container}>
      {loading && <p>Carregando livros...</p>}

      <div className={styles.grid}>
        {Internalbooks.map((book) => (
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
