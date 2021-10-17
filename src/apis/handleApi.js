import axios from "axios";

const BASE_API = "http://localhost:3000/api/";

export default async function callApi({
  url,
  method,
  data,
  option,
  dontLoading,
}) {
  const token = cookie.get("userToken") ?? "";
  return new Promise((resolve, reject) => {
    if (!dontLoading) store.dispatch(setLoading(true));
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
      // ...option,
    })
      .then((res) => {
        store.dispatch(offLoading());
        resolve(res.data);
      })
      .catch((err) => {
        store.dispatch(offLoading());
        reject(err);
      });
  });
}

