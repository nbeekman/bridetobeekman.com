import MossDenver from 'assets/images/logos/moss-denver.png';
import BotanicGardens from 'assets/images/logos/denver-botanic-gardens.svg';

const styles = {
  container: {
    width: '100%',
    padding: '0px 30px',
    boxSizing: 'border-box',
  },
  partyDescr: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  partyDescrText: {
    margin: '0px',
  },
  partyContentContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  partyContentLeft: {
    display: 'inline-block',
    maxWidth: '500px',
    boxSizing: 'border-box',
    textAlign: 'center',
    verticalAlign: 'top',
    padding: '20px 0px',
  },
  partyContentRight: {
    display: 'inline-block',
    minWidth: '350px',
    maxWidth: '500px',
    boxSizing: 'border-box',
    textAlign: 'center',
    verticalAlign: 'top',
    padding: '20px 0px',
  },
  partyHeading: {
    marginBottom: '0px',
  },
  time: {
    marginTop: '0px',
  },
  mossDenver: {
    background: `url(${MossDenver}) no-repeat center center`,
    backgroundSize: '225px 42px',
    height: '70px',
    width: '350px',
    display: 'block',
    margin: '10px auto',
  },
  botanicGardens: {
    background: `url(${BotanicGardens}) no-repeat center center`,
    backgroundSize: '100% 50px',
    height: '70px',
    width: '350px',
    display: 'block',
    margin: '10px auto',
  },
  parking: {
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default styles;
