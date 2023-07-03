'use client';

import styled from "styled-components";

export const TheHeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: rgb(231, 155, 14);
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    padding: 0 5px;
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in;
    &: hover {
      color: white;
    }
  }
`;
