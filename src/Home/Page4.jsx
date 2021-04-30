import React from 'react';
import {  Row,  Col} from 'antd';
import { page4 } from './data';
import img from "./Web 6.jpg" ;


export default function Page4() {
  const children = page4.children.map((img, i) => (
    <Col md={6} xs={24} key={i.toString()} className="page4-item">
      <img src={img} alt="img" />
    </Col>
  ));
  return (
    
      <div className="page">
        <h1>{page4.title}</h1>
        <i />
       
      </div>
    
  );
}


