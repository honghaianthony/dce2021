import react from "react";
import "./SearchFilter.css";
import * as BsIcons from "react-icons/bs";

function SearchFilter({ placeholder, data, value, onChange }) {
  return (
    <div className="middle">
      <form>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <div className="searchIcon">
          <BsIcons.BsSearch className="icon" />
        </div>
      </form>
    </div>
  );
}

export default SearchFilter;
