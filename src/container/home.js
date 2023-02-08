import React from "react";
import Wrap1 from "../components/wrap1";
import Wrap2 from "../components/wrap2";
import Wrap3 from "../components/wrap3";

const Home = ()=>{
    return(
        <div className="w-[70%] h-screen flex gap-[5vh] m-auto">
            <Wrap1/>
            <Wrap2/>
            <Wrap3/>
        </div>
    )
}
export default Home;