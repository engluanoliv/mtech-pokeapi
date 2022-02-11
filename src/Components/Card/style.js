import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 250px;
    height: 250px;  
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background: rgba( 252, 253, 255, 0.03);
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.25 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    

    &:hover {
        transform: scale(1.12);
        ${'' /* transition: transform .2s ease; */}
        transition: transform .25s, visibility .25s ease;
    }


`

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: 1;
    background: rgba( 252, 253, 255, 0.09);
`

export const Content = styled.div`
    ${'' /* padding: 20px; */}
    border-radius: 20px;
    text-align: center;
    transition: 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    &::before {
        content: '';
        background: #6e898424;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        position: absolute;
        justify-content: center;
        z-index: -1;
    }
`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    margin: 0px;
    pointer-events: none;
    z-index: 1;
`

export const Texth3 = styled.h3`

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #fff;
    &::after {
        content: '';
        display: block;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
    }
`

export const Textp = styled.p`
    font-size: 1em;
    color: #fff;
    font-weight: 300;
    margin: 0px;
`

export const Texta = styled.a` 
    display: inline-block;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
`
