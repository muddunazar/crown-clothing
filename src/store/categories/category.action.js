import CATEGORIES_ACTION_TYPES from "./categories.types";

import { createAction } from "../../utils/reducer/reducer.utils"

// export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
