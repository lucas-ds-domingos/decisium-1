import styles from './sidebar.module.css';
import { useState } from 'react';

interface SidebarProps {
    setSelectedItem: (item: string | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ setSelectedItem }) => {
    
    const [openMenu, setOpenMenu] = useState<{ [key: string]: boolean }>({});

    const toggleMenu = (menu: string) => {
        setOpenMenu((prev) => ({
            ...prev,
            [menu]: !prev[menu] 
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerlogo}>
            <a className={styles.logo}>Decisium</a>
            </div>
            <div className={styles.divLista}>
                <ul>
                   
                    <li onClick={() => toggleMenu("serviço")} className="cursor-pointer">
                        Ordem de serviço
                    </li>
                    {openMenu["serviço"] && (
                        <ul className={styles.subMenu}>
                            <li>Ordem</li>
                            <li>Clientes</li>

                            <li onClick={() => toggleMenu("Relatorios")} className="cursor-pointer">
                                Relatórios
                            </li>
                            {openMenu["Relatorios"] && (
                                <ul className={styles.subMenu2}>
                                    <li
                                        onClick={() => setSelectedItem("listagemOS")}>
                                        Listagem de OS em aberto
                                    </li>
                                </ul>
                            )}
                        </ul>
                    )}
                </ul>
                    <div className={styles.separar}></div>
                <ul>
                    <li onClick={() => toggleMenu("Pagar")} className="cursor-pointer">
                        Contas a Pagar
                    </li>
                    {openMenu["Pagar"] && (
                        <ul className={styles.subMenu}>
                            <li>Fornecedor</li>
                            <li>Entrada NF</li>
                            <li>Baixa</li>
                        </ul>
                        )}
                </ul>
                    <div className={styles.separar}></div>
                
                <ul>
                    <li onClick={() => toggleMenu("Receber")} className="cursor-pointer">
                        Contas a Receber
                    </li>
                    {openMenu["Receber"] && (
                        <ul className={styles.subMenu}>
                            <li>mudar1</li>
                            <li>mudar2 NF</li>
                        </ul>
                        )}
                </ul>
                    <div className={styles.separar}></div> 
                <ul>
                    <li onClick={() => toggleMenu("caixa")} className="cursor-pointer">
                        Fluxo de caixa
                    </li>
                    {openMenu["caixa"] && (
                        <ul className={styles.subMenu}>
                            <li>DRE</li>
                            <li>Fluxo de caixa</li>
                        </ul>
                        )}
                </ul>
                    <div className={styles.separar}></div>
                <ul>
                    <li onClick={() => toggleMenu("Basicos")} className="cursor-pointer">
                        Basicos
                    </li>
                    {openMenu["Basicos"] && (
                        <ul className={styles.subMenu}>
                            <li>Pois</li>
                            <li>Cidades</li>
                        </ul>
                        )}
                </ul>
                    <div className={styles.separar}></div>
            </div>
        </div>
    );
};
