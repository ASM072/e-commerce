import CategoryItem from '../categoryItem/categoryItem.component';
import './directory.style.scss'

const Directory = ( { categories } ) =>
{
    return (
        <div className="directoryContainer">
            { categories.map( ( category ) => (
                <CategoryItem key={ category.id } category={ category } />
            ) ) }
        </div>
    )
}

export default Directory