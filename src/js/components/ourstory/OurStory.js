import React from 'react';
import styles from 'js/components/ourstory/styles/ourStory';
import Nate from 'assets/images/nate.jpg';
import Kait from 'assets/images/kait.jpg';
import NateKait from 'assets/images/k&n.jpg';

const OurStory = () => (
  <div id="ourStory" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Our Story <span>&#187;</span>
    </h2>
    <div style={ { marginBottom: '20px' } }>
      <div
        style={ {
          width: '200px',
          height: '200px',
          borderRadius: '100px',
          background: `#e6e6e6 url(${Nate}) no-repeat center center`,
          backgroundSize: '200px 200px',
          boxSizing: 'border-box',
          verticalAlign: 'top',
          display: 'inline-block',
        } }
      />
      <div
        style={ {
          display: 'inline-block',
          verticalAlign: 'top',
          boxSizing: 'border-box',
          width: 'calc(100% - 400px)',
          padding: '0px 40px',
        } }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci nisi, mollis vitae libero nec,
          elementum facilisis nulla. Vestibulum blandit congue rutrum. Sed et felis in massa malesuada iaculis
          quis at turpis. Donec et justo rutrum, posuere felis vel, molestie est. Proin scelerisque sapien quis
          quam suscipit tempor. Ut libero ipsum, cursus eu efficitur sed, facilisis condimentum sapien.
          Duis facilisis in sem non consectetur. Duis est lorem, pharetra in leo eget, porta sodales risus.
        </p>
        <p>
          Phasellus tincidunt leo id malesuada consectetur. Donec quam urna, laoreet non mauris sed,
          eleifend sollicitudin ligula. Pellentesque congue est vel metus condimentum semper.
          Suspendisse euismod neque eget fringilla blandit. Vestibulum eu felis in tellus aliquet bibendum
          eget ac dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Ut sed turpis vestibulum, scelerisque libero eget, semper nisi.
        </p>
      </div>
      <div
        style={ {
          width: '200px',
          height: '200px',
          borderRadius: '100px',
          background: `#e6e6e6 url(${Kait}) no-repeat center center`,
          backgroundSize: '200px 200px',
          float: 'right',
          boxSizing: 'border-box',
          verticalAlign: 'top',
          display: 'inline-block',
        } }
      />
    </div>
    <div
      style={ {
        width: '315px',
        height: '315px',
        borderRadius: '160px',
        background: `#e6e6e6 url(${NateKait}) no-repeat 0px 0px`,
        backgroundSize: '350px 350px',
        margin: '0 auto',
      } }
    />
  </div>
);

export default OurStory;
