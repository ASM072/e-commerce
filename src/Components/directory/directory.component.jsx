import HomePageItem from '../homepageitem/homepageitem';
import './directory.style.scss'

const Directory = ( { categories } ) =>
{
    return (
        <div className="directoryContainer">
            { categories.map( ( category ) => (
                <HomePageItem key={ category.id } category={ category } />
            ) ) }
        </div>
    )
}

export default Directory