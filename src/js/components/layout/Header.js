import React from 'react';
import styles from 'js/components/layout/styles/header';
import Scroll from 'react-scroll';
import { Drawer } from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const Link = Scroll.Link;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      windowSize: window.innerWidth,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    // this._getMenu = this._getMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    setTimeout(() => {
      this.setState({ windowSize: window.innerWidth });
    }, 0);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  _getMenu() {
    if (this.state.windowSize > 770) {
      return (
        <ul style={ styles.linkListMenu }>
          <li style={ styles.linkListItemMenu }>
            <Link activeClass="active" to={ 'welcome' } spy smooth duration={ 500 } offset={ -70 }>
              Welcome
            </Link>
          </li>
          <li style={ styles.linkListItemMenu }>
            <Link activeClass="active" to={ 'ourStory' } spy smooth duration={ 500 } offset={ -70 }>
              Our Story
            </Link>
          </li>
          <li style={ styles.linkListItemMenu }>
            <Link activeClass="active" to={ 'party' } spy smooth duration={ 500 } offset={ -70 }>
              Party
            </Link>
          </li>
          <li style={ styles.linkListItemMenu }>
            <Link activeClass="active" to={ 'accommodations' } spy smooth duration={ 500 } offset={ -70 }>
              Accommodations
            </Link>
          </li>
          <li style={ styles.linkListItemMenu }>
            <Link activeClass="active" to={ 'thingsToDo' } spy smooth duration={ 500 } offset={ -70 }>
              Things To Do
            </Link>
          </li>
          <li style={ styles.linkListItemMenuLast }>
            <Link activeClass="active" to={ 'registry' } spy smooth duration={ 500 } offset={ -70 }>
              Registry
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <div style={ styles.drawerCont }>
        <MenuIcon style={ styles.openButton } onClick={ this.handleToggle } />
        <Drawer width={ 165 } openSecondary open={ this.state.open } containerStyle={ styles.drawer }>
          <ul style={ styles.linkList }>
            <li style={ styles.linkListItem }>
              <Link activeClass="active" to={ 'welcome' } spy smooth duration={ 500 } offset={ -70 } onClick={ this.handleToggle }>
                Welcome
              </Link>
            </li>
            <li style={ styles.linkListItem }>
              <Link activeClass="active" to={ 'ourStory' } spy smooth duration={ 500 } offset={ -70 } onClick={ this.handleToggle }>
                Our Story
              </Link>
            </li>
            <li style={ styles.linkListItem }>
              <Link activeClass="active" to={ 'party' } spy smooth duration={ 500 } offset={ -70 } onClick={ this.handleToggle }>
                Party
              </Link>
            </li>
            <li style={ styles.linkListItem }>
              <Link activeClass="active" to={ 'accommodations' } spy smooth duration={ 500 } offset={ -70 } onClick={ this.handleToggle }>
                Accommodations
              </Link>
            </li>
            <li style={ styles.linkListItem }>
              <Link activeClass="active" to={ 'thingsToDo' } spy smooth duration={ 500 } offset={ -70 } onClick={ this.handleToggle }>
                Things To Do
              </Link>
            </li>
            <li style={ styles.linkListItemLast }>
              <Link activeClass="active" to={ 'registry' } spy smooth duration={ 500 } offset={ -70 } onClick={ this.handleToggle }>
                Registry
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    );
  }

  render() {
    return (
      <header id="header" style={ styles.header }>
        <h1 style={ styles.initials } className="amatic">
          <Link activeClass="top" to={ 'hero' } spy smooth duration={ 500 } offset={ -60 }>
            K&amp;N
          </Link>
        </h1>
        { this._getMenu() }
      </header>
    );
  }
}


export default Header;
