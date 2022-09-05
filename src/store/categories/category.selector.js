import {createSelector} from 'reselect';

const selectCategoryReducer = (state)=>state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],//if this is different((if ran 2nd time categories remain same ,thus selector 1 only fires up))
    (categoriesSlice)=>categoriesSlice.categories//then run this.. 
);



export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=>
    categories.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
); 
//4cut export const selectCategoriesMap = (state) => {
//     console.log('selector fired!!')
//     return state.categories.categories
//     .reduce((acc, category) => {
//         const { title, items } = category
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});
// }

//3 cut// export const selectCategoriesMap = (state) => state.categories.categories
// .reduce((acc, category) => {
    //     const { title, items } = category
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // }, {});
    
    //2cut// .reduce((acc, docSnapshot) => {
        //     const { title, items } = docSnapshot.data();
        //     acc[title.toLowerCase()] = items;
        //     return acc;
        // }, {});
        
    //1cut export const selectCategoriesMap = (state) => state.categories.categoriesMap;