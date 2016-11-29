import React from 'react';
import styles from 'js/components/thingstodo/styles/thingsToDo';

const ThingsToDo = () => (
  <div id="thingsToDo" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Things To Do <span>&#187;</span>
    </h2>
    <p style={ { height: '1000px' } }>content</p>
  </div>
);

export default ThingsToDo;
