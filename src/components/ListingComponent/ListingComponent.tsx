import "./ListingComponent.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setAllMealsArr, setFilteredMeals } from "../../store/mainSlice";

import MealItem from "../MealItem/MealItem";
import { getAllData } from "../../api/dataApi";

export default function ListingComponent() {
    const dispatch = useDispatch();

    const mealsData = useSelector(
        (state: RootState) => state.mainSlice.filteredMeals,
    );

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            async function getMeals() {
                const response = await getAllData();
                if (response) {
                    dispatch(setAllMealsArr(response.meals));
                    dispatch(setFilteredMeals(response.meals));
                }
            }
            getMeals();
        }
        return () => {
            isMounted = false;
        };
    }, [dispatch]);

    return (
        <section className='listing_container'>
            <ul className='listing_list'>
                {mealsData.length > 0 &&
                    mealsData.map(item => (
                        <MealItem key={item.idMeal} meal={item} />
                    ))}
            </ul>
        </section>
    );
}
