import React from 'react';
import { StyledLink, TheHeaderContainer } from './TheHeader.styled';

export default function TheHeader() {
  return (
    <TheHeaderContainer>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/blog">Blog</StyledLink>
      <StyledLink href="/todo">Todo`s</StyledLink>
    </TheHeaderContainer>
  );
}
