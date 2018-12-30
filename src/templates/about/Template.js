import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content';

import styled from 'styled-components';

import Greeting from './Greeting';

const AboutSection = styled.section`
  span {
    margin: 50px auto;
    font-size: 30px;
  }
  p {
    width: 60%;
    text-align: left;
    margin: 25px auto;
  }
`;

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <AboutSection>
      <Greeting />
      <PageContent content={content} />
    </AboutSection>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
