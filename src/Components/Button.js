import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: uppercase;
    background: transparent;
    font-size: 1.4rem;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem !important;
    cursor: pointer;
    padding: 0.4rem ;
    &:hover{
        border: 0.05rem solid var(--mainDark);
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
`;