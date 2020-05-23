import fetch from "isomorphic-unfetch";
import Card from "components/Card";
import { Flex, Box } from "reflexbox";

const Home = ({ propiedades }) => {
  // console.log(propiedades);

  return (
    <Box variant="container">
      <Box my={40} as="h2">Nuestras Propiedades</Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "row" }}
        mb={100}
      >
        {propiedades.map((propiedad) => (
          <Box key={propiedad.id} width={{ _: "100%", md: "30%" }} variant="boxes">
            <Card propiedad={propiedad} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/propiedades`);
  const data = await res.json();

  return {
    props: {
      propiedades: data,
    },
  };
}

export default Home;
