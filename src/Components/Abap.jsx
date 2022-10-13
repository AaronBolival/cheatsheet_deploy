import React from "react";
import Tables from '../tables.json';
import Progs from '../progs.json';
import Tcodes from '../tcodes.json';
// import Abapimages from '../abapimages.json';




import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Abap(){
    return(
           
       <div className="abap-div">
            <br/>
            <Tabs
            defaultActiveKey="tables"
            id="justify-tab-example"
            className="mb-3"
            justify
            >
                     <Tab eventKey="tables" title="Tables" >
                        <Table  bordered hover className="table" >
                            <thead>
                                <tr align="left"><th colSpan={3} >Tables</th></tr>
                                <tr>
                                    <th>#</th>
                                    <th>Table Name</th>
                                    <th>Details</th>                                
                                </tr>
                            </thead>
                        {
                            Tables.map(table =>{
                                return(                                             
                                    <tbody>
                                        <tr>
                                            <td>{table.id}</td>
                                            <td>{table.tablename}</td>
                                            <td>{table.details}</td>
                                        </tr>
                                    </tbody>                          
                                )
                            })
                        }
                        </Table>
                    </Tab>
                    <Tab eventKey="tcodes" title="TCode">
                        <Table  bordered hover className="table" >
                                <thead>
                                    <tr align="left"><th colSpan={3} ></th></tr>
                                    <tr>
                                        <th>#</th>
                                        <th>TCode </th>
                                        <th>Details</th>                                
                                    </tr>
                                </thead>
                            {
                                Tcodes.map(tcode =>{
                                    return(                                             
                                        <tbody>
                                            <tr>
                                                <td>{tcode.id}</td>
                                                <td>{tcode.tcodename}</td>
                                                <td>{tcode.details}</td>
                                            </tr>
                                        </tbody>                          
                                    )
                                })
                            }
                        </Table>                        
                    </Tab>
                    <Tab eventKey="programs" title="Programs">
                        {/* <h1 align="center" className="Program-Text">Program</h1> */}
                        <div className="Cards-div">            
                        {
                            Progs.map(prog =>{
                                return(
                                    <Card className="Card" bg="light">
                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                        <Card.Body className="Cardbody" >
                                            <Card.Title ><b>{prog.name}</b></Card.Title>
                                            <Card.Text>{prog.desc}</Card.Text>
                                            <hr/>
                                            <Card.Text>-{prog.category}</Card.Text>
                                            <a href={prog.link} target="blank"><Button variant="primary" >Github Link</Button></a>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                        </div>
                    </Tab>
                    
                  

                    {/* <Tab eventKey="contact" title="Contact" disabled>
                       
                    </Tab> */}
                </Tabs>            


        </div>
    )
}

export default Abap()