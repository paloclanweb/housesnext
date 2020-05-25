import fetch from "isomorphic-unfetch";
import Card from "components/Card";
import { Flex, Box } from "reflexbox";

const Home = ({ propiedades }) => {
  // console.log(propiedades);

  return (
    <Box variant="container">
      <Box my={40} as="h2">
        Nuestras Propiedades
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "column" }}
        mb={100}
      >
        {propiedades.map((propiedad) => (
          <Box
            key={propiedad.id_hotel}
            width={{ _: "100%", md: "100%" }}
            variant="boxes"
          >
            <Card propiedad={propiedad} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const { API_URL } = process.env;
  const datapost = {
    filter: {
      lang: "2",
      startDate: "2020-07-12",
      endDate: "2020-07-19",
      destination: "181",
      currency: "2",
      limit: "10",
      offset: "0",
    },
  };
  if (ctx.req) {
    const port = ctx.req.headers["x-forwarded-port"];

    const res = await fetch(
      `${API_URL}:${port}/apirest-hotels/hotels/filters`,
      {
        method: "POST",
        headers: {
          "x-api-key": "AsulvbP0MPH4C3fqjeMUKYOeBfQ65VT54TrbZN99",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datapost),
      }
    );
    console.log(res);
    const data = await res.json();

    return {
      props: {
        propiedades: data,
      },
    };
  }
}

export default Home;
