
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg'
import iconNotf from './../../assets/icons/messages.svg'
import profile from './../../assets/img/profile.svg'

export function Header(){
    const loadingAuth: boolean = false;
    const signed: boolean = true;

    return (
        <div className={styles.container}>
            <header>
                <Link to='/'>
                    <img className={styles.logo} src={logo}/>
                </Link>

                <div>
                    {!loadingAuth && !signed && (
                        <Link to={'/login'}>
                            <button className={styles.button}>Entrar</button>
                        </Link>
                    )}

                    {!loadingAuth && signed && (
                        <div className={styles.navLinks}>
                            <Link to={'/'}>
                                <img style={{ width:35 }} src={iconNotf}/>
                            </Link>
                            <Link to={'/dashboard'}>
                                <img style={{ width:40}} src={profile}/>
                            </Link>
                        </div>
                    )}
                </div>
                
            </header>
        </div>
    )
}