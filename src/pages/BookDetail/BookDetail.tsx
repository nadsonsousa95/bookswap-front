import {Link, useParams } from "react-router-dom"
import  type { Book } from "../../types/Book"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './BookDetail.module.css'
import { IoIosReturnLeft } from "react-icons/io";
import { useEffect, useState } from "react";
import { getBookById } from "../../services/bookService";

export default function BookDetail(){
    const {id} = useParams();
    const [book, setBook] = useState<Book | null>(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(()=> {
       if(id){
        getBookById(id)
            .then((res) => {
                setBook(res.data);
                setLoading(false)

       })
       }
    }, [id]);

    if(!book){
        return <p>Livro não encontrado...</p>
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
                    {loading && <p>Carregando livros...</p>}
                <Link to="/">
                    <IoIosReturnLeft 
                        size={25}
                        color="#0F1A12"
                    />
                </Link>
                <h1>{book.title}</h1>
                <img 
                src={book.imageUrl} 
                alt={book.title} 
                style={{ width: 500 }} 
                className={styles.image}
                />
                <p><strong>Autor:</strong> {book.author}</p>
                <p><strong>Edição:</strong> {book.edition}</p>
                <p><strong>Descrição:</strong> {book.description}</p>
                <p><strong>Trocas desejadas:</strong> {book.swap}</p>
                <p><strong>Usuário:</strong> {book.user}</p>
                <button className={styles.button}>Entrar em contato</button>
            </div>
            <Footer></Footer>
        </div>
    )
}