import styled from '@emotion/styled';

const Resultado = ({ resultado }) => {
    // DATOS
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        resultado;

    return (
        <div>
            <p>
                El Precio es de: <span>{PRICE}</span>
            </p>
            <p>
                El Precio mas alto del dia: <span>{HIGHDAY}</span>
            </p>
            <p>
                El Precio mas bajo del dia: <span>{LOWDAY}</span>
            </p>
            <p>
                La Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
            </p>
            <p>
                La Ultima actualizacion fue: <span>{LASTUPDATE}</span>
            </p>
        </div>
    );
};

export default Resultado;
