import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Estudiante() {
    const [form, setForm] = useState({
        cedula: "",
    });
     

    const manejadorInput = (event) => {
        const { name, value } = event.target;
        const names = name.split(".");
        if (names.length === 2) {
            setForm(prevState => ({
                ...prevState,
                [names[0]]: {
                    ...prevState[names[0]],
                    [names[1]]: value
                }
            }));
        } else {
            setForm(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    //registro estudiante
    const navigate = useNavigate()
  async  function manejadorBoton(){
        const paquete = {
            cedula: form.cedula,
        }
        await axios.post('http://127.0.0.1:8000/crearestudiante/', paquete).then(response =>{
            const id = response.data.id;
            localStorage.setItem('id', id);
            navigate('/voto');
        })
    }

  return (
    
    <MDBCard style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody>
            <MDBCardTitle>Estudiantes</MDBCardTitle>
            <MDBInput wrapperClass='mb-4' label='Numero de identificacion' size='lg' name="cedula" type='text' onChange={manejadorInput}/>
            <MDBBtn href='#' style={{ display: 'block', margin: 'auto' }} onClick={manejadorBoton}>Ingresar</MDBBtn>
        </MDBCardBody>
    </MDBCard>
   
  );
}