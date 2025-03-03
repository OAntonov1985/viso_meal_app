import "./Header.css";
import { Link } from "react-router";
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <header className='header_container'>
            <div>Header component</div>

            <Link to={"/selectedrecipes"} className='header_link'>
                <Button>To Selected Meals</Button>
            </Link>
        </header>
    );
}
