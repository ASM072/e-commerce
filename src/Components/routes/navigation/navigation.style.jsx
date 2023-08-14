import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 25px;
    // background-color: #c3d0e4;
`
export const LogoContainer=styled( Link )`
    height: 200px;
    width: 250px;
    padding-right: 5px;
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
    color: #10364d;
    font-size: 24px;
    
`


export const SearchBarContainer = styled.div`
    padding-top: 15px;
    align-items: center;
    align: center;
`