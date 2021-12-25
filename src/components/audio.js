import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Audio() {

    const { data } = useSelector(state => state.dataReducer);

    return (
        <div>
            Title: {data.title} <br/>
            Grade: {data.grade} <br/>
            Subject: {data.subject} <br/>
            <audio controls> 
            <source src={data.filePath} type="audio/mpeg">
                </source>
            </audio>
        </div>
    )
}
