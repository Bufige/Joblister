import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
`;

export const Column = styled.div`
    text-align: center;
    align-items:center;
    ${props => (props.logo && css`text-align: left;`)
        || (props.labels && css`display:flex;`)
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;