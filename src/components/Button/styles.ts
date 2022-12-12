import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 60px;
    display: flex;
    background-color: #e71e07;
    border-radius: 13px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover {
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid rgba(255, 255, 255, .2);
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 30px
`;

export const Label = styled.div`
    height: inherit;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex 1;
    padding: 0 20px;
`;