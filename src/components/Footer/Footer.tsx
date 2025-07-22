import styles from './Footer.module.css';
import logo from './../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="logo BookSwap" className={styles.logo} />
          <p className={styles.slogan}>
            Incentivamos a leitura acessível e sustentável.<br />
            <strong>Doe, troque e dê uma nova vida aos seus livros!</strong>
          </p>
           <p>© 2025 BookSwap. Desenvolvido na disciplina Sistemas Web - UFBA.</p>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h4>Institucional</h4>
            <ul>
              <li><Link to="/aboutUs">Sobre Nós</Link></li>
              <li><Link to="/contact">Contato</Link></li>
              <li><a href="https://ufba.br" target="_blank" rel="noreferrer">UFBA</a></li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li><Link to="/">Explorar Livros</Link></li>
              <li><Link to="/register">Criar Conta</Link></li>
              <li><Link to="/login">Entrar</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
