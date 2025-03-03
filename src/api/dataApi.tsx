export async function getAllData() {
    try {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?f=c",
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function getOneMeal(id: string) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export async function searchMeal(id: string) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`,
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
