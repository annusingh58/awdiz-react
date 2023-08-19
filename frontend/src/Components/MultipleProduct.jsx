import { useNavigate } from "react-router-dom";

function MultipleProduct(){
    const router = useNavigate();
    return(
        <div>
            <h1>Multiple Product</h1>
            <button onClick={()=> router('/SingleProduct/2255')}>ReDirect</button>

        </div>
    )

}


export default MultipleProduct;