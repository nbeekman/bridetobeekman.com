import Nate from 'assets/images/nate.jpg';
import Kait from 'assets/images/kait.jpg';
import KaitNate from 'assets/images/k&n.jpg';

const styles = {
  container: {
    width: '100%',
    maxWidth: '1000px',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  contentContainer: {
    marginBottom: '20px',
  },
  photoContainer: {
    margin: '0 auto',
    maxWidth: '420px',
    textAlign: 'center',
  },
  kait: {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    background: `#e6e6e6 url(${Kait}) no-repeat center center`,
    backgroundSize: '200px 200px',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    display: 'inline-block',
    margin: '0px 20px 20px 0px',
  },
  nate: {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    background: `#e6e6e6 url(${Nate}) no-repeat center center`,
    backgroundSize: '200px 200px',
    // float: 'right',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    display: 'inline-block',
  },
  kaitNate: {
    width: '315px',
    height: '315px',
    // borderRadius: '160px',
    background: `#e6e6e6 url(${KaitNate}) no-repeat 0px 0px`,
    backgroundSize: '350px 350px',
    margin: '0 auto',
  },
  contentText: {
    display: 'inline-block',
    verticalAlign: 'top',
    boxSizing: 'border-box',
    width: 'calc(100% - 400px)',
    padding: '0px 40px',
  },
};

export default styles;
