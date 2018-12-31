import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import Preview from '../../components/thoughts/Preview';

const ThoughtsPage = ({ data }) => {
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

ThoughtsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ThoughtsPage;

export const pageQuery = graphql`
  query ThoughtsQuery {
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
