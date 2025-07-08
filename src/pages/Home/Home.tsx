import { Header } from "../../components/Header/Header"
import styles from './Home.module.css';
import { BooksList } from "../../components/BooksList/BookList";
import { FiSearch } from 'react-icons/fi'
import { Footer } from "../../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>

      <div className={styles.inputWrapper}>
        <FiSearch className={styles.searchIcon} color="#618561" />
        <input
          className={styles.input}
          type="text"
          placeholder="Pesquisar por título ou autor"
        />
      </div>

         <h1>Livros Disponíveis</h1>
          <BooksList></BooksList>
        </div>
        <Footer></Footer>
    </div>

  )
}
