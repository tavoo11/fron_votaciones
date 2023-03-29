import React, { useState } from "react";
import '../asset/css/candidato.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
from 'mdb-react-ui-kit';

function CrearCuenta() {
    const [form, setForm] = useState({
        propuesta: "",
        imagen: "",
        nombre: "",
        apellido:"",
        curso: "",
    });
    const navigate = useNavigate();

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

    //convertir la imagen en formato Base64
    const manejarCambioImagen = (event) => {
        const archivo = event.target.files[0];
        const lector = new FileReader();
    
        lector.readAsDataURL(archivo);
    
        lector.onload = () => {
            setForm((prevState) => ({
                ...prevState,
                    imagen: lector.result,
            }));
        };
    };
    function borradorBoton(){
        navigate('/administrar')
    }
    

    const manejadorBoton = async () => {
        const paquete = {
            propuesta: form.propuesta,
            imagen: form.imagen,
            nombre: form.nombre,
            apellido: form.apellido,
            curso: form.curso,
        };

        try {
            const respuesta = await axios.post('http://127.0.0.1:8000/crearcandidato/', paquete);
            console.log(respuesta);
            console.log('enviado', paquete)
            alert('El candidato  ' + paquete.nombre + 'ha sido registrado');
            navigate("/");
        } catch (error) {
            console.error(error, form);
        }
    };
        return(
            <div>
                <MDBContainer fluid>

                    <MDBRow className='justify-content-center align-items-center m-5'>

                        <MDBCard>
                            <MDBCardBody className='px-4'>

                            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Crear un candidato</h3>

                            <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Propuesta' size='lg'  name="propuesta" type='text' onChange={manejadorInput}/>
                                </MDBCol>

                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Imagen' size='lg' accept="image/*" name="imagen" type='file' onChange={manejarCambioImagen}/>
                                </MDBCol>

                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Nombres' size='lg' name="nombre" type='text' onChange={manejadorInput}/>
                                </MDBCol>

                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Apellidos' size='lg' name="apellido" type='text' onChange={manejadorInput}/>
                                </MDBCol>

                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Curso' size='lg' name="curso" type='text' onChange={manejadorInput}/>
                                </MDBCol>

                            </MDBRow>

                            
                            <MDBBtn className="mb-4 w-50 gradient-custom-2" size='lg' onClick={manejadorBoton}>Registrar</MDBBtn>
                            <MDBBtn className='me-1' color='warning' onClick={() => borradorBoton()}>
                            Administrar candidatos
                            </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }


export default CrearCuenta;
