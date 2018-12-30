import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import App from '../../app';
import FrontPagePost from '../../components/FrontPagePost';

export default class PostsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <App>
        <h1>Latest Stories</h1>

        {posts.map(({ node: post }) => (
          <FrontPagePost key={post.id} post={post} />
        ))}
      </App>
    );
  }
}

PostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

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
