import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
    cursor: pointer;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #9497ff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #7a7dfe;
    }
`;

const Error = styled.p`
    padding: 15px;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    background-color: #8b1818;
`;

const Formulario = ({ setMonedas }) => {
    // ESTADOS
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    // HOOK PERSONALIZADO
    const [moneda, SelectMonedas] = useSelectMonedas(
        'Elige tu Moneda',
        monedas
    );
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
        'Elige tu Criptomoneda',
        criptos
    );

    // EFECTOS
    useEffect(() => {
        const consultarAPI = async () => {
            const url =
                'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map((criptos) => {
                const objeto = {
                    id: criptos.CoinInfo.Name,
                    nombre: criptos.CoinInfo.FullName,
                };

                return objeto;
            });

            setCriptos(arrayCriptos);
        };
        consultarAPI();
    }, []);

    // FUNCIONES
    function handleSubmit(e) {
        e.preventDefault();

        if ([moneda, criptomoneda].includes('')) {
            setError(true);
            return;
        }

        setError(false);
        setMonedas({
            moneda,
            criptomoneda,
        });
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <SelectMonedas />
                <SelectCriptomoneda />

                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    );
};

export default Formulario;
