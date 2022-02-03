import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
`

export const ContentCard = styled.div`
    width: 230px;
    height: 320px;  
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
`

export const Content = styled.div`
    padding: 20px;
    text-align: center;
    transition: 0.5s;
`

export const Avatar = styled.img`
    ${'' /* font-size: 5em; */}
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0px;
    ${'' /* color: rgba(0, 0, 0, 0.05); */}
    pointer-events: none;
`

export const Texth3 = styled.h3`
    font-size: 1.8em;
    color: rgba(0,0,0);
    margin: 0px;

`

export const Textp = styled.p`
    font-size: 1em;
    color: rgba(0,0,0);
    font-weight: 300;
    margin: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const Texta = styled.a` 
    display: inline-block;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
`
