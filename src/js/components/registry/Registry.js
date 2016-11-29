import React from 'react';
import styles from 'js/components/registry/styles/registry';
import AnthropologieLogo from 'assets/images/logos/anthropologie.svg';
import ReiLogo from 'assets/images/logos/rei-logo-black.svg';
import ZolaLogo from 'assets/images/logos/zola-logo-black.svg';

const Registry = () => (
  <div id="registry" style={ styles.container }>
    <h2 className="amatic sectionHeader">
      <span>&#171;</span> Registry <span>&#187;</span>
    </h2>
    <p style={ styles.text1 }>
      What we want most for our wedding is to have our friends and family here to celebrate this special occasion with us.
      We appreciate you coming from far and wide to be with us and your attendance is as good a gift as any.
    </p>
    <p style={ styles.text2 }>
      However, if you&#8217;d like to help Kaitlyn get Nathan outside more, feel free to visit REI.
      Or if you feel like adding a little spice to our kitchen, you can browse Anthropologie.
      You can also check out our honeyfund at Zola.
    </p>
    <ul style={ styles.logoList }>
      <li style={ styles.logoListItem }>
        <a href="https://www.rei.com/GiftRegistryDetails/14071880" target="_blank">
          <img src={ ReiLogo } alt="rei" style={ styles.reiLogo } />
        </a>
      </li>
      <li style={ styles.logoListItem }>
        <a href="https://www.anthropologie.com/registry/listing?registryId=MZY2NJRHZTBM" target="_blank">
          <img src={ AnthropologieLogo } alt="anthropologie" style={ styles.anthroLogo } />
        </a>
      </li>
      <li style={ styles.logoListItemLast }>
        <a href="https://www.zola.com/registry/nathanandkaitlyn" target="_blank">
          <img src={ ZolaLogo } alt="zola" style={ styles.zolaLogo } />
        </a>
      </li>
    </ul>
  </div>
);

export default Registry;
