export function formatearDinero(cantidad, moneda = 'USD') {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: moneda,
	}).format(cantidad);
}
