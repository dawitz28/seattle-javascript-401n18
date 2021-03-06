import React from 'react';
import { When } from '../if';
import './list.scss';

export default props => (
  <React.Fragment>
    <ul aria-label="list" className="list">{props.children}</ul>
    <When condition={props.children.length > 5}>
      <div>Wow, that's a lot of stuff!</div>
    </When>
  </React.Fragment>
);
