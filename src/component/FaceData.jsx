import { useEffect, useState } from "react";
import Main from "./Main/Main";

const FaceData = () => {
    const [fecData, setfecData] = useState([]);
    useEffect(()=>{
        fetch('faceData.json')
        .then(res => res.json())
        .then(data => setfecData(data));
    },[])
    return (
        <div>
           
        </div>
    );
};

export default FaceData;