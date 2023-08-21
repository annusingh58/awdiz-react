import React, { useState } from "react";
import './DynamicStyle.css';
import toast from "react-hot-toast";

const DynamicStyle=()=>{
    const [isButtonActive,setIsButtonActive]=useState(false);
    const handleButtonClick=()=>{
        setIsButtonActive(!isButtonActive)
        toast("clicked")
    }
   
    const myClassName=isButtonActive ?"active":"unactive"

    return(
        <div>
            <button onClick={handleButtonClick} className={myClassName}>
                {isButtonActive ? "active" : "unactive"}
            </button>
        </div>
    )

}

export default DynamicStyle
