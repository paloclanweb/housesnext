import styled from "@emotion/styled";
import Link from "next/link";

function Card({ propiedad }) {
  const { API_URL } = process.env;

  if(!propiedad.categoria) {
    propiedad.categoria = {};
    propiedad.categoria.slug = 'uncategorized';
  }

  return (
    <CardStyled>
      {propiedad.pictureUrl && (
        <div className="poster">
          {/* <Link
            href="/propiedades/[categoria]/[slug]"
            as={`/propiedades/${propiedad.categoria.slug}/${propiedad.slug}`}
          >
            <img
              src={API_URL + propiedad.imagenPrincipal.formats.medium.url}
              alt=""
              className="src"
            />
          </Link> */}
          <img src={API_URL + propiedad.pictureUrl} alt="" className="src" />
        </div>
      )}

      <div className="body">
        <h3>{propiedad.name}</h3>
        {propiedad.description}
        />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 100%;
  min-height: 570px;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

`;

export default Card;
