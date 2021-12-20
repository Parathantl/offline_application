import React, { useState, useEffect } from 'react'
import data from '../data/GradesList'; 
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";

export default function Grade() {

  const [grades,setGrades] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setGrades(data);
  }
  
  return (

    <div>

      {
        grades.map((grade, index) => {
            return ( <div key={index}>
                        <Card style={{ width: '18rem' }}>
                          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                          <Card.Body>
                            <Card.Title>{grade.grade}</Card.Title>
                            <Card.Text>
                              {grade.description}
                            </Card.Text>
                            <Link to={`${grade.grade.replace(" ","")}`}>For More...</Link>
                          </Card.Body>
                        </Card>
                    </div> )
          })
      }

    </div>

  );
}
