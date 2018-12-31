import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import App from '../../app';
import styled from 'styled-components';

// import Profile from './profile';
// import Projects from './projects';

const WorkWrapper = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  max-height: 1000px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Work = () => {
  // <Projects/>
  // <Profile/>
  return (
    <App>
      <WorkWrapper>

        <h2>Work is under development!</h2>

      </WorkWrapper>
    </App>
  );
};

export default Work;
