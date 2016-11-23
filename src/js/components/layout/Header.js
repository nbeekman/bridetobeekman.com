import React from 'react';
import styles from 'js/components/layout/styles/header';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const Header = () => (
  <header id="header" style={ styles.header }>
    <h1 style={ styles.initials } className="amatic">
      <Link activeClass="top" to={ 'hero' } spy smooth duration={ 500 } offset={ -60 }>
        K&amp;N
      </Link>
    </h1>
    <ul style={ styles.linkList }>
      <li style={ styles.linkListItem }>
        <Link activeClass="active" to={ 'welcome' } spy smooth duration={ 500 } offset={ -60 }>
          Welcome
        </Link>
      </li>
      <li style={ styles.linkListItem }>
        <Link activeClass="active" to={ 'ourStory' } spy smooth duration={ 500 } offset={ -60 }>
          Our Story
        </Link>
      </li>
      <li style={ styles.linkListItem }>
        <Link activeClass="active" to={ 'party' } spy smooth duration={ 500 } offset={ -60 }>
          Party
        </Link>
      </li>
      <li style={ styles.linkListItem }>
        <Link activeClass="active" to={ 'accommodations' } spy smooth duration={ 500 } offset={ -60 }>
          Accommodations
        </Link>
      </li>
      <li style={ styles.linkListItem }>
        <Link activeClass="active" to={ 'thingsToDo' } spy smooth duration={ 500 } offset={ -60 }>
          Things To Do
        </Link>
      </li>
      <li style={ styles.linkListItemLast }>
        <Link activeClass="active" to={ 'registry' } spy smooth duration={ 500 } offset={ -60 }>
          Registry
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
