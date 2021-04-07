import PropTypes from "prop-types";
import scss from "./Filter.module.scss";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={scss.filterBox}>
      Find contacts by name
      <input
        className={scss.input}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
