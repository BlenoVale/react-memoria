import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean
}
export const Container = styled.div<ContainerProps>`
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.showBackground ? '#fff' : ''};
    border: ${props => props.showBackground ? '6px solid #000': 'none'};
    transform: ${props => props.showBackground ? 'rotateY(-180deg)' : 'rotateY(0deg)'};
    transition: all linear .13s;
    cursor: pointer;

    @media (max-width: 750px) {
        width: 100px;
        height: 100px; 
    }
`;

type IconProps = {
    showWidth: boolean
}
export const Icon = styled.img<IconProps>`
    width: ${props => props.showWidth ? 'auto' : 'inherit'};
    height: ${props => props.showWidth ? '105px' : 'inherit'};
`;