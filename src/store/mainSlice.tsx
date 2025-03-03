import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    IAllMeals,
    MealState,
    IMealItem,
    IMealAllIngredients,
} from "../shared/interfaces";

const initialState: MealState = {
    allMeals: [],
    filteredMeals: [],
    activepage: 1,
    totalPages: 0,
    mealsCategories: [],
    selectedMealsArr: [],
    ingredients: [],
};

const mainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        setAllMealsArr: (state, action: PayloadAction<IAllMeals[]>) => {
            state.allMeals = action.payload;
            const uniqueCategories = Array.from(
                new Set(action.payload.map(meal => meal.strCategory)),
            );
            uniqueCategories.push("All categoties");
            state.mealsCategories = uniqueCategories.sort();
        },
        setActivepage: (state, action: PayloadAction<number>) => {
            state.activepage = action.payload;
            const activePage = action.payload;
            const itemsPerPage = 10;
            const startIndex = (activePage - 1) * itemsPerPage;
            const endIndex = activePage * itemsPerPage;
            state.filteredMeals = state.allMeals.slice(startIndex, endIndex);
        },
        setFilteredMeals: state => {
            const activePage = state.activepage;
            const itemsPerPage = 10;
            const startIndex = (activePage - 1) * itemsPerPage;
            const endIndex = activePage * itemsPerPage;
            state.filteredMeals = state.allMeals.slice(startIndex, endIndex);
            state.totalPages = Math.ceil(state.allMeals.length / 10);
        },
        setSortedBycategotie: (state, action: PayloadAction<string>) => {
            const sortCategorie = action.payload;
            state.activepage = 1;
            if (sortCategorie === "All categoties") {
                state.filteredMeals = state.allMeals.slice(0, 10);
                state.totalPages = Math.ceil(state.allMeals.length / 10);
            } else {
                const filteredData = state.allMeals.filter(
                    item => item.strCategory === sortCategorie,
                );
                state.filteredMeals = filteredData;
                state.totalPages = Math.ceil(filteredData.length / 10);
            }
        },
        addMealToSelectedArr: (state, action: PayloadAction<string>) => {
            const idMeal = action.payload;
            const newMeal = state.allMeals.find(item => item.idMeal === idMeal);

            if (newMeal) {
                state.selectedMealsArr = [...state.selectedMealsArr, newMeal];
            }
        },

        deleteMealFromSelectedArr: (state, action: PayloadAction<string>) => {
            const idMeal = action.payload;
            state.selectedMealsArr = state.selectedMealsArr.filter(
                (item: IMealItem) => item.idMeal !== idMeal,
            );
        },
        collectIngredients: state => {
            const ingredientsMap: Record<string, string[]> = {};

            state.selectedMealsArr.forEach(recipe => {
                const fullRecipe = recipe as IMealAllIngredients;

                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        fullRecipe[
                            `strIngredient${i}` as keyof IMealAllIngredients
                        ];
                    const measure =
                        fullRecipe[
                            `strMeasure${i}` as keyof IMealAllIngredients
                        ];

                    if (ingredient && ingredient.trim().length > 0) {
                        if (!ingredientsMap[ingredient]) {
                            ingredientsMap[ingredient] = [];
                        }
                        if (measure && measure.trim().length > 0) {
                            ingredientsMap[ingredient].push(measure);
                        }
                    }
                }
            });

            state.ingredients = Object.entries(ingredientsMap).map(
                ([ingredient, measures]) =>
                    `${ingredient}: ${measures.join(", ")}`,
            );
        },
        setFilteredMealsFromSearch: (
            state,
            action: PayloadAction<IAllMeals[]>,
        ) => {
            state.filteredMeals = action.payload.slice(0, 10);
            state.totalPages = Math.ceil(action.payload.length / 10);
        },
    },
});

export const {
    setAllMealsArr,
    setActivepage,
    setFilteredMeals,
    setSortedBycategotie,
    addMealToSelectedArr,
    deleteMealFromSelectedArr,
    collectIngredients,
    setFilteredMealsFromSearch,
} = mainSlice.actions;

export default mainSlice.reducer;
