import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MainPageStyle.css"

import Raccolta from "./Raccolta";

const MainPage = () => {
    return(
        <div class="container">
            <Raccolta />
        </div>
    );
}

export default MainPage;