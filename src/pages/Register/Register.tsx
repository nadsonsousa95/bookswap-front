import {Link, useNavigate} from 'react-router-dom'
import logo from './../../assets/img/logo.svg'
import styles from './../Login/Login.module.css'
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate()

  function validationPassword(password: string, confirmPassword: string){
    return(password == confirmPassword)
  }

  function onSubmit(data:FormValues){
    console.log(data)
    validationPassword('', '')
    navigate('/',{replace: true})
  }

  return (
    <div className={styles.container}>
        <Link to={'/'}>
            <img src={logo} />
        </Link>
        <p>Cadastre-se para começar a trocar livros!</p>


        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder='Seu nome'
                {...register('name', { required: 'O nome é obrigatório' })}
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            <input 
                type="email" 
                placeholder='Seu email'
                {...register('email', { required: 'O email é obrigatório' })}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            <input 
                type="text" 
                placeholder='(99)99999-9999'
                {...register('telephone', { required: 'O telefone é obrigatório' })}
                />
                {errors.telephone && <span className={styles.errorMessage}>{errors.telephone.message}</span>}
            <input 
                type='password' 
                placeholder='Criar senha'
                {...register('password', { required: 'A senha é obrigatória' })}
                />
                {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
            <input 
                type='password' 
                placeholder='Confirmar a senha'
                {...register('confirmPassword', { required: 'Confirme a senha' })}
                />
                {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword.message}</span>}

            <button type='submit'>Cadastre-se</button>
        </form>

        <Link className={styles.linkSemUnderline} to='/login' >
         <p>Já possui conta? <strong>Faça o seu login agora!</strong></p>
        </Link>
    </div>
  )
}

export default Register;