import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { VerticalTimelineElement as VerticalTimelineElementBase } from 'react-vertical-timeline-component';

import './VerticalModuleTImeline.module.css';

const VerticalTimelineElement = ({ className, ...props }:any) => (
  <VerticalTimelineElementBase
    className={classNames(className, 'VerticalTimelineElement')}
    {...props}
  />
);

VerticalTimelineElement.defaultProps = {
  className: '',
};

VerticalTimelineElement.propTypes = {
  className: PropTypes.string,
};

export default VerticalTimelineElement;
