const { useEffect, useState } = require("react");
import { axiosInstance } from "../../../axios/index";

export const usePasien = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get("/dewan");

      console.log(res.data);
      setData(res.data);
    };
    getData();
  }, []);

  return {
    dewan: data,
  };
};
