import PropTypes from 'prop-types'
import { appPropTypes } from './App.propTypes';

const App = ({ title }) => {
  return <h1>{title}</h1>
}

App.propTypes = appPropTypes;

export { App };
