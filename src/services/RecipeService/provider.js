import axios from "axios";
import { URL_RECEPIES_BY_LETTER, URL_RECIPE_BY_ID } from "@/constants";

export const getRecipesByLetter = async (letter) => {
  const data = await axios.get(URL_RECEPIES_BY_LETTER);
  return data?.data?.meals;
};

export const getRecipesById = async (id) => {
  const data = await axios.get(`${URL_RECIPE_BY_ID}${id}`);
  return data?.data?.meals[0];
};
