import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo1.svg';
import './footer.scss';
import { Link, Outlet } from 'react-router-dom';
import { Box,  Rating } from '@mui/material';
import Typography from '@mui/material/Typography';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Footer = () =>
{
      
    return (
        <div className="footer">
            <div className="footer-content">
                <div className='LogoContainer' to="/">
                    <Logo className="logo" />
                </div>
                <div className='ratingController'>
                    <h3>
                        The Most Exclusive Watch Shop!
                    </h3><br></br>
                    <div className='rating'>
                        <BasicRating/>
                    </div>
                </div>
                <div className="footer-links">
                    <Link className='homepage' to="/">
                        <h2>Home</h2>
                    </Link><br></br>
                    <Link className='shop' to="/shop"><h2>
                        Products
                    </h2></Link><br></br>
                    <Link className='about' to="/about"><h2>
                        About Us
                    </h2></Link>      
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; { new Date().getFullYear() } Your Company. All rights reserved.</p>
            </div>
        </div>
    );
}

export function BasicRating ()
{
    const [ value, setValue ] = React.useState( 2 );

    return (
        <Box
            sx={ {
                '& > legend': { mt: 2 },
            } }
        >
            <Typography component="legend">Rate your vist!</Typography>
            <Rating
                name="simple-controlled"
                value={ value }
                onChange={ ( event, newValue ) =>
                {
                    setValue( newValue );
                } }
            />
        </Box>
    );
}

export default Footer;
