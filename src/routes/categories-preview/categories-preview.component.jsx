import { useContext, Fragment } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap);
    const isloading = useSelector(selectCategoriesIsLoading);
    return (
        <Fragment>

            {isloading ? <Spinner /> : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                }))
            }
        </Fragment>
    )
};
export default CategoriesPreview;