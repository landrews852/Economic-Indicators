import styles from "../../styles/Indicators.module.css";
import { CurrencyFormat, DateFormat } from "../tools/formatters";

export default function List(props) {
  if (!props.code && !props.date) {
    return (
      <div className={styles.cards}>
        {Array.isArray(props.indicators) ? (
          props.indicators.map((indicador) => {
            return (
              <div className={styles.card}>
                <h3>
                  <b>{indicador.nombre ? indicador.nombre : null}</b>
                </h3>
                <br />
                <p>
                  <b>Fecha: </b>
                  {indicador.fecha ? DateFormat(indicador.fecha) : null}
                </p>
                <p>
                  <b>Valor: </b>
                  {indicador.unidad_medida === "Pesos"
                    ? "$ " + CurrencyFormat(indicador.valor)
                    : indicador.valor}
                </p>
                <p>
                  <b>Unidad de medida: </b>
                  {indicador.unidad_medida ? indicador.unidad_medida : null}
                </p>
              </div>
            );
          })
        ) : (
          <p>Hubo un error en la búsqueda, por favor recargue la página.</p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <p>
        <b>{props.indicators.nombre}</b>
      </p>
      <p>
        <b>Unidad de medida: </b>
        {props.indicators.unidad_medida}
      </p>
      {props.indicators.serie?.map((serie) => {
        return (
          <div className={styles.series}>
            <hr />
            <p>
              <b>Fecha: </b>
              {serie.fecha ? DateFormat(serie.fecha) : null}
            </p>
            <p>
              <b>Valor: </b>
              {props.indicators.unidad_medida === "Pesos"
                ? "$" + CurrencyFormat(serie.valor)
                : serie.valor}
            </p>
          </div>
        );
      })}
    </div>
  );
}
