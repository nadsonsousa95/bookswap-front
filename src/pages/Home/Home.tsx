import { Header } from "../../components/Header/Header"
import styles from './Home.module.css';
import { BooksList } from "../../components/BooksList/BookList";
import { FiSearch, FiX} from 'react-icons/fi'
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import type { Book } from "../../types/Book";
import { getBooks } from "../../services/bookService";
import { TiDeleteOutline } from "react-icons/ti";


export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchBook, setSearchBook] = useState("");

  useEffect(()=>{
      getBooks().then((res)=> {
        setBooks(res.data)
      });
  }, []);

  const livrosFiltrados = books.filter((book) => 
    `${book.title} ${book.author}`.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <div>
      <Header/>
      <div className={styles.container}>

      <div className={styles.search}>
        <div className={styles.inputWrapper}>
          <FiSearch className={styles.searchIcon} color="#618561" />
          <input
            className={styles.input}
            type="text"
            placeholder="Buscar por título, autor ou palavra-chave..."
            value={searchBook}
            onChange={(e)=> setSearchBook(e.target.value)}
          />
        </div>
        <button onClick={()=> setSearchBook('')} className={styles.clearButton} title="Limpar">
          <FiX size={15} /><p>Limpar</p>
          </button>
      </div>
     

         <h1>Livros Disponíveis</h1>
          <BooksList books={livrosFiltrados}></BooksList>
          {livrosFiltrados.length === 0 && (
              <p>Nenhum livro encontrado para sua busca.</p>
            )}
        </div>
        <Footer></Footer>
    </div>

  )
}
