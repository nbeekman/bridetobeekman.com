import React from 'react';
import styles from 'js/components/accommodations/styles/accommodations';

const Accommodations = () => (
  <div id="accommodations" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Accommodations <span>&#187;</span>
    </h2>
    <div style={ styles.content }>
      <h3 style={ styles.description }>Mention the Minich-Beekman wedding to receive a discounted rate at any of these hotels!</h3>
      <ul style={ styles.list }>
        <li style={ styles.listItem }>
          <h4 style={ styles.hotelName }>Grand Hyatt</h4>
          <p style={ styles.text }>1750 Welton Street, Denver, CO 80202</p>
          <p style={ styles.text }>
            <a
              href="https://denver.grand.hyatt.com/en/hotel/home.html"
              target="_blank"
              style={ styles.underline }
            >
              Website
            </a>
          </p>
          <p style={ styles.text }>Phone: <a href="tel:303-295-1234">303.295.1234</a></p>
        </li>
        <li style={ styles.listItem }>
          <h4 style={ styles.hotelName }>Hilton Garden Inn</h4>
          <p style={ styles.text }>1400 Welton Street, Denver, CO, 80202</p>
          <p style={ styles.text }>
            <a
              href="http://hiltongardeninn3.hilton.com/en/hotels/colorado/hilton-garden-inn-denver-downtown-DENDDGI/index.html"
              target="_blank"
              style={ styles.underline }
            >
              Website
            </a>
          </p>
          <p style={ styles.text }>Phone: <a href="tel:303-603-8000">303.603.8000</a></p>
        </li>
        <li style={ styles.listItemLast }>
          <h4 style={ styles.hotelName }>Hyatt Regency</h4>
          <p style={ styles.text }>650 15th Street, Denver, CO 80202</p>
          <p style={ styles.text }>
            <a
              href="https://denver.regency.hyatt.com/en/hotel/home.html?icamp=denverregencyredirect"
              target="_blank"
              style={ styles.underline }
            >
              Website
            </a>
          </p>
          <p style={ styles.text }>Phone: <a href="tel:303-436-1234">303.436.1234</a></p>
          <p style={ styles.text }>
            <a href="https://aws.passkey.com/go/minichbeekman2017" style={ styles.underline }>
              Discounted Online Reservation Link
            </a>
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default Accommodations;
