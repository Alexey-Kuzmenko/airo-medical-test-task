import { Loader, RecipesList } from "../components";
import { useRecipes } from "../store";

const HomePage = () => {
    const loading = useRecipes((state) => state.loading)

    return (
        <div>
            {!loading ? <Loader /> : <RecipesList />}
        </div>
    );
}

export default HomePage;