import {Link, useParams } from "react-router-dom"
import  type { Book } from "../../types/Book"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './BookDetail.module.css'
import { IoIosReturnLeft } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../../services/bookService";
import { deleteBookById } from "../../services/bookService";
import { useAuth } from "../../contexts/AuthContext";

export default function BookDetail(){
    const {id} = useParams();
    const navigate = useNavigate()
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    

    useEffect(()=> {
       if(id){
        getBookById(id)
            .then((res) => {
                setBook(res.data);
                setLoading(false)

       })
       }
    }, [id]);

    function linkWhatsApp(numero:string):string{
        const mensagem = `Olá tenho interesse em trocar com seu livro ${book?.title}...`
        const numeroLimpo = numero.replace(/\D/g, '');
        const mensagemCodificada = encodeURIComponent(mensagem);
        return `https://wa.me/${numeroLimpo}?text=${mensagemCodificada}`;
    }

    function OpenWhatsApp(numero:string){
        const url = linkWhatsApp(numero)
        window.open(url, '_blank');
    }

    function handleDelete(){
         const confirm = window.confirm("Tem certeza que deseja excluir esse livro?");
         if (confirm && book){
            try {
                deleteBookById(book.id);
                alert("Livro excluído com sucesso");
                navigate('/');
            }catch(error){
                alert("Erro ao excluir o livro");
                console.log(error);
            }
         }
    }

    function handleEdit(){

    }

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
                <p><strong>Usuário:</strong> {book.username}</p>
                <p><strong>Trocas desejadas:</strong> {book.swap}</p>
                {String(user?.id) !== book.userid && (
                     <button onClick={()=> OpenWhatsApp(book.telephone)} className={styles.button}>Entrar em contato via Whatsapp</button>
                )}
               

                {String(user?.id) === book.userid && (
                    <div className={styles.btnEdition}>
                        <button onClick={handleEdit} className={styles.buttonedit}><MdEdit size={25}></MdEdit><p>Editar</p></button>
                        <button onClick={handleDelete} className={styles.buttondelete}><MdDelete size={25}/><p>Excluir</p></button>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    )
}