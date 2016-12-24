import HeroPhoto from 'assets/images/blanket-looking.jpg';

const styles = {
  container: {
    height: 'calc(100vh - 60px)',
    width: '100%',
    minHeight: '100%',
    textAlign: 'center',
    background: `url(${HeroPhoto}) no-repeat center`,
    backgroundSize: 'cover',
  },
  titleContainer: {},
  title: {
    fontSize: '70px',
    margin: '20px 0px 0px 0px',
  },
  subTitle: {
    fontSize: '20px',
    margin: '-10px 0px 20px 0px',
    fontStyle: 'italic',
  },
};

export default styles;
