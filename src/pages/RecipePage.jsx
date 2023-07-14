import { useParams, Navigate } from "react-router-dom";
import { PageLayout } from "../components";
import { useRecipes } from "../store";

const RecipePage = () => {
    const recipes = useRecipes((state) => state.recipes)
    const { id } = useParams()
    const recipe = recipes[id]

    const { image_url, name, description, first_brewed, tagline, abv, ph } = recipe

    if (id === ":id" || id === null) {
        console.log("id not found");
        return <Navigate to={"/"} replace />
    }

    return (
        <PageLayout
            imgUrl={image_url}
            name={name}
            description={description}
            firstBrewed={first_brewed}
            tagline={tagline}
            abv={abv}
            ph={ph}
        />
    );
}

export default RecipePage;