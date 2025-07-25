import { Header } from "../../components/Header/Header"
import styles from './Dashboard.module.css'
import { useState, useEffect } from "react";
import type { StudentProfile } from "../../types/ProfileProps";
import profileImg from './../../assets/img/profile.svg'
import { PainelHeader } from "../../components/PainelHeader/PainelHeader.tsx";
import { Footer } from "../../components/Footer/Footer";
import { useAuth } from "../../contexts/AuthContext.tsx";
import type { Book } from "../../types/Book.ts";
import { getBooksByUserId } from "../../services/bookService.ts";
import { BooksList } from "../../components/BooksList/BookList.tsx";

function Dashboard() {
    const { user } = useAuth();
    const [internalbooks, setInternalBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState<StudentProfile>({
      name: user?.name ?? '',
      email: user?.email ?? '',
      telephone: '71992232517',
      course: "Ciência da Computação",
      bio: "Apaixonado por tecnologia e educação.",
      img: ''
    });

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

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
      const { name, value } = e.target;
      setProfile((prev) => ({ ...prev, [name]: value }));
      };

      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>
       ) => {
        const file = e.target.files?.[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setProfile((prev) => ({ ...prev, img: imageUrl }));
        }
      };

    const handleEditToggle = () => {
      setIsEditing(!isEditing);
      };

  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <PainelHeader></PainelHeader>
      <h1 className={styles.title}>Perfil</h1>
      <h2>Bem vindo, {user?.name}!</h2>
      <p className={styles.subtitle}>Gerencie suas informações e livros</p>

      <div className={styles.profileCard}>
        <label>
          <strong>Foto de Perfil:</strong><br></br>
          {isEditing ? (
            <input 
               type="file" 
               accept="image/*" 
               onChange={handleImageChange} 
            />) : (
                <img 
                  className={styles.imgprofile}
                  src={profile.img || profileImg}
                  alt="Foto de Perfil"
                  ></img>
                )}
          {isEditing && profile.img && (
              <img 
                src={profile.img} 
                alt="Pré-visualização" 
                className={styles.imgpreview}
              />
            )}

        </label>
        <label>
          <strong>Nome:</strong>
          {isEditing ? (
            <input
              className={styles.input} 
              type="text" 
              name="name" 
              value={profile.name} 
              onChange={handleChange} />
          ) : (
            <p>{profile.name}</p>
          )}
        </label>

        <label>
          <strong>Email:</strong>
          {isEditing ? (
            <input
              className={styles.input} 
              type="email" 
              name="email" 
              value={profile.email} 
              onChange={handleChange} />
          ) : (
            <p>{profile.email}</p>
          )}
        </label>

        <label>
          <strong>Curso:</strong>
          {isEditing ? (
            <input
              className={styles.input} 
              type="text" 
              name="course" 
              value={profile.course} 
              onChange={handleChange} />
          ) : ( <p>{profile.course}</p> )}
        </label>

        <label>
          <strong>Telefone: </strong>
          {isEditing ? (
            <input
              className={styles.input} 
              type="text" 
              name="telephone" 
              value={profile.telephone} 
              onChange={handleChange} />
          ) : ( <p>{profile.telephone}</p> )}
        </label>

        <label>
          <strong>Bio:</strong>
          {isEditing ? (
            <textarea
              className={styles.textarea} 
              name="bio" 
              value={profile.bio} 
              onChange={handleChange} />
          ) : ( <p>{profile.bio}</p> )}
        </label>

        <button className={styles.button} 
          onClick={handleEditToggle}>
          {isEditing ? "Salvar" : "Editar Perfil"}
        </button>
      </div>
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

export default Dashboard