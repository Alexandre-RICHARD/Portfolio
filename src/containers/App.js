import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  message: state.main.message,
});

export default connect(mapStateToProps, {})(App);
