import { CategoryContainer, Title } from './category.styles';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component'
const Category = () => {
    const { category } = useParams();
    // console.log('render/ re-rendering categ. compo.')
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isloading = useSelector(selectCategoriesIsLoading);

    // const products = categoriesMap[category]
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        // console.log('effect fired calling setProducts')
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {
                isloading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer>
                        {products &&
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </CategoryContainer>
                )}

        </Fragment>
        // <Fragment>
        //     <Title>{category.toUpperCase()}</Title>
        //     <CategoryContainer>
        //         {products &&
        //             products.map((product) => (
        //                 <ProductCard key={product.id} product={product} />
        //             ))}
        //     </CategoryContainer>
        // </Fragment>
    )
}
export default Category;
