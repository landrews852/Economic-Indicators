import { useState, useEffect } from "react";

export const useIndicatorsFetch = (props) => {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async (props) => {
      setLoading(true);
      let url = "http://localhost:3001/api/indicadores";

      if (props.date) {
        url = url + "/" + props.code + "/" + props.date;
      } else if (props.code) {
        url = url + "/" + props.code;
      }
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIndicators(data);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
          console.log(error);
        });
    };

    fetchData(props);
  }, [props]);

  return { indicators, loading, error };
};
