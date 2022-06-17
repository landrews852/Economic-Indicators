import Image from "next/image";
import { useState, useEffect } from "react";
import List from "../components/list/list";
import { DateFormat } from "../components/tools/formatters";
import { useIndicatorsFetch } from "../hooks/useIndicatorsFetch";
import styles from "../styles/Indicators.module.css";

export default function Indicators() {
  const [state, setState] = useState({
    code: "",
    date: "",
  });
  const [disabledDate, setDisabledDate] = useState(true);
  const [lateMsg, setLateMsg] = useState(false);
  const { indicators, loading, error } = useIndicatorsFetch(state);

  const today = () => DateFormat(new Date());

  const handleDate = (e) => {
    setState({
      ...state,
      date: DateFormat(e.target.value),
    });
  };
  const handleCode = (e) => {
    setState({
      ...state,
      code: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setState({
      code: "",
      date: "",
    });
  };

  useEffect(() => {
    if (loading) setTimeout(() => setLateMsg(true), 6000);
    setLateMsg(false);
  }, [loading]);

  useEffect(() => {
    if (state.code === "") setDisabledDate(true);
    else setDisabledDate(false);
  }, [state]);

  if (loading)
    return (
      <div className={styles.loading}>
        <Image
          src="/loading.svg"
          alt="Loading Spinner"
          width={100}
          height={100}
        />
        {lateMsg ? (
          <p>
            Está demorando más de lo normal, por favor espere o recargue la
            página.
          </p>
        ) : null}
      </div>
    );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Indicadores</h1>
      <div className={styles.form_container}>
        <div className={styles.form}>
          <div className={styles.code}>
            <label className={styles.label}>Selecciona un indicador: </label>
            <select
              className={styles.select}
              name="code"
              onChange={handleCode}
              value={state.code}
            >
              <option hidden>Selecciona un indicador</option>
              <option disabled>Selecciona un indicador</option>
              <option value="uf">Unidad de fomento (UF)</option>
              <option value="ivp">Indice de valor promedio (IVP)</option>
              <option value="dolar">Dólar observado</option>
              <option value="dolar_intercambio">Dólar acuerdo</option>
              <option value="euro">Euro</option>
              <option value="ipc">Indice de Precios al Consumidor (IPC)</option>
              <option value="utm">Unidad Tributaria Mensual (UTM)</option>
              <option value="imacec">Imacec</option>
              <option value="tpm">Tasa Política Monetaria (TPM)</option>
              <option value="libra_cobre">Libra de Cobre</option>
              <option value="tasa_desempleo">Tasa de desempleo</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
          <div className={styles.date}>
            <label className={styles.label}>
              Selecciona una fecha:{" "}
              {disabledDate ? (
                <span className={styles.disabled}>
                  (Elige un indicador primero)
                </span>
              ) : null}
            </label>
            <input
              disabled={disabledDate}
              type="date"
              className={styles.date_input}
              name="date"
              value={state.date}
              placeholder="Fecha..."
              max={today()}
              onChange={handleDate}
            />
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Traer todos los indicadores
          </button>
        </div>
        <hr />
      </div>
      <div className={styles.list}>
        <List code={state.code} date={state.date} indicators={indicators} />
      </div>
    </div>
  );
}
