import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import iconNotf from './../../assets/icons/messages.svg';
import profile from './../../assets/img/profile.svg';
import { useAuth } from "../../contexts/AuthContext.tsx";
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

export function Header(){
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false)

    return (
            <header className={styles.header}>
                <nav>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt='Logo'/>
                </Link>

                <button
                    className={styles.menuToggle}
                    onClick={()=> setMenuOpen(!menuOpen)}
                ><IoMenu/></button>

                <div className={`${styles.headerLinks} ${menuOpen ? styles.open : ''}`}>
                    {!user && (
                        <Link to={'/login'}>
                            <button className={styles.button}>Entrar</button>
                        </Link>
                    )}

                    {user && (
                        <div className={styles.nav}>
                            <div className={styles.textLinks}>
                                <Link  to={'/'}>
                                     <a href='/'>Buscar Livros</a>
                                </Link>
                               <Link to={'/mybooks'}>
                                     <a href='/'>Minha biblioteca</a>
                                </Link>
                            </div>
                            <div className={styles.navLinks}>
                                <Link to={'/'}>
                                    <img style={{ width:35 }} src={iconNotf}/>
                                </Link>
                                <Link to={'/dashboard'}>
                                    <img style={{ width:40}} src={profile}/>
                                </Link>
                           </div>
                        </div>
                    )}
                </div>
                </nav>
            </header>
    )
}