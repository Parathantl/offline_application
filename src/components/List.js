import React, { useState, useEffect } from 'react'
import data from '../data/List'; 
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";

export default function Grade() {

  const [grades,setGrades] = useState(data);

  const [name, setName] = useState('');
  const [foundData, setFoundData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setGrades(data);
    setFoundData(data)
  }

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = data.filter((grade) => {
        return grade.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundData(results);
    } else {
      setFoundData(data);
    }

    setName(keyword);
  };
  
  return (

    <div>

      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      {foundData && foundData.length > 0 ? 

      ( foundData.map((grade, index) => {
        return (

            <div key={index}>
                        <Card style={{ width: '18rem' }}>
                          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                          <Card.Body>
                            <Card.Title>{grade.title}</Card.Title>
                            <Card.Text>
                                Subject: {grade.subject}<br/>
                                Type: {grade.type}
                            </Card.Text>
                            <Link to={{ 
                              pathname: `/${grade.type}`,
                              state: {
                                title: grade.title,
                                subject: grade.subject,
                                type: grade.type
                              }
                            }}>
                            Click here..</Link>
                          </Card.Body>
                        </Card>
            </div>) })) : (<h1>No results found!</h1>) }

    </div>

  );
}
