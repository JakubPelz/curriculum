import React from "react";
import Header from "./Header";
import MainTop from "./MainTop";
import MainDown from "./MainDown";
import Footer from "./Footer";
import Server from "./Server";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainTop />
                {/* <Server /> */}
                {/*  <MainDown /> */}
                <Footer />
            </div>
        );
    }
}

export default App;
