import React, { PureComponent } from 'react';
import styled from 'styled-components';

// import ProjectPanel from './projectPanel';
// import ProjectView from './projectView';

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

// <ProjectPanel
//   projects={projects}
//   selected={selectedProject}
//   onSelect={this.handleSelect}
// />
// <ProjectView
//   project={selectedProject}
// />

export default class Projects extends PureComponent {

  state = {
    selectedProject: null,
    projects: null
  };

  handleSelect = (project) => {
    this.setState({ selectedProject: project });
  };

  render() {
    const { children } = this.props;
    const { selectedProject } = this.state;

    return (
      <ProjectsWrapper>

        {children}

      </ProjectsWrapper>
    );
  }

}
