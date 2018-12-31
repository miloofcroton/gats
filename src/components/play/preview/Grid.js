import React from 'react';
import Card from './Card';

// import styled from 'styled-components';
// const PreviewGridWrapper = styled.div`

// `;

const PreviewGrid = ({ posts }) => {
  return (
    <ul>
      {posts.map(({ node: post }) => (
        <Card key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PreviewGrid;
