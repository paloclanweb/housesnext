// import React from "react";
// import styled from "@emotion/styled";

// const Grid = styled.div`
//   @media (min-width: 480px) {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     row-gap: 2rem;
//     column-gap: 2rem;
//   }
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const Card = styled.div`
//   border: 1px solid #b5b5b5;
//   background-color: #f5f5f5;

//   img {
//     max-width: 100%;
//   }
// `;

// const Contenido = styled.div`
//   padding: 1 rem;

//   h3 {
//     margin: 0 0 2rem 0;
//     font-size: 1.4rem;
//     font-family: "Lato", sans-serif;
//   }

//   ul {
//     list-style: none;
//   }

//   ul li{
//     margin-right: 5rem;
//   }
// `;

// const usePropiedades = (propiedades) => {
//   // console.log(propiedades);
//   const Propiedades = () => (
//     <Grid>
//       {propiedades.map((propiedad) => (
//         <Card key={propiedad.id}>
//           <img src={`http://localhost:1337${propiedad.Imagen[0].url}`} alt="" />
//           <Contenido>
//             <h3>{propiedad.Nombre}</h3>
//             <ul>
//               <li>
//                 <img src="assets/img/icon-view-list.svg" alt="" />
//                 Baños: {propiedad.WC}
//               </li>
//               <li>
//                 <img src="assets/img/icon-view-list.svg" alt="" />
//                 Estacionamiento: {propiedad.Estacionamiento}
//               </li>
//               <li>
//                 <img src="assets/img/icon-view-list.svg" alt="" />
//                 Habitaciones: {propiedad.Habitaciones}
//               </li>
//             </ul>
//           </Contenido>
//         </Card>
//       ))}
//     </Grid>
//   );

//   return {
//     Propiedades,
//   };
// };

// export default usePropiedades;
