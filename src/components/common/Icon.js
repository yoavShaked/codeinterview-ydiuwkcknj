import styled from "styled-components";

const getDefault = (preferredValue, defaultValue) => preferredValue || defaultValue

const Icon = styled.img`
width: ${({width}) => getDefault(width, 40)}px;
height: ${({height}) => getDefault(height, 40)}px;
`;

export default Icon;