import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 1250px){
        max-width: 750px;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 20px;
    }
`;

type GridProps = {
    isWinner: boolean;
}
export const Grid = styled.div<GridProps>`
    width: 800px;
    display: ${props => props.isWinner ? 'none' : 'grid'};
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;

    @media (max-width: 750px) {
        width: 500px;
        grid-template-columns: repeat(3, 1fr);
    }
`;

type WinnerPropos = {
    isWinner: boolean;
}
export const WinnerArea = styled.div<WinnerPropos>`
    width: 800px;
    display: ${props => props.isWinner ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const TextWinner = styled.div`
    font-size: 35px;
    color: #fff;
    text-align: center;
    line-height: 150%
`;

export const ImgWinner = styled.img`
    height: 400px;
    width: auto;

    @media (max-width: 750px) {
        height: 320px;
    }
`;