
import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <div className="Nav">
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <ul>
                    <li>
                        {/* <a href="">home</a> */}
                        <NavLink to={"/"}>home</NavLink>
                    </li>
                    <li>
                          <NavLink to={"/about"}>about</NavLink>
                    </li>
                    <li>
                          <NavLink to={"/service"}>service</NavLink>
                    </li>
                    <li>
                          <NavLink to={"/contact"}>contact us</NavLink>
                    </li>
                </ul>
                <button>login</button>
            </div>
        </>
    );
}
