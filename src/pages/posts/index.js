import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import Excerpt from '../../components/posts/Excerpt';

const PostsPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <App>
      <h1>Latest Stories</h1>

      {posts.map(({ node: post }) => (
        <Excerpt key={post.id} post={post} />
      ))}
    </App>
  );
}

PostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default PostsPage;

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
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
