import React from 'react';
import {useLocation} from "react-router-dom";

const Detail = (props) => {
    const data = useLocation().state;
    console.log(data)
    return (
        <div>
            hi
        </div>
    );
};

export default Detail;