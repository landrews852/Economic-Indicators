export function CurrencyFormat(props) {
  const formatter = new Intl.NumberFormat("es-CL", {
    // style: 'currency',
    // currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return formatter.format(props);
}

export function DateFormat(props) {
  const formatter = (e) => new Date(e).toLocaleDateString("es-cl");
  return formatter(props);
}
