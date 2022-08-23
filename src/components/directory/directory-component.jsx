import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles'
const categories = [
    {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
        "route": 'shop/hats'
    },
    {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
        "route": 'shop/jackets'
    },
    {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
        "route": 'shop/sneakers'
    },
    {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
        "route": 'shop/womens'
    },
    {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5f37e35e-df63-11ec-8bdd-c253e043f5f0.jpg?crop=7275%2C4092%2C358%2C242&resize=1500",
        "route": 'shop/mens'
    }
]
const Directory = () => {
    return (
        // <div className="category-container"></div>
        <DirectoryContainer>
            {/* {categories.map(({ title, id, imageUrl }) => ( */}
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}
export default Directory;
