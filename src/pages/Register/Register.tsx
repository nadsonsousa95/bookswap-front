import {Link} from 'react-router-dom'
import logo from './../../assets/logo.svg'
import styles from './../Login/Login.module.css'
// import { useForm } from 'react-hook-form';


function Register() {


  return (
    <div className={styles.container}>
        <Link to={'/'}>
            <img src={logo} />
        </Link>
        <p>Cadastre-se para começar a trocar livros!</p>
        <form>
            <input 
                type="text" 
                name="name" 
                placeholder='Seu nome'
                />
            <input 
                type="email" 
                name="email" 
                placeholder='Seu email'
                />
            <input 
                type='password' 
                name='password' 
                placeholder='Criar senha'
                />
            <input 
                type='password' 
                name='password' 
                placeholder='Confirmar a senha'
                />
            <button type='submit'>Continue</button>
        </form>

        <Link className={styles.linkSemUnderline} to='/login' >
         <p>Já possui conta? <strong>Faça o seu login agora!</strong></p>
        </Link>
    </div>
  )
}

export default Register;