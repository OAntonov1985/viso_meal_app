import "./SelectorsAndSearch.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
    setSortedBycategotie,
    setFilteredMeals,
    setFilteredMealsFromSearch,
} from "../../store/mainSlice";
import { useEffect, useState } from "react";
import { searchMeal } from "../../api/dataApi";

export default function SelectorsAndSearch() {
    const dispatch = useDispatch();
    const [searchFrase, setSearchFrase] = useState<string>("");
    const mealsCategories = useSelector(
        (state: RootState) => state.mainSlice.mealsCategories,
    );

    function handleChange(e: any): void {
        dispatch(setSortedBycategotie(e.target.value));
    }

    useEffect(() => {
        let isMounted = true;
        let timeoutId: NodeJS.Timeout;

        if (isMounted) {
            async function getMeals() {
                timeoutId = setTimeout(async () => {
                    const response = await searchMeal(searchFrase);

                    if (response && searchFrase.length > 0) {
                        dispatch(setFilteredMealsFromSearch(response.meals));
                    }
                }, 500);
            }

            getMeals();
        }

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [searchFrase, dispatch]);

    return (
        <div className='selector_and_search_container'>
            <input
                type='text'
                className='selector_and_search_input'
                onChange={e => setSearchFrase(e.target.value)}
            />
            <div className='selector_container'>
                <select
                    name='category_selector'
                    id=''
                    onChange={e => handleChange(e)}
                >
                    {mealsCategories.length > 0 &&
                        mealsCategories.map(item => (
                            <option key={item} value={`${item}`}>
                                {item}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}
