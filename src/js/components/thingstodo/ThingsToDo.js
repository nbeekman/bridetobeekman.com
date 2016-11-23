import React from 'react';
import styles from 'js/components/thingstodo/styles/thingsToDo';

const ThingsToDo = () => (
  <div id="thingsToDo" style={ styles.container }>
    <h2 style={ styles.heading }>Things To Do</h2>
    <p style={ { height: '1000px' } }>content</p>
  </div>
);

export default ThingsToDo;
