import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import App from './App';

const DataWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <App data={data}>{children}</App>}
  />
);

export default DataWrapper;
