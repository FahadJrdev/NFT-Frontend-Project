import styled from 'styled-components';
export const HeroContainer = styled.div `
    background: url('Images/Main-Bg.png') no-repeat top center;
    background-size: cover;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 30px;
    height: 750px;
    min-height: 100%;
    position: relative;
    z-index: 1;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,0.85);
        z-index: 2;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 992px) {
        background-size: contain;
        background-repeat: repeat;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        height: 635px;
    }
    @media screen and (max-width: 350px) {
        background-size: contain;
        background-repeat: repeat;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        height: 700px;
    }
    @media screen and (max-width: 300px) {
        background-size: contain;
        background-repeat: repeat;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        height: 850px;
    }
    @media screen and (max-width: 270px) {
        background-size: contain;
        background-repeat: repeat;
        width: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        height: 950px;
    }
`;



export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    top: 38%;
    bottom: 20%;
    padding: 25px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 992px) {
        top: 30%;
    }
    @media screen and (max-width: 768px) {
        top: 25%;
    }
    @media screen and (max-width: 480px) {
        top: 15%;
        right: 0;
    }
`;

export const HeroH1 = styled.h1 `
    color: #fff;
    font-size: 64px;
    font-family: "HelveticaNeueLTStdBdCn";
    margin: 0;
    max-width: 912px;
    font-weight: 100;
    line-height: 1;

    @media screen and (max-width: 768px) {
        font-size: 48px;
        margin-bottom: 10px;
        line-height: 1.2;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
    }
`;

export const HeroP = styled.p `
    color: #fff;
    font-size: 18px;
    font-family: "HelveticaNeueLTStdRoman";
    max-width: 800px;
    margin-right: auto;
    line-height: 1.2;
    margin-top: 10px;
    letter-spacing: 1px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 1.4;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }    
    @media screen and (max-width: 350px) {
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    }    
`;