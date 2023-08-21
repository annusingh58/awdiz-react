import React from "react";

const Mapping=({array})=>{
    console.log(array,"array")
    return (
        <div id="check" style={{display :'flex',flexwrap:"wrap", justifyContent:"space-between"}}>
        {array && array.map((asmaan,i) => (
            <div key={i} style={{ height: '450px', width: "18%", border: "3px solid black", marginBottom: "40px" }}>
                <img src={asmaan.Image} />
                <h2>Name : {asmaan.Name}, {i}</h2>
                <h4>Price : {asmaan.Price}</h4>
                <button>Add to cart</button>
            </div>
        ))}
        </div>
    )
        }

export default Mapping;