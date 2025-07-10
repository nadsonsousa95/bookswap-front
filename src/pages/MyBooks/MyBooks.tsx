import { PainelHeader } from "../../components/PainelHeader/PainelHeader"
import { Header } from "../../components/Header/Header"
//import { useAuth } from "../../contexts/AuthContext.tsx";
import { useState, useEffect } from "react";
import type  {Book}  from "../../types/Book.ts";
import { BooksList } from "../../components/BooksList/BookList.tsx";
import styles from './MyBooks.module.css'

export default function MyBooks(){
    //const {user} = useAuth()
    const [internalbooks, setInternalBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

    },[])

    return(
        <div>
            <Header/>
            <div className={styles.container}>
                <PainelHeader/>
                <div>
                     <h2>Meus Livros Publicados</h2>
                    <div>
                        {loading && <p>Carregando livros...</p>}
                        </div>
                    <BooksList books={internalbooks} />
                </div>
            </div>
        </div>
    )
}