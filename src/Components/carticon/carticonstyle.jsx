import { styled } from "styled-component";
import { ReactComponent as CartIconSvg } from '../../assets/shopbag.svg';

export const ShoppingIcon = styled( CartIconSvg )`
    height: 30px;
    width: 30px;
`

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`

