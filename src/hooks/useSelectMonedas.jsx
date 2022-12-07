import styled from '@emotion/styled';

const Label = styled.label`
	display: block;
	font-family: 'Lato', sans-serif;
	font-size: 24px;
	font-weight: 700;
	margin: 15px 0;
	color: #fff;
`;

const Select = styled.select`
	width: 100%;
	padding: 14px;
	font-size: 18px;
	border-radius: 10px;
`;

const useSelectMonedas = (label, opciones) => {
	const SelectElemento = () => (
		<>
			<Label htmlFor="monedas">{label}</Label>
			<Select id="monedas">
				<option value="">-- Seleccione --</option>
				{opciones.map(opcion => (
					<option key={opcion.id} value={opcion.id}>
						{opcion.nombre}
					</option>
				))}
			</Select>
		</>
	);

	return [SelectElemento];
};

export default useSelectMonedas;
