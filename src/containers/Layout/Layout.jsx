import styles from './Layout.module.scss'
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import { Header } from '../../components';

export const Layout = () => {
    return (
        <div className={styles.Layout}>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div>
    );
}
