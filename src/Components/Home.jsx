import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Bookmarks from '../bookmarks.json';
function Home(){
    return(
        <div className="Home">
            <h1 className="Bookmarks-Text">Dev Tools Bookmarks</h1>
            <div className="Cards-div-Home">            
            {
                Bookmarks.map(bookmark =>{
                    return(
                        <Card className="Card-Home" bg="light">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body className="Cardbody">
                                <Card.Title><b>{bookmark.name}</b></Card.Title>
                                <hr/>
                                <a href={bookmark.link} target="blank"><Button variant="light" >Link</Button></a>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home()