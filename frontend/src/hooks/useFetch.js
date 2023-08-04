import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";
import { useNavigate } from "react-router-dom";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url, { withCredentials: true });
        setData(res.data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
export const useFetchSuggestions = (url, { category, title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.post(url, {category, title}, { withCredentials: true });
        setData(res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const useFetchArticleCovers = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url, { withCredentials: true });
        setData(res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const useFetchSingleArticle = (url, { articleId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.post(url, {articleId}, { withCredentials: true });
        if (res.data === null) {
          navigate("/plans")
        } else {
          setData(res.data);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
