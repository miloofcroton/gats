import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PlayTile = styled.div`
  border: 1px solid #333;
  padding: 2em 4em;

  a {
    text-decoration: none;
    color: inherit;

    h3 {
      text-decoration: underline;
    }
    small {
      display: block;
    }
  }
`;

const Preview = ({ post }) => {
  return (
    <PlayTile>
      <Link to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
        <small>{post.frontmatter.date}</small>
        <img src={post.frontmatter.image.childImageSharp.fixed.src}/>
      </Link>

      <p>{post.excerpt}</p>
    </PlayTile>
  );
};

export default Preview;
