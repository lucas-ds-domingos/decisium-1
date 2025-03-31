
import styles from './login.module.css'

export function Login(){
    return(
        <div className={styles.fundo}>
            <div className={styles.container}>
                <br></br>
            <h1>DECISIUM</h1>
            <br></br>
                <input placeholder="Login"></input>
                    <br></br>
                <input placeholder="Senha"></input>
                    <br></br>
                <button><a href="/home">Entrar</a></button>
            </div>
        </div>
    )
}