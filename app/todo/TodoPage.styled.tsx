'use client';

import styled from 'styled-components';

export const TodoLabel = styled.label<{ $completed?: string }>`
  transition: all 0.2s ease-in;
  color: ${(props) => props.$completed || 'black'};
`;

export const TodoContainer = styled.div`
  padding: 5px;
`;
