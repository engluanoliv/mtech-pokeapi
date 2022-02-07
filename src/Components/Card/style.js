import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 170px;
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
`

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
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
    z-index: 1;
`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0px;
    pointer-events: none;
`

export const Texth3 = styled.h3`

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-top: 0px;
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
