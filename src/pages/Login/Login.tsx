import {Link, useNavigate} from 'react-router-dom'
import logo from './../../assets/img/logo.svg'
import styles from './Login.module.css'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {
    const {login} = useAuth();
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');

    async function handleLogin(e: React.FormEvent){
        e.preventDefault();

        try{
            await login(email, password);;
            navigate('/')
        }catch(err: any){
            setError(err.message);
        }
    }

    return (
    <div className={styles.container}>
        <Link to={'/'}>
            <img src={logo} />
        </Link>
        <p>Faça o seu login para começar a trocar livros!</p>
        <form onSubmit={handleLogin}>
            <input 
                type="email" 
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Seu email'
                required
                />
            <input 
                type='password' 
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Sua senha'
                required
                />
            <button type='submit'>Continue</button>
            {error && <p>{error}</p>}
        </form>

        <Link className={styles.linkSemUnderline} to='/register' >
         <p>Não possui conta? <strong>Cadastre-se agora!</strong></p>
        </Link>
    </div>
  )
}
