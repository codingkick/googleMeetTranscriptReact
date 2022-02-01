import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData, registerStart } from '../redux/actions/action';
import { app,db } from '../firebase';
import { getDatabase, ref, set,onValue } from "firebase/database";
import { Col, Container,Row,Alert} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Home = () => {
    const mapTheNotes = (myobj)=>{
        // console.log(myobj);
        if(Object.keys(myobj).length === 0)
        return(
            <center>
                <Col xs={12} md={4} key={1}>
                        <Alert variant='danger' style={{height : "100px"}}><h2>--- EMPTY ---</h2></Alert>
                </Col>
            </center>
        )
        return Object.keys(myobj).map(function(key,index){
            console.log(myobj[key]);
            return(
                <Col xs={12} md={4} key={index}>
                    <Alert variant='success' style={{height : "100px",overflow:'hidden'}}><b><u>{atob(key)}</u></b> : {myobj[key]['subtitle'].substring(0,50)+'...'}</Alert>
                </Col>
            )
        })
    }
    const [startDate, setStartDate] = useState(new Date());
    const [date, setdate] = useState(0);
    // console.log(date);
    // console.log(startDate);
    const [notes, setnotes] = useState(null);
    console.log(notes);
    const state = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
      setStartDate(new Date());
    }, []);
    
    useEffect(() => {
        // dispatch(loadData());
        console.log(db);
        const dbref = ref(db,`/transcript/email/${date}`);
        onValue(dbref,(snap)=>{
            var data = snap.val();
            if(data === null)
            data = {}
            console.log(data);
            setTimeout(()=>{
                setnotes(data);
            },5000);
        },{
            onlyOnce : true
        })      
    }, [date])

    useEffect(() => {
      console.log(startDate);
      var day = startDate.getDate();
      var month = startDate.getMonth()+1;
      var year = startDate.getFullYear();
      console.log(day," ",month," ",year);
      if(day<10)
      day = '0'+day;
      if(month<10)
      month = '0'+month;
      const encDate = btoa(day+'/'+month+'/'+year);
      console.log(encDate);
      setdate(encDate);
    }, [startDate]);
    

    return (
        <>
        {notes===null?<>Loading...</>:
        <>
        {
            
            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <center>
                        <h3>Date: </h3><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </center>
                        <br></br>
                    </Col>
                    <Col xs={12} md={10}>
                        <Container>
                            <Row>
                            {mapTheNotes(notes)}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        }
        </>}
        </>
    )
}
