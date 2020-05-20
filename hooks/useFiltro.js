// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import styled from '@emotion/styled';

// const Formulario = styled.form`
//     width: 100%;
//     display: flex;
//     margin-top: 2rem;
//     border: 1px solid #e1e1e1;
// `;
// // La mayoria de estos estilos no funcionan si no se les pone appereance: none;
// const Select = styled.select`
//     flex: 1;
//     padding: 1rem;
//     border: none;
//     text-align: center;
//     font-family: 'Lato', sans-serif;
//     appearance: none; 
//     background-color: white;
// `;

// const useFiltro = () => {
//     // state local del hook
//     const [categorias, setCategorias] = useState([]);
//     const [categoria, setCategoria] = useState('');

//     useEffect(() => {
//         const obtenerCategorias = async () => {
//             const resultado = await axios.get(
//               "http://localhost:1337/categorias"
//             );
//             setCategorias(resultado.data);
//         }
//         obtenerCategorias();
//     }, [])
//     // FiltroUI es el componente
//     const FiltroUI = () => (
//       <Formulario>
//         <Select onChange={e => setCategoria(e.target.value)} value={categoria}>
//           <option value=""> -- FILTRAR -- </option>
//           {categorias.map((opcion) => (
//             <option key={opcion.id} value={opcion.id}>
//               {opcion.Nombre}
//             </option>
//           ))}
//         </Select>
//       </Formulario>
//     );
//     return {
//         categoria,
//         FiltroUI
//     };
// };

// export default useFiltro;