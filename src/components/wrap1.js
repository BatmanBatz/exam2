import React from "react";
import { Link } from "react-router-dom";
import DetailData from "../data/data";


const Wrap1 = ()=>{
    const details = DetailData.map((props) => {
        if(props.id === 1) {
            return(
        <div className="w-[400px] h-[700px] ">
            <div className=" m-auto h-screen flex justify-between pt-[20px] text-[2rem] font-bold">
                  <div className=" h-auto">
                    <h2 className="mb-[50px] uppercase">{props.title}</h2>
                    <img src={props.img} alt="/" className="w-full h-[300px]" />
                    <p className="text-[0.6em] mt-[40px]">{props.description}</p>
                    <p className="text-[0.6em] mt-[40px]">{props.description2}</p>
                    <Link to={"/1"}>
                         <button className="w-[150px] h-[50px] bg-red-700 text-white ">{props.Button}</button>
                    </Link>
                    
                  </div>
            </div>
        </div>
            )
        }else{
            return;
        }
    });
    return(
        <>
            {details}
        </>
    )
}
export default Wrap1;