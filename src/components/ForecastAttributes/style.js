import styled from "styled-components";

export const MinMaxContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemContainer = styled.div `
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    height: 200px;
    width: 180px;
    margin-right: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const Title = styled.span`
    font-size: ${({fontSize}) => fontSize || 26}px;
`;