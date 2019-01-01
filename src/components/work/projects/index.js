import React, { PureComponent } from 'react';
import styled from 'styled-components';

import ProjectPanel from './projectPanel';
import ProjectView from './projectView';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

export default class Projects extends PureComponent {

  state = {
    selectedProject: null,
  };

  handleSelect = (project) => {
    this.setState({ selectedProject: project });
  };

  render() {

    const { selectedProject } = this.state;
    const { projects } = this.props;

    return (
      <ProjectsWrapper>
        <ProjectPanel
          projects={projects}
          selected={selectedProject}
          onSelect={this.handleSelect}
        />
        <ProjectView
          project={selectedProject}
        />
      </ProjectsWrapper>
    );
  }

}
