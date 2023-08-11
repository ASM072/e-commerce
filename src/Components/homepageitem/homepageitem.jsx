import { HomePageBodyContainer, HomePageItemContainer, BackgroundImage } from './homepageitemstyle.jsx'
import { useNavigate } from 'react-router-dom';

const HomePageItem = ( { category } ) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate( route );
    return (
        <HomePageItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <HomePageBodyContainer>
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </HomePageBodyContainer>
        </HomePageItemContainer>
    )
}
export default HomePageItem