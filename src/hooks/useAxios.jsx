import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (URL, METHOD, BODY, TOKEN = null) => {
    setLoading(true);
    try {
      const response = await axios({
        method: METHOD,
        url: URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
        data: BODY,
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error.response.data.message);
      setLoading(false);
    }
  };

  return [data, loading, error, fetchData];
};

export default useAxios;
