// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import usePropiedades from "../hooks/usePropiedades";
// import useFiltro from "../hooks/useFiltro";
// import styled from "@emotion/styled";

// const Contenedor = styled.div`
//   margin: 0 auto;
//   width: 95%;
//   max-width: 1200px;
// `;

// export default function Home() {
//   const [propiedades, setPropiedades] = useState([]);
//   const [filtradas, setFiltradas] = useState([]);

//   const { Propiedades } = usePropiedades(filtradas);
//   const { categoria, FiltroUI } = useFiltro();

//   // el segundo parametro es un state que cuando cambien ejecutara
//   // el primer parametro que es un metodo
//   // si no se pone un parametro de state entonces solo se
//   // ejecutara el metodo una sola vez en el Mount de este
//   useEffect(() => {
//     if (categoria) {
//       console.log(`la categoria es ${categoria}`);
//       /// Consulta la API para Filtrar las propiedades por categoria
//       let filtradas = propiedades.filter(
//         (propiedad) => propiedad.categoria.id == categoria
//       );
//       setFiltradas(filtradas);
//     } else {
//       // Consulta la API y trae todo
//       console.log(categoria);
//       let obtenerPropiedades = async () => {
//         let resultado = await axios.get("http://localhost:1337/propiedades");
//         setPropiedades(resultado.data);
//         setFiltradas(resultado.data);
//       };
//       obtenerPropiedades();
//     }
//   }, [categoria]);

//   return (
//     <Contenedor>
//       <div className="container">
//         <FiltroUI />
//         <h2>Nuestras Casas y Departamentos</h2>
//         <Propiedades />
//       </div>
//     </Contenedor>
//   );
// }
import fetch from "isomorphic-unfetch";
import Card from "components/Card";
import { Flex, Box } from "reflexbox";

const Home = ({ propiedades }) => {
  // console.log(propiedades);

  return (    
        propiedades.map((propiedad) => (
          <div key={propiedad.id} >
            <Card propiedad={propiedad} />
          </div>))
    
  );
};

export async function getServerSideProps() {
 

  const res = await fetch(
    `https://skinet-netcore.herokuapp.com/api/houses/1/22`
  );
  const data = await res.json();

  return {
    props: {
      propiedades: data,
    },
  };
}

export default Home;
