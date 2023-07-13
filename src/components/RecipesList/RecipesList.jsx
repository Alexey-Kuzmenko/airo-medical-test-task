import styles from './RecipesList.module.scss'
import { useRecipes } from '../../store';
import RecipeCard from './RecipeCard/RecipeCard';

export const RecipesList = () => {
    const recipes = useRecipes((state) => state.recipes)
    console.log(recipes);

    const renderRecipes = () => {
        return recipes.map(({ id, name, tagline, description }) => {
            return (
                <RecipeCard
                    key={id}
                    name={name}
                    tagline={tagline}
                    description={description}
                />
            )
        })
    }

    return (
        <div className={styles.RecipesList}>
            <div>
                <h1 className='text-center mb-5'>Recipes List</h1>

                <div className={styles.RecipesList__innerFlexContainer}>
                    {renderRecipes()}
                </div>
            </div>
        </div>
    );
}

