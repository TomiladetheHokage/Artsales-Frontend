import style from "./style/TopNav.module.css"
import logo from "../../assets/Black_White_Simple_Art_Studio_Logo-removebg-preview.png"

const TopNav = () => {
    return (
        <>
            <div className={style['navbar-holder']}>
                <div className="navbar">
                    <img src={logo} alt="Logo" className={style['logo']}/>
                </div>
                <ul className={style["navbar-links"]}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div className={style["nav-buttons"]}>
                    <button className={style["login-btn"]}> Login</button>
                    <button className={style["signup-btn"]}> Sign up</button>
                </div>
            </div>
        </>
    )
}
export default TopNav