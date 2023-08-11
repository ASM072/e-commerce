import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 25px;
`
export const LogoContainer=styled( Link )`
    height: 200px;
    width: 150px;
    padding-right: 5px;
    //padding-bottom: 25px; 
    justify-content: flex-start;
`
export const NavigationLinkContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
    
export const NavLink = styled( Link )`
    padding: 10px 15px;
    cursor: pointer;
`

export const SearchBarContainer = styled.div`
    align-items: center;
    padding-top:30px;
`