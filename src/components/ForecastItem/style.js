import styled from "styled-components";

export const Row = styled.div`
display:flex;

align-items: center;
&:last-child {
    padding-left: 40px;
    margin-bottom: 20px;
}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    padding-left: 15px;
    justify-content: space-around;
    cursor: pointer;
    width: 320px;
    transition: box-shadow 0.7s ease-in-out;
    box-shadow: none;
    border-radius: 5px;
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export const Label = styled.span`
font-size: 24px;
font-weight: 500;
margin-left: 20px;
`;