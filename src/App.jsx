import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Imagen = styled.img`
	display: block;
	width: 80%;
	max-width: 400px;
	margin: 100px auto 0 auto;
`;

const Heading = styled.h1`
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	font-size: 34px;
	text-align: center;
	margin-top: 80px;
	margin-bottom: 50px;
	color: #fff;

	&::after {
		content: '';
		display: block;
		width: 100px;
		height: 6px;
		margin: 10px auto 0 auto;
		background-color: #66a2fe;
	}
`;

function App() {
	return (
		<Contenedor>
			<Imagen src={ImagenCripto} alt="Criptomonedas" />
			<div>
				<Heading>Cotiza Criptomonedas al Instante</Heading>
				<Formulario />
			</div>
		</Contenedor>
	);
}

export default App;
