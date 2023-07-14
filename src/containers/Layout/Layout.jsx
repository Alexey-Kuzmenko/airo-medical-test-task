import styles from './Layout.module.scss'
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import { Header } from '../../components';
import { useRecipes } from '../../store';
import { useEffect } from 'react';

export const Layout = () => {
    const fetchRecipes = useRecipes((state) => state.fetchRecipes)

    useEffect(() => {
        fetchRecipes()
    }, []);

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
