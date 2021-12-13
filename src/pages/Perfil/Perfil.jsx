import React, { useContext, useEffect } from 'react';
import FormularioPerfil from '../../components/FormularioPerfil/FormularioPerfil';
import './Perfil.css';
import Swal from 'sweetalert2';
import fotoPerfil from '../../assets/foto-perfil-default.png';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../context/AuthContext';

const Perfil = ({layoutPosition, titulo}) => {    
    const {token} = useContext(AuthContext);
    const {id} = useParams();    
    const {data, handleUrl} = useFetch(`https://amigosinformaticos.ddns.net:42070/adoptantes/${id}`, token);    

    

    const handleImage = async () => {
        const { value: file } = await Swal.fire({
            title: 'Selecciona una imagen',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Sube tu foto de perfil'
            }
        })
        
        if (file) {
            const formData = new FormData(); 
            formData.append('imagen', file);
              console.log(formData.get('imagen'));
            try {
                let response = await fetch(`https://amigosinformaticos.ddns.net:42070/adoptantes/${id}/imagen`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Token: token,                
                    },
                    credentials:'include'
                });
                let json = await response.json();
                console.log(json);
                
            }catch(error){
                console.log(error);

            }
            const reader = new FileReader()
            reader.onload = (e) => {
              Swal.fire({
                title: 'Your uploaded picture',
                imageUrl: e.target.result,
                imageAlt: 'The uploaded picture'
              })
            }
            reader.readAsDataURL(file)
          }

    };

    useEffect(() => {        
        if(id) {
            handleUrl(`https://amigosinformaticos.ddns.net:42070/adoptantes/${id}`);                      
        }
    });

    useEffect(() => {
        console.log(data);        
    }, [data])

    return (
        <article className={`perfil ${layoutPosition}`}>
            <header className="cabecera-perfil-area">
                <h2>{titulo || 'Perfil'}</h2>
            </header>
            <aside className="foto-perfil foto-perfil-area">
                <figure>
                    <img className="image" src={data ? data.imagen ? data.imagen: fotoPerfil : fotoPerfil} alt=""/>
                    <button onClick={handleImage}>Subir imagen</button>
                </figure>
                <button>Dar de baja</button>
            </aside>
            <FormularioPerfil adoptante={data} layoutPosition="formulario-perfil-area"/>            
        </article>
    )
}

export default Perfil;
