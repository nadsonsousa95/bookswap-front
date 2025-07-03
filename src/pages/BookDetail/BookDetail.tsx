import {Link, useParams } from "react-router-dom"
import  type { Book } from "../../types/Book"
import { mockBooks } from "../../api/mockbooks";
import { Header } from "../../components/Header/Header";
import styles from './BookDetail.module.css'
import { IoIosReturnLeft } from "react-icons/io";


export default function BookDetail(){
    const {id} = useParams();
    const book : Book | undefined = mockBooks.find(b => b.id === Number(id));

    if (!book){
        return(<p>Livro não encontrado...</p>)
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
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
                <p><strong>Trocas desejadas:</strong> {book.swap}</p>
                <p><strong>Usuário:</strong> {book.user}</p>
                <button className={styles.button}>Entrar em contato</button>
            </div>
        </div>
    )
}