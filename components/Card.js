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
      {propiedad.imagenPrincipal && (
        <div className="poster">
          <Link
            href="/propiedades/[categoria]/[slug]"
            as={`/propiedades/${propiedad.categoria.slug}/${propiedad.slug}`}
          >
            <img
              src={API_URL + propiedad.imagenPrincipal.formats.medium.url}
              alt=""
              className="src"
            />
          </Link>
        </div>
      )}

      <div className="body">
        <h3>{propiedad.Nombre}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: propiedad.descripcion.substring(0, 200) + `...`,
          }}
        />
        <Link
          href="/propiedades/[categoria]/[slug]"
          as={`/propiedades/${propiedad.categoria.slug}/${propiedad.slug}`}
        >
          <a>Read more</a>
        </Link>
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

  .poster img {
    cursor: pointer;
  }

  .body {
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }
    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`;

export default Card;
