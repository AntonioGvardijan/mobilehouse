import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Image = styled.image`
    width: 100%;
    height: 20vh;

    & > img {
        
        width: 100%;
    }
`

export const FormContainer = styled.div`
    margin-top: 20px;
`

export const Footer = styled.div`
    position: relative;
    display: flex;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background: black;
    padding: 20px;
    margin-top: 50px;

    & > FaFacebook{
        color: white;
    }
`

export const Headline = styled.h1`
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
`

export const Subline = styled.h4`
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const FooterText = styled.h4`
    color: white;
    font-size: 1.2rem;
`

export const Wrapper = styled.div`
    width: 80%;
    max-width: 1300px;
    margin: 0 auto;
    align-items: center;
`