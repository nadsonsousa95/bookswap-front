import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';
import logo from '../../assets/img/logo.svg';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

function About() {
  return (
    <div>
    <div className={styles.container}>
        <Header></Header>
      
      <h1>Sobre Nós</h1>
      <p className={styles.subtitle}>Conheça a proposta por trás da nossa plataforma</p>

      <div className={styles.content}>
        <p>
          Esta plataforma foi desenvolvida como parte da disciplina <strong>Sistemas Web de Computação </strong> 
           da <strong>Universidade Federal da Bahia</strong> (UFBA).
        </p>
        <p>
          Nosso objetivo é incentivar a leitura, promover o compartilhamento de livros e facilitar a conexão 
          entre leitores. Acreditamos que o conhecimento deve circular, e nada melhor do que uma comunidade colaborativa 
          para tornar isso possível.
        </p>
        <p>
          O sistema permite que usuários cadastrem, procurem e troquem livros entre si de forma prática, rápida e gratuita.
          Além disso, buscamos criar um ambiente acessível e acolhedor para amantes da leitura de todas as idades.
        </p>
        <p>
          Agradecemos aos colegas, professora <strong>Laise Cavalcante</strong> e à universidade por todo o apoio na construção desse projeto.
        </p>
      </div>

      <Link className={styles.backLink} to="/">← Voltar à Página Inicial</Link>
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default About;
