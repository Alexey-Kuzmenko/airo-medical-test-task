import { create } from "zustand";
import { apiConfig } from "./api/apiConfig";
const { url } = apiConfig

export const useRecipes = create((set) => ({
    recipes: [],
    fetchRecipes: async (page = '1') => {
        try {
            const response = await fetch(`${url}?page=${page}`)

            if (!response.ok) {
                throw new Error('Failed to fetch!')
            }

            set({
                recipes: await response.json(), error: null, loading: true
            })

        } catch (error) {
            set({ error: error.message })
        }
    },
    deleteRecipes: (selectedRecipes) => {
        set((state) => ({
            recipes: state.recipes.filter((recipe) => !selectedRecipes.includes(recipe))
        }))
    },
    loading: false,
    error: null
}));