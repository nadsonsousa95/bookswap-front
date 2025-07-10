import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './AddBook.module.css';
import type {Book}  from "../../types/Book";
import { v4 as uuidv4 } from 'uuid';
import { FiUpload } from "react-icons/fi";
import { PainelHeader } from "../../components/PainelHeader/PainelHeader";
import { createBook } from "../../services/bookService";
import { useAuth } from "../../contexts/AuthContext.tsx";


export default function AddBook(){
    const {user} = useAuth();

    const [success, setSuccess] = useState(false)
    const [book, setBook] = useState<Book>({
        id: uuidv4(),
        title: '',
        author: '',
        edition: '',
        swap: '',
        userid: '',
        telephone: '',
        imageUrl: ''
    })

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

          if (!user) {
            console.error("Usuário não autenticado.");
            return;
        }

        const telefoneLimpo = book.telephone.replace(/\D/g, '');
        
          const newBook = {
            ...book,
            userid: String(user.id),
            telephone: telefoneLimpo
        };

        createBook(newBook)
            .then(()=> {
                setSuccess(true);
                console.log('Livro criado');

                setBook({
                    id: uuidv4(),
                    title: '',
                    author: '',
                    edition: '',
                    swap: '',
                    userid: '',
                    telephone: '',
                    imageUrl: '',
                    description: ''
                });
                setTimeout(() => setSuccess(false), 3000);
            })
            .catch((err) => console.error('Erro ao criar livro:', err));
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result as string;
                setBook((prev)=> ({...prev, imageUrl}));
            };
        reader.readAsDataURL(file);
      }
    }

    function formatarTelefone(valor: string) {
        const numeros = valor.replace(/\D/g, '');
        if (numeros.length <= 10) {
            return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
        }
        return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
        }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = e.target;
        if (name === "telephone"){
            const telefoneFormatado = formatarTelefone(value);
            setBook((prev) => ({ ...prev, telephone: telefoneFormatado }));
        } else {
            setBook((prev) => ({ ...prev, [name]: value }));
        }
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
                <PainelHeader></PainelHeader>
                <h1>Anunciar novo livro</h1>

                <form className={styles.formAddlivro} onSubmit={handleSubmit}>
                    <label className={styles.label}><strong>Título:</strong></label>
                    <input
                        className={styles.input}
                        name="title" 
                        type="text"
                        placeholder="Título do livro"
                        value={book.title}
                        onChange={handleChange}
                        required
                        />
                    <label className={styles.label}><strong>Autor:</strong></label>
                    <input
                        className={styles.input}
                        name="author"
                        type="text"
                        placeholder="Autor do livro"
                        value={book.author}
                        onChange={handleChange}
                        required
                        />
                    <label className={styles.label}><strong>Edição:</strong></label>
                    <input
                        className={styles.input}
                        name="edition"
                        type="text"
                        placeholder="Edição do livro"
                        value={book.edition}
                        onChange={handleChange}
                        required
                        />
                    <label className={styles.label}><strong>Livros desejados:</strong></label>
                    <input
                        className={styles.input}
                        name="swap"
                        type="text"
                        placeholder="Troca por..."
                        value={book.swap} 
                        onChange={handleChange}
                        required
                        />
                         <label className={styles.label}><strong>Telefone para contato:</strong></label>
                        <input
                            className={styles.input}
                            name="telephone"
                            type="text"
                            placeholder="(99) 99999-9999"
                            value={book.telephone}
                            onChange={handleChange}
                            required
                            />
                    <label className={styles.label}><strong>Descrição (opcional):</strong></label>
                    <textarea
                        className={styles.textarea}
                        name="description"
                        placeholder="Descrição do livro..."
                        value={book.description} 
                        onChange={handleChange}

                        />
                    <label className={styles.label}><strong>Imagem:</strong></label>
                    {book.imageUrl && (
                        <img src={book.imageUrl} alt="Preview" style={{ width: '300px' }} />
                    )}

                    <div className={styles.imgForm}>
                        <button className={styles.inputImg}>
                            <div className={styles.icon}>
                                <h4>Clique para dicionar uma foto</h4>
                                <p>Formatos suportados: JPG, PNG. Tamanho máximo: 5MB</p>
                                <FiUpload 
                                    size={30} 
                                    color='black' 
                                    cursor={'pointer'}
                                    ></FiUpload>
                                </div>
                        <div>
                             <input
                                type="file"
                                name="imageFile"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                />
                        </div>
                        </button>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
                {success && <p className={styles.success}>Livro cadastrado com sucesso!</p>}
            </div>
            <Footer></Footer>
        </div>
    )
}