import Form from 'react-bootstrap/Form';

export function SelectBasicExample() {
	return (
		<Form.Select aria-label="Default select example">
			<option>Open this select menu</option>
			<option value="1">One</option>
			<option value="2">Two</option>
			<option value="3">Three</option>
		</Form.Select>
	);
}

export function SelectSizesExample() {
	return (
		<>
			<Form.Select size="lg">
				<option>Large select</option>
			</Form.Select>
			<br />
			<Form.Select>
				<option>Default select</option>
			</Form.Select>
			<br />
			<Form.Select size="sm">
				<option>Small select</option>
			</Form.Select>
		</>
	);
}