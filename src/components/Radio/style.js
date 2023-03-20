import styled from 'styled-components';

const Circle = styled.span`
    width: 16px;
    height: 16px;
    line-height: 16px;
    border:1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;

    ::after {
        content: '';
        width: 10px;
        height: 10px;
        background-color:${({ theme }) => theme.primaryColor};
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;

        opacity: 0;
        transform: scale(0);
        transition: .2s ease;
    }
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
    width: 0;
    height: 0;
    opacity: 0;

    :checked + ${Circle}::after {
        opacity: 1;
        transform: scale(1)
    }

    :not(:checked) + ${Circle}::after {
        opacity: 0;
        transform: scale(0)
    }
`;

const StyledRadioGroup = styled.div`
    display: flex;
    // StyledRadioGroup 下 除了 第一个元素 其余的距离左侧24px
    & > *:not(:first-child){
        margin-left: 24px;
    }
`;

const StyledRadio = styled.label`
    position: relative;
    padding-left: 22px;
    cursor: pointer;
    display: inline-block;
    line-height: 16px;
    font-size: ${({ theme }) => theme.normal};
`;

export default StyledRadio
export { Circle, RadioButton, StyledRadioGroup }
