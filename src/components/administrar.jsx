import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function AdministrarCandidato() {
    
    const [candidatos, setCandidatos] = useState([]);

    useEffect(() =>{
        obtenerListaCandidatos();
    }, []);
    async function obtenerListaCandidatos() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/candidato/");
          setCandidatos(response.data);
        } catch (error) {
          console.log(error);
        }
    }
    const navigate = useNavigate();
    async function borradorBoton(candidatoId){
        const pk = parseInt(candidatoId)
        axios.delete(`http://127.0.0.1:8000/candidato/${pk}/`).then(res =>{
            console.log('Borrado');
        })
    }
  return (
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
            {candidato.propuesta}
          </MDBCardText>
          <MDBBtn href='#' color='danger' style={{ display: 'block', margin: ' 0 auto' }} onClick={() => borradorBoton(candidato.id)}>Borrar candidato</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </li>
  ))}
</ul>

  );
}