import { motion } from "framer-motion";

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="innerNavbar">
                <motion.img alt="This is Logo" src={require('../img/logo.png')} whileHover={{scale: 1.01}} whileTap={{scale: 0.9}} className="logoImg"/>
                
                <motion.button 
                    className="navbarBtn"
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.5}}
                >
                 <i class="fa-solid fa-wallet"></i>
                </motion.button>
                
            </div>
        </div>
    );
}

export default Navbar