import React from 'react';
import styles from 'js/components/thingstodo/styles/thingsToDo';

const ThingsToDo = () => (
  <div id="thingsToDo" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Things To Do <span>&#187;</span>
    </h2>
    <h3 style={ styles.description }>Here are some suggestions we think you might enjoy while in Denver!</h3>
    <div style={ styles.headingListCont }>
      <h4 style={ styles.heading }>To Do</h4>
      <ul style={ styles.list }>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      <ul style={ styles.listLast }>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
    <div style={ styles.headingListCont }>
      <h4 style={ styles.heading }>To Eat</h4>
      <ul style={ styles.list }>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      <ul style={ styles.listLast }>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  </div>
);

export default ThingsToDo;
