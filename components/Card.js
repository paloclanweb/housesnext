import styled from "@emotion/styled";
import Link from "next/link";

function Card({ propiedad }) {
  const { API_URL } = process.env;

  return (
    <CardStyled>
      {propiedad.main_photo && (
        <div className="poster">
          <img src={propiedad.main_photo} alt="" className="src" />
        </div>
      )}

      <div className="body">
        <h3>{propiedad.hotel_name}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: propiedad.summary,
          }}
        />

        <a>Read more</a>
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
