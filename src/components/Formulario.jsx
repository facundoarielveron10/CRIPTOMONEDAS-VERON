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

const Formulario = () => {
	// HOOK PERSONALIZADO
	const [SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);

	return (
		<form>
			<SelectMonedas />

			<InputSubmit type="submit" value="Cotizar" />
		</form>
	);
};

export default Formulario;
