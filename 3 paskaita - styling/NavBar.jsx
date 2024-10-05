import "./style.css";
import styles from "./NavBar.module.css";
import { StyleButton } from "./StyledNavBar";
import { Breadcrumb } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";

const NavBar = () => {

    const buttonStyle = {
        color: "blue",
        backgroundColor: "pink",
    };
    return (
    <><div>
            <Breadcrumb>
                <Breadcrumb.Item href=""></></Breadcrumb>

        </Breadcrumb><nav style={{ backgroundColor: "aliceblue", padding: "50px 30px" }}>Navbar</nav><nav>
                <button style={buttonStyle}>Inline button</button>
                <button className="css-button">CSS button</button>
                <button className={styles.buttonModuleCss}>Module CSS</button>
                <buttonclassName />={styles.secondButton}></button><StyleButton>Styles components button</StyleButton></>
        </nav>
    </div>
    );

};

export default NavBar;