import styles from './RecipesList.module.scss'
import { useRecipes } from '../../store';
import RecipeCard from './RecipeCard/RecipeCard';
import { Alert } from '../Alert/Alert';
import { useState, useEffect } from 'react';

export const RecipesList = () => {
    const { recipes, error, deleteRecipes, fetchRecipes } = useRecipes((state) => ({
        recipes: state.recipes,
        error: state.error,
        deleteRecipes: state.deleteRecipes,
        fetchRecipes: state.fetchRecipes
    }))
    const [selectedItems, setSelectedItems] = useState([]);
    const limit = 15

    useEffect(() => {
        if (recipes.length === 0) {
            fetchRecipes('2')
        }
    }, [recipes, fetchRecipes]);

    const onContextMenuHandler = (e, item) => {
        e.preventDefault()

        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item))
        } else {
            setSelectedItems([...selectedItems, item])
        }
    }

    const onDeleteClickHandler = () => {
        deleteRecipes(selectedItems)
    }

    const renderRecipes = () => {
        return recipes.slice(0, limit).map((recipe) => {
            return (
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    tagline={recipe.tagline}
                    description={recipe.description}
                    onContextMenuClick={(e) => onContextMenuHandler(e, recipe)}
                    selected={selectedItems.includes(recipe) ? 'selected' : ''}
                />
            )
        })
    }

    return (
        <div className={styles.RecipesList}>
            <div>
                <h1 className='text-center mb-5'>Recipes List</h1>

                <div className={styles.RecipesList__innerFlexContainer}>

                    {
                        !selectedItems.length ? null
                            :
                            <div className="card mb-3">
                                <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                                    Click button to delete recipe
                                    <button className='btn btn-danger' onClick={onDeleteClickHandler}>Delete items</button>
                                </div>
                            </div>
                    }

                    {error ? <Alert type='danger'>{error}</Alert> : <ul style={{ padding: 0 }}>{renderRecipes()}</ul>}
                </div>
            </div>
        </div>
    );
}

