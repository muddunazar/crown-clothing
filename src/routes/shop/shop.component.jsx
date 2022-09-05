import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../category/category.component'
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.jsx';
import { setCategories } from '../../store/categories/category.action.js';
import { useDispatch } from 'react-redux';
const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {

            // const categoryMap = await getCategoriesAndDocuments();
            const categoriesArray = await getCategoriesAndDocuments();

            // console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />

        </Routes>
    )
};
export default Shop;
// import SHOP_DATA from '../../shop-data.json';
// const Shop = () => {
//     return (
//         <div>
//             {SHOP_DATA.map(({ id, name }) => (
//                 <div key={id}>
//                     <h1>{name}</h1>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default Shop;