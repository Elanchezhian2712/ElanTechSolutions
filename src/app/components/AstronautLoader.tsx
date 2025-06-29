// AstronautLoader.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0f1a;
`;

const AstronautHead = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e3e8eb, #fbfdfa);
  border-radius: 50%;
  position: relative;
  animation: ${spin} 2s linear infinite;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  
  &::after {
    content: '';
    width: 40px;
    height: 25px;
    background: linear-gradient(to bottom, #15aece, #0391bf);
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 10px;
  }
`;

const AstronautLoader = () => (
  <LoaderWrapper>
    <AstronautHead />
  </LoaderWrapper>
);

export default AstronautLoader;
