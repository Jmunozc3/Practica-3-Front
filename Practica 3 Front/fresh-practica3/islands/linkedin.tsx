import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Job from  "../types.ts";


type LinkedinProps = {
  resultado: Job[];
};

const Linkedin: FunctionComponent<LinkedinProps> = (props) => {

  const {resultado} = props;
  
  return (
    <>
      <div>
        <div class="Pantalla">

        <div class="P Izquierda">

      < div class="Titulo">
      <h2>Principales empleos que te recomendamos</h2><br/>
      <h5>{resultado.length} resultados</h5> 
      </div>
  

        
     {resultado.map((job) => (

     <div class="Cuadro">  

  

      <div key={job.slug}>
   
   
      <img src="https://media.licdn.com/dms/image/D560BAQFbDI62JkoR-Q/company-logo_200_200/0/1698430005732/oppfilm_logo?e=2147483647&v=beta&t=MJzx_-v8W5O7Tj-ACICWANdxHDZU_2LGXuFyJhhIQt8"/>
   

        <h5><strong>{job.title}</strong></h5><br/>
        <h5>{job.company_name}</h5><br/>
        <p>{job.location}</p><br/>
        <p>Algunos de tus contactos trabajan aquí</p><br/>
        <p>Promocionado - 20 solicitudes</p><br/>

      </div>   

  </div>
     
      ))}   

  </div>

    <div class="P Derecha">

    {resultado.map((job) => (
      <div key={job.slug}>
      
      <h2><strong>{job.title}</strong></h2><br/>
      
      <p>{job.company_name} - {job.location} - Hace 1 semana - 3 solicitudes</p><br/>

      <p>{job.description}</p>

      </div>
    ))}

    </div> 

    </div>


    </div>
        </>
      );
};

export default Linkedin;
