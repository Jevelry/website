import "./about.css"
import Me from "../../img/me-waterfall.jpg"


import { ThemeContext } from "../../context";
import { useContext } from "react";

const About = () => {


    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="a" id = "about-me">
            
                <div className="a-left">
                <div className="a-card bg" style={{ backgroundColor: darkMode && "white" }}></div>
                    <div className="a-card" >
                        <img src={Me}
                        alt="" 
                        className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                <div className="a-bg" style={{ backgroundColor: darkMode && "black" }}></div>
                    <div className="a-about">
                        <h1 className="a-title">ABOUT ME</h1>
                        
                        <p className="a-desc">
                            <p>I'm Kevin, an aspiring software engineer based in Sydney</p>
                            <br/>
                            I'm currently studying a <strong>B.S. in Computer Science (honours)</strong> at the 🎓 
                            <strong> University of New South Wales. </strong>
                            I am seeking a graduate role to gain 🔬 industry experience and 📚 bolster my skillset 
                        </p>
                    </div>
                <div className="centre">
                    <img src={Me}
                        alt=""
                        className="a-mobileimg" />
                </div>
                </div>
            
        </div>
    )
}

export default About
