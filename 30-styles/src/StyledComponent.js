import React from 'react';
import styled from 'styled-components';

// CSS in JS : js 안에 css를 작성함.

// 자동으로 고유한 클래스 이름을 생성
// props를 사용하여 동적으로 스타일을 변경

const StyledContainer = styled.div`
    display: flex;
`;

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor || 'pink'};

    &:hover {
        transform: translateY(-20px);
    }
`;
export default function StyledComponent() {
    return (
        <StyledContainer>
            <StyledBox bgColor="red">1</StyledBox>
            <StyledBox bgColor="orange">2</StyledBox>
            <StyledBox bgColor="yellow">3</StyledBox>
            <StyledBox>4</StyledBox>
        </StyledContainer>
    );
}