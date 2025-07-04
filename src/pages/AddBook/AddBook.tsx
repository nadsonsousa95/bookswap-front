import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import styles from './AddBook.module.css';
import type {Book}  from "../../types/Book";
import { v4 as uuidv4 } from 'uuid';
import { mockBooks } from "../../api/mockbooks";
import { FiUpload } from "react-icons/fi";


export default function AddBook(){
    const [book, setBook] = useState<Book>({
        id: parseInt(uuidv4()),
        title: '',
        author: '',
        edition: '',
        swap: '',
        user: '',
        imageUrl: ''
    })

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        mockBooks.push(book)
        console.log(book)

        setBook({
            id: 0,
            title: '',
            author: '',
            edition: '',
            description: '',
            swap: '',
            user: '',
            imageUrl: ''
        });
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

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = e.target;
        setBook(( prev )=> ({ ...prev, [name]:value }))
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
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
                    <label className={styles.label}><strong>Dercrição (opcional):</strong></label>
                    <textarea
                        className={styles.textarea}
                        name="description"
                        placeholder="Descrição do livro"
                        value={book.description} 
                        onChange={handleChange}
                        required
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
            </div>
            
        </div>
    )
}