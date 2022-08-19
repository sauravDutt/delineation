import CanvasOne from "./CanvasOne";

const GameScreen = () => {

    return(
        <div className="gameScreenOuter">
            <CanvasOne />
            <h1><span className="letter">D</span>elineation</h1>
            <h2><span className="letterTwo">C</span>lub.</h2>
            
        </div>
    );
}

export default GameScreen;