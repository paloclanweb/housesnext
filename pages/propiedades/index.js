import {Flex, Box } from 'reflexbox';

function PropiedadesPage({propiedades}) {
    return (
        <Box variante="container" pt={40}>
            <ul>
                {propiedades.map(propiedad => (
                    <li key={propiedad.id}>
                        <h3>{propiedad.name}</h3>
                    </li>
                ))}
            </ul>
        </Box>
    )
}
export async function getServerSideProps() {
    const { API_URL } = process.env;

    const res = await fetch(`${API_URL}/api/houses/gethouseslist/1/22`);
    const data = await res.json();

    return {
        props: {
            propiedades: data
        }
    }
}

export default PropiedadesPage;