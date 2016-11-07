import React from 'react';
import styles from 'js/components/layout/styles/container';

const Container = (props) => (
  <div style={ styles.container }>
    <div style={ styles.contentContainer }>
      { props.children }
    </div>
  </div>
);

Container.propTypes = {
  children: React.PropTypes.object,
};

export default Container;
