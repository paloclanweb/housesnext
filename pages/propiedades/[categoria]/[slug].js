import { Box, Flex } from "reflexbox";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

function Propiedad({ propiedad }) {
  // console.log(propiedad);

  return (
    <Box variant="container">
      <Box as="h2" my={40}>
        {propiedad.nombre}
      </Box>
      <Box maxWidth={600}>
        <p dangerouslySetInnerHTML={{ __html: propiedad.descripcion }}></p>
      </Box>
    </Box>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(publicRuntimeConfig);
  // console.log(context);
  const res = await fetch(`${publicRuntimeConfig.API_URL}/propiedades?slug=${slug}`);
  const data = await res.json();
  return {
    props: {
      propiedad: data[0]// cuando se filtra devuelve un array en vez de un json
    },
  };
       
}

export default Propiedad;
