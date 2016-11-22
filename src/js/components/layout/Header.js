import React from 'react';
import styles from 'js/components/layout/styles/header';

const Header = () => (
  <header style={ styles.header }>
    <h1 style={ styles.initials } className="amatic">K&amp;N</h1>
    <ul style={ styles.linkList }>
      <li style={ styles.linkListItem }>Welcome</li>
      <li style={ styles.linkListItem }>Our Story</li>
      <li style={ styles.linkListItem }>Party</li>
      <li style={ styles.linkListItem }>Accommodations</li>
      <li style={ styles.linkListItem }>Things To Do</li>
      <li style={ styles.linkListItemLast }>Registry</li>
    </ul>
  </header>
);

export default Header;
