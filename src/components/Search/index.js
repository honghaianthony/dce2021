import react from "react";
import "./SearchFilter.css";
import * as BsIcons from "react-icons/bs";

function SearchFilter({ placeholder, data }) {
    return (
        <div className="middle">
            <form>
                <input type="text" placeholder={placeholder} />
                <div className="searchIcon">
                    <BsIcons.BsSearch className="icon" />
                </div>
            </form>
        </div>
    )
}

export default SearchFilter;