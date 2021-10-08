import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { changeValue } from 'src/actions/mainActions';

const mapStateToProps = (state) => ({
  headerClass: state.main.headerClass,
});

const mapDispatchToProps = (dispatch) => ({
  changeHeaderClass: (name, value) => dispatch(changeValue(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
