import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById, updateBookById } from "../../services/bookService";
import type { Book } from "../../types/Book";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from './EditBook.module.css';
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";

export default function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getBookById(id).then((res) => {
                setBook(res.data);
                setLoading(false);
            });
        }
    }, [id]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        if (book) setBook({ ...book, [name]: value });
    }
    
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file && book) {
            const reader = new FileReader();
            reader.onloadend = () => {
            const imageUrl = reader.result as string;
            setBook((prev) => {
                if (!prev) return null;
                return { ...prev, imageUrl };
            });
            };
            reader.readAsDataURL(file);
        }
    }


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (book) {
            updateBookById(book.id, book)
                .then(() => {
                    alert("Livro atualizado com sucesso!");
                    navigate(`/books/${book.id}`);
                })
                .catch((err) => {
                    console.error(err);
                    alert("Erro ao atualizar o livro.");
                });
        }
    }

    if (loading) return <p>Carregando...</p>;
    if (!book) return <p>Livro não encontrado</p>;

    return (
        <div>
            <Header></Header>
       
        <form className={styles.formEdit} onSubmit={handleSubmit}>
            <Link to={`/books/${book.id}`}>
                    <IoIosReturnLeft 
                        size={25}
                        color="#0F1A12"
                    />
                </Link>
            <h1>Editar Livro</h1>
            <label><strong>Título:</strong></label>
            <input
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Título"
                required
            />
            <label><strong>Autor:</strong></label>
            <input
                name="author"
                value={book.author}
                onChange={handleChange}
                placeholder="Autor"
                required
            />
            <label><strong>Edição:</strong></label>
            <input
                name="edition"
                value={book.edition}
                onChange={handleChange}
                placeholder="Edição"
            />
            <label><strong>Descrição:</strong></label>
            <textarea
                name="description"
                value={book.description}
                onChange={handleChange}
                placeholder="Descrição"
            />
            <label><strong>Troca por:</strong></label>
            <input
                name="swap"
                value={book.swap}
                onChange={handleChange}
                placeholder="Trocas desejadas"
            />
            <label><strong>Imagem:</strong></label>
             {book.imageUrl && (
                        <img src={book.imageUrl} alt="Preview" style={{ width: '300px' }} />
                    )}
            <div className={styles.imgForm}>
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
                    />
                    </div>
            </div>
            <button type="submit">Salvar alterações</button>
        </form>
        <Footer></Footer>
         </div>
    );
}
