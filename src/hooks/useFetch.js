import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useFetch = (url) => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      let toastId = toast.loading("fetching data...");
      try {
        if (!url) {
          setPending(false);
          return setError("Invalid Url");
        }
        let response = await axios.get(url);
        if (response.status === 200) {
          toast.update(toastId, {
            isLoading: false,
            autoClose: true,
            type: "success",
            render: "Data fetched successfully!",
          });
          setData(response.data);
          setError(false);
        } else {
          setError(response?.data?.message || "An error occured");
          toast.update(toastId, {
            isLoading: false,
            autoClose: true,
            type: "error",
            render: response?.data?.message || "An error occured",
          });
        }
        setPending(false);
      } catch (error) {
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          type: "error",
          render: response?.data?.message || "An error occured",
        });
        setPending(false);
        setError(response?.data?.message || "An error occured");
      }
    })();
  }, [url]);
  return { pending, error, data };
};

export default useFetch;
