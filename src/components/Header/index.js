import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logo} alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Produtos</a>
                    <a>Contato</a>
                </nav>
            </div>
        </header>
    )
}