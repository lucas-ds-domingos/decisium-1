import { useOutletContext } from "react-router-dom";
import styles from "./home.module.css";

export function Home() {
    const { selectedItem } = useOutletContext<{ selectedItem: string | null }>();

    return (
        <div className={styles.container}>
            {selectedItem === "listagemOS" ? (
                <div>
                    <h2>Listagem de OS em aberto</h2>
                    <p>Aqui você pode visualizar todas as ordens de serviço em aberto.</p>
                </div>
            ) : (
                <h2>Bem-vindo ao sistema!</h2>
            )}
        </div>
    );
}