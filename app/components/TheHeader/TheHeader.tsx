import Link from 'next/link';
import React from 'react';
import { TheHeaderContainer } from './TheHeader.styled';

export default function TheHeader() {
  return (
    <TheHeaderContainer>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/todo">Todo`s</Link>
    </TheHeaderContainer>
  );
}
