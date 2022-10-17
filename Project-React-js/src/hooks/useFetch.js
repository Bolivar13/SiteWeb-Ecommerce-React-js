import { useState } from "react";

function useFetch() {
  const base_url = "http://localhost:3000";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = (resource, id) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}/${id}`)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const list = (resource) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setError(null);
      fetch(`${base_url}/${resource}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setError(null);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          reject(error);
        });
    });
  };

  const create = (resource, body) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const update = (resource, id, body) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const remove = (resource, id, body) => {
    return new Promise((resolve, reject) => {
      fetch(`${base_url}/${resource}/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return {
    get,
    list,
    create,
    update,
    remove,
    loading,
    error,
  };
}

export default useFetch;
