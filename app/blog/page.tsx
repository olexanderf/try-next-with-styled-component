import React, { useEffect, useState } from 'react';
import { MainPageTitle, TheContainer } from '../components/TheMainStyles.styled';
import { Ulist } from './BlogPage.styled';

interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
  return response.json();
}

export default async function Blog() {
  const posts: postType[] = await getPosts();
  return (
    <>
      <TheContainer>
        <MainPageTitle>Blog</MainPageTitle>
        <Ulist>
          {posts.length
            ? posts.map((post: postType) => {
                return <li key={post.id}> {post.title}</li>;
              })
            : ''}
        </Ulist>
      </TheContainer>
    </>
  );
}
