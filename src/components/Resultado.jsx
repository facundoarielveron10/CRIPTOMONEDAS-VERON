import styled from '@emotion/styled';

const Datos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    line-height: 3rem;
    font-family: 'Lato', sans-serif;
    color: #fff;
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
    margin-top: 2rem;
`;

const Precio = styled.div`
    text-transform: uppercase;
    font-size: 24px;

    span {
        font-weight: 700;
        color: #00913f;
    }

    @media (max-width: 378px) {
        span {
            display: block;
        }
    }
`;

const Texto = styled.div`
    font-size: 18px;

    span {
        font-weight: 700;
        color: #00913f;
    }

    @media (max-width: 378px) {
        span {
            display: block;
        }
    }
`;

const Resultado = ({ resultado }) => {
    console.log(resultado);
    // DATOS
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        resultado;

    return (
        <Datos>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Criptomoneda"
            />
            <div>
                <Precio>
                    El Precio es de: <span>{PRICE}</span>
                </Precio>
                <Texto>
                    El precio mas alto del dia: <span>{HIGHDAY}</span>
                </Texto>
                <Texto>
                    El precio mas bajo del dia: <span>{LOWDAY}</span>
                </Texto>
                <Texto>
                    La variacion ultimas 24 horas:{' '}
                    <span>{CHANGEPCT24HOUR}</span>
                </Texto>
                <Texto>
                    La ultima actualizacion fue: <span>{LASTUPDATE}</span>
                </Texto>
            </div>
        </Datos>
    );
};

export default Resultado;
