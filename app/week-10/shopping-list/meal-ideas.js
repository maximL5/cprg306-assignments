"use client";

import { useEffect, useState } from 'react';

// API fetch function (outside the component)
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || []; // Return empty array if no meals found
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  // State to hold the meal ideas
  const [meals, setMeals] = useState([]);

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } else {
      setMeals([]); // Clear meals if no ingredient is selected
    }
  };

  // useEffect to load meal ideas when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the component
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 bg-slate-700 hover:bg-slate-600 cursor-pointer rounded"
            >
              <div className="flex items-center">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span>{meal.strMeal}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
}