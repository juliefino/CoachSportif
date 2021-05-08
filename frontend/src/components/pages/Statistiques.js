import React from 'react'
import { Bar } from 'react-chartjs-2'
import {jsPDF} from "jspdf"
import html2canvas from "html2canvas";
import Select from "react-select";
import {Box} from "@chakra-ui/react";
const pdfConverter = require("jspdf");

const BarChart = () => {

  const data = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', "Aout"],
  datasets: [{
    label: 'Distance',
    backgroundColor: '#C29B61',
    hoverBackgroundColor:'#663300',
    hoverBorderColor:'#FF0000',
    data: [65, 59, 80, 81, 56, 55, 40],
    borderColor: '#C29B61',
    tension: 0.1
  }]
};
  const options={
    maintainAspectRatio:false,
    responsive: true
  }
  const divPDF = () => {html2canvas(document.querySelector('html'), {scale: 1}).then(canvas => {
    const orientation = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
    let pdf;
    if( orientation.indexOf('portrait') >= 0) {
        pdf = new jsPDF('p', 'pt', [canvas.width,canvas.height]);
    }else {
        pdf = new jsPDF('l', 'pt', [canvas.width,canvas.height]);
    }
    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, canvas.width,canvas.height);
    pdf.save(); //-> download pdf file
})};
  return (
      <>
        <Box w="50%" p={6} l='left' alignItems="center" border="50px" borderColor="gray">
             <h3 style={{textAlign: "center"}}>Definissez un objectif à atteindre</h3>
                                <Select
                                    placeholder="Select Option"
                                    className="selection"
                                    style={{display: 'block'}}

                                />
                            </Box>
    <div className="Stats" style={{width: "100%", height:"500px"}} >
      <Bar  data={data} options={options} />
    </div>
      <button className='form-input-btn' onClick={divPDF}>Télécharger PDF</button>
  </>
  )
}

export default BarChart