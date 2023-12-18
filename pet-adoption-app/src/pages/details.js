//import './App.css';
import {Link } from "react-router-dom";

import davsan from './../davsan.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


function Details() {
  return (
    <div className="flex flex-col items-center">

       <div className="flex flex-row m-5">
        <img src={davsan} alt="Davsan" className="w-1/3 rounded-lg "/>
        <div className="flex flex-col space-y-1 w-1/3 m-2 text-white justify-evenly">
                <p className="bg-bunny-400 rounded-lg p-1">Name:</p>
                <p className="bg-bunny-400 rounded-lg p-1">Type:</p>
                <p className="bg-bunny-400 rounded-lg p-1">Age:</p>
                <p className="bg-bunny-400 rounded-lg p-1">Sex:</p>               
        </div>
        <p className="bg-bunny-400 rounded-lg w-1/3 m-2 text-white p-1">Address:</p>
       </div>

        <p>More information about Pet</p>
        <p className="bg-bunny-100  m-5 rounded-lg w-11/12 p-4">cu</p>

        <div className="mx-5">
          <Accordion>
            <AccordionSummary
              expandIcon={'v'}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >Health Records</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        
        

        <div className="bg-bunny-500 rounded-lg text-white p-3 fixed bottom-10">Apply</div>

    </div>
  );
}

export default Details;
