import "./MealItem.css";
import { Link } from "react-router";
import { IMealItem } from "../../shared/interfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    addMealToSelectedArr,
    deleteMealFromSelectedArr,
    collectIngredients,
} from "../../store/mainSlice";

interface MealItemProps {
    meal: IMealItem;
}
export default function MealItem({ meal }: MealItemProps) {
    const { strMeal, strMealThumb, idMeal, strCategory, strArea } = meal;

    const [isChecked, setIsChecked] = useState<boolean>(false);

    function handleChange(e: any): void {
        if (!isChecked) {
            dispatch(addMealToSelectedArr(e.target.id));
        } else dispatch(deleteMealFromSelectedArr(e.target.id));
        setIsChecked(isChecked => !isChecked);
        dispatch(collectIngredients());
    }

    const dispatch = useDispatch();

    return (
        <li className='meal_item_container' id={idMeal}>
            <Link to={`/recipe/${idMeal}`} className='meal_item_link'>
                <div className='meal_item_image'>
                    <img src={strMealThumb} alt='meal-pfoto' />
                </div>
                <div className='meal_item_title'>{strMeal}</div>
                <div className='meal_item_info'>
                    <div>{strCategory}</div>
                    <div>{strArea}</div>
                </div>
            </Link>
            <div className='meal_item_checkbox_container'>
                <label htmlFor='meal'>
                    {isChecked ? "Видалити" : "Додати"}
                </label>
                <input
                    id={idMeal}
                    type='checkbox'
                    checked={isChecked}
                    onChange={e => handleChange(e)}
                />
            </div>
        </li>
    );
}
