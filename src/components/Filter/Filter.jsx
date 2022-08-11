import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.lable}>
      Find contacts by name
      <input className={styles.input} type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
