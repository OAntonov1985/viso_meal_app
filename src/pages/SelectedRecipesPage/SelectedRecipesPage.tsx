import "./SelectedRecipesPage.css";
import "../../components/ListingComponent/ListingComponent";
import MealItem from "../..//components/MealItem/MealItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function SelectedRecipesPage() {
    const selectedMealsArr = useSelector(
        (state: RootState) => state.mainSlice.selectedMealsArr,
    );

    const ingredients = useSelector(
        (state: RootState) => state.mainSlice.ingredients,
    );
    return (
        <section className='listing_container selected_container'>
            <ul className='listing_list'>
                {selectedMealsArr.length > 0 &&
                    selectedMealsArr.map(item => (
                        <MealItem key={item.idMeal} meal={item} />
                    ))}
            </ul>
            <ul>
                {ingredients.length > 0 &&
                    ingredients.map(item => <li key={item}>{item}</li>)}
            </ul>
        </section>
    );
}
