import "./App.css";
import Img2 from "./image2.jpg";
import "./style.css";
function App() {
    return (
        <div>
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Your name here</h1>
                <br />
                <img src="./6410.jpg" alt="Error" />
                <br />
                <img src={Img2} alt="Error" />
            </div>
            <video width={320} height={240} controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
export default App;
