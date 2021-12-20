import React, { useState, useEffect } from 'react'
import data from '../data/Grade1'; 
import Card from "react-bootstrap/Card"

export default function Grade1() {

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
                            <Card.Title>{grade.title}</Card.Title>
                            <Card.Text>
                                Subject: {grade.subject}<br/>
                                Type: {grade.type}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div> )
          })
      }

    </div>

  );
}
