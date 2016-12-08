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
        <li style={ styles.listItem }>
          <a href="https://denver.bcycle.com/" target="_blank" className="link">
            Denver BCycle
          </a>
          <p style={ styles.linkDescr }>Rent some bikes to cruise around town</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://unionstationindenver.com/" target="_blank" className="link">
            Union Station in Denver
          </a>
          <p style={ styles.linkDescr }>Visit the newly renovated train station</p>
        </li>
        <li style={ styles.listItem }>
          <a href="https://bouldercolorado.gov/osmp/chautauqua-trailhead" target="_blank" className="link">
            Chautauqua Park / Trailhead
          </a>
          <p style={ styles.linkDescr }>Hike a fun trail in Boulder</p>
        </li>
      </ul>
      <ul style={ styles.list }>
        <li style={ styles.listItem }>
          <a href="http://www.denverzoo.org/" target="_blank" className="link">
            Denver Zoo
          </a>
          <p style={ styles.linkDescr }>Monkey around at the zoo</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://redrocksonline.com/" target="_blank" className="link">
            Red Rocks
          </a>
          <p style={ styles.linkDescr }>Hike around our favorite concert venue</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://topgolf.com/us/centennial/" target="_blank" className="link">
            Top Golf
          </a>
          <p style={ styles.linkDescr }>Fun point-scoring golf games for all skill levels</p>
        </li>
      </ul>
    </div>
    <div style={ styles.headingListCont }>
      <h4 style={ styles.heading }>To Eat</h4>
      <ul style={ styles.list }>
        <li style={ styles.listItem }>
          <a href="http://tacostequilawhiskey.com/" target="_blank" className="link">
            Pinche Tacos
          </a>
          <p style={ styles.linkDescr }>Kate&#8217;s favorite tacos</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://www.thepopulistdenver.com/" target="_blank" className="link">
            The Populist
          </a>
          <p style={ styles.linkDescr }>Feeling like a hipster? Go here!</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://www.centralbistrobar.com/" target="_blank" className="link">
            Central Bistro Bar
          </a>
          <p style={ styles.linkDescr }>Amazing brunch with a view of the Denver skyline</p>
        </li>
      </ul>
      <ul style={ styles.list }>
        <li style={ styles.listItem }>
          <a href="http://www.uncleramen.com/" target="_blank" className="link">
            Uncle Ramen
          </a>
          <p style={ styles.linkDescr }>Our go-to ramen spot</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://illegalpetes.com/" target="_blank" className="link">
            Illegal Pete's
          </a>
          <p style={ styles.linkDescr }>Amazing, fast, delicious burritos</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://denver.eater.com/maps/best-denver-restaurants-38" target="_blank" className="link">
            Eater Denver
          </a>
          <p style={ styles.linkDescr }>More options if you need some</p>
        </li>
      </ul>
    </div>
    <div style={ styles.headingListCont }>
      <h4 style={ styles.heading }>To Drink</h4>
      <ul style={ styles.list }>
        <li style={ styles.listItem }>
          <a href="http://williamsandgraham.com/" target="_blank" className="link">
            Williams &amp; Graham
          </a>
          <p style={ styles.linkDescr }>Nate&#8217;s favorite speakeasy</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://www.lalaswinebar.com/" target="_blank" className="link">
            Lala&#8217;s
          </a>
          <p style={ styles.linkDescr }>Kate&#8217;s favorite wine bar</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://donsclubtavern.com/" target="_blank" className="link">
            Don&#8217;s Club Tavern
          </a>
          <p style={ styles.linkDescr }>Dive bar with Buck Hunter &amp; skeeball. Enough said.</p>
        </li>
      </ul>
      <ul style={ styles.list }>
        <li style={ styles.listItem }>
          <a href="http://denverbeerco.com/" target="_blank" className="link">
            Denver Beer Co
          </a>
          <p style={ styles.linkDescr }>Great beers with a great view and outdoor patio</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://loschingonesmexican.com/" target="_blank" className="link">
            Los Chingones
          </a>
          <p style={ styles.linkDescr }>Rooftop patio with modern Mexican cuisine</p>
        </li>
        <li style={ styles.listItem }>
          <a href="http://www.punchbowlsocial.com/home" target="_blank" className="link">
            Punch Bowl Social
          </a>
          <p style={ styles.linkDescr }>Drinks, bowling, foosball, pool</p>
        </li>
      </ul>
    </div>
  </div>
);

export default ThingsToDo;
