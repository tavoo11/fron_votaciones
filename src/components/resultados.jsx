import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';

function Resultados(){
    const [candidatos, setCandidatos] = useState([]);
    const [resultados, setResultados] = useState([]);

    useEffect(() =>{
        obtenerListaCandidatos();
        obtenerResultados();
    }, []);
    async function obtenerListaCandidatos() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/candidato/");
          setCandidatos(response.data);
        } catch (error) {
          console.log(error);
        }
    }

    async function obtenerResultados(){
        try {
            const result = await axios.get('http://127.0.0.1:8000/votos/');
            const resultadosPorCandidato = {};
            for (const resultado of result.data) {
                const idCandidato = resultado.candidato.id;
                if (resultadosPorCandidato[idCandidato]) {
                    resultadosPorCandidato[idCandidato]++;
                } else {
                    resultadosPorCandidato[idCandidato] = 1;
                }
            }
            console.log(resultadosPorCandidato);
            setResultados(resultadosPorCandidato);
        } catch (err){
            console.log(err);
        }
    }

    return(
        <ul className='row justify-content-center' style={{ marginTop: '20px' }}>
        {candidatos.map(candidato => (
          <li key={candidato.id} className='col-md-3' style={{listStyleType:'none'}}>
            <MDBCard style={{ maxWidth: '30rem', margin: '0 auto' }}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={candidato.imagen} fluid alt='...' style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{candidato.nombre} {candidato.apellido}</MDBCardTitle>
                <MDBCardText>
                Votos: {Array.isArray(resultados[candidato.id]) ? resultados[candidato.id].length : resultados[candidato.id] || 0}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </li>
        ))}
      </ul>
    )
}
export default Resultados