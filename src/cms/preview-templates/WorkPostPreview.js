import React from 'react';
import PropTypes from 'prop-types';
import WorkPostTemplate from '../../templates/work/Template';

const WorkPostPreview = ({ entry, widgetFor }) => (
  <WorkPostTemplate
    content={widgetFor('body')}
    summary={entry.getIn(['data', 'summary'])}
    tech={entry.getIn(['data', 'tech'])}
    title={entry.getIn(['data', 'title'])}
  />
);

WorkPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkPostPreview;
