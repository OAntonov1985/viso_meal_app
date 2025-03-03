import "./RecipePage.css";
import "../MainPage/MainPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getOneMeal } from "../../api/dataApi";
import { IMealAllIngredients } from "../../shared/interfaces";

export default function RecipePage() {
    const location = useLocation();
    const [mealData, setMealData] = useState<IMealAllIngredients[]>([]);

    useEffect(() => {
        let isMounted = true;
        const locationString = location.pathname.split("/");

        if (isMounted) {
            async function getMeals() {
                const response = await getOneMeal(locationString[2]);

                if (response) {
                    setMealData(response.meals);
                }
            }
            getMeals();
        }
        return () => {
            isMounted = false;
        };
    }, [location.pathname]);

    return (
        <main className='container'>
            <ul>
                <ul>
                    {mealData.length > 0 &&
                        mealData.map(item => (
                            <li key={item.idMeal} className='meal-item'>
                                <h2>{item.strMeal}</h2>
                                <img
                                    src={item.strMealThumb}
                                    alt={item.strMeal}
                                />
                                <p>
                                    <strong>Category:</strong>{" "}
                                    {item.strCategory}
                                </p>
                                <p>
                                    <strong>Area:</strong> {item.strArea}
                                </p>
                                <p>
                                    <strong>Instructions:</strong>{" "}
                                    {item.strInstructions}
                                </p>
                                <h3>Ingredients:</h3>
                                <ul>
                                    {item.strIngredient1 && (
                                        <li>
                                            {item.strIngredient1} -{" "}
                                            {item.strMeasure1}
                                        </li>
                                    )}
                                    {item.strIngredient2 && (
                                        <li>
                                            {item.strIngredient2} -{" "}
                                            {item.strMeasure2}
                                        </li>
                                    )}
                                    {item.strIngredient3 && (
                                        <li>
                                            {item.strIngredient3} -{" "}
                                            {item.strMeasure3}
                                        </li>
                                    )}
                                    {item.strIngredient4 && (
                                        <li>
                                            {item.strIngredient4} -{" "}
                                            {item.strMeasure4}
                                        </li>
                                    )}
                                    {item.strIngredient5 && (
                                        <li>
                                            {item.strIngredient5} -{" "}
                                            {item.strMeasure5}
                                        </li>
                                    )}
                                    {item.strIngredient6 && (
                                        <li>
                                            {item.strIngredient6} -{" "}
                                            {item.strMeasure6}
                                        </li>
                                    )}
                                    {item.strIngredient7 && (
                                        <li>
                                            {item.strIngredient7} -{" "}
                                            {item.strMeasure7}
                                        </li>
                                    )}
                                    {item.strIngredient8 && (
                                        <li>
                                            {item.strIngredient8} -{" "}
                                            {item.strMeasure8}
                                        </li>
                                    )}
                                    {item.strIngredient9 && (
                                        <li>
                                            {item.strIngredient9} -{" "}
                                            {item.strMeasure9}
                                        </li>
                                    )}
                                    {item.strIngredient10 && (
                                        <li>
                                            {item.strIngredient10} -{" "}
                                            {item.strMeasure10}
                                        </li>
                                    )}
                                </ul>
                                {item.strYoutube && (
                                    <a
                                        href={item.strYoutube}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Watch Recipe Video
                                    </a>
                                )}
                            </li>
                        ))}
                </ul>
            </ul>
        </main>
    );
}
