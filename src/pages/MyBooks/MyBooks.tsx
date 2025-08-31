import { PainelHeader } from "../../components/PainelHeader/PainelHeader"
import { Header } from "../../components/Header/Header"
import { useAuth } from "../../contexts/AuthContext.tsx";
import { useState, useEffect } from "react";
import type  {Book}  from "../../types/Book.ts";
import { BooksList } from "../../components/BooksList/BookList.tsx";
import styles from './MyBooks.module.css'
import { getBooksByUserId } from "../../services/bookService.ts";
import { Footer } from "../../components/Footer/Footer.tsx";

export default function MyBooks(){
    const {user} = useAuth()
    const [internalbooks, setInternalBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
    async function fetchBooks() {
      if (!user) return;
      try {
        const data = await getBooksByUserId(String(user.id));
        setInternalBooks(data);
      } catch (err) {
        console.error("Erro ao carregar livros:", err);
      } finally {
        setLoading(false);
      }
    }
       fetchBooks();
    },[user]);

    return(
        <div>
            <Header/>
            <div className={styles.containerMyBooks}>
                <PainelHeader/>
                <div className={styles.mybooks}>
                     <h2>Meus Livros Publicados</h2>
                    <div>
                        {loading && <p>Carregando livros...</p>}
                        <BooksList books={internalbooks} />
                        </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}