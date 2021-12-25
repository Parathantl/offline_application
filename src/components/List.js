import React, { useState, useEffect } from 'react'
import data from '../data/List'; 
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from '../actions/data.actions';

export default function Grade() {

  const [name, setName] = useState('');
  const [foundData, setFoundData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setFoundData(data)
  }

  const onClickData =(grade) => {
    dispatch(setData(grade));
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
                            }} onClick={() => {onClickData(grade)}}>
                            Click here..</Link>
                          </Card.Body>
                        </Card>
            </div>) })) : (<h1>No results found!</h1>) }

    </div>

  );
}
