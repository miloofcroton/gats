import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import Preview from '../../components/thoughts/Preview';

const ThoughtsIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <App>
      <h1>Latest Stories</h1>

      {posts.map(({ node: post }) => (
        <Preview key={post.id} post={post} />
      ))}
    </App>
  );
};

ThoughtsIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ThoughtsIndex;

export const pageQuery = graphql`
  query ThoughtsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "thoughts" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
