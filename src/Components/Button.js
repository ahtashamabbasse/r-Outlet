import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: uppercase;
    background: transparent;
    font-size: 1rem;
    border: 0.05rem solid ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5rem !important;
    cursor: pointer;
    padding: 0.5rem ;
    margin: 0px 1rem 1rem;
    &:hover{
        border: 0.05rem solid var(--mainDark);
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--white);
    }
`;