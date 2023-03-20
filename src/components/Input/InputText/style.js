import styled from 'styled-components';

const InputUnderline = styled.input`
    width: 100%;
    border: none;
    background: none;
    font-size: ${({ theme }) => theme.normal};
    border-bottom: 1px solid ${({ theme }) => theme.gray4};

    &::placeholder {
        color: ${({ theme }) => theme.gray5}
    }

    :focus,
    :hover {
        border-bottom-color: ${({ theme }) => theme.primaryColor};
    }
`;

const StyledInputText = styled.div``;

export default StyledInputText
export { InputUnderline }