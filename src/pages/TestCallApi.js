import React, { useEffect, useState } from "react";
import test from "../apis/testApi";

function TestCallApi() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await test.getAll();
    setData(response.data);
  }, []);

  const listData = () => {
    return data.map((item, index) => {
      return <h6 key={index}>{item.name}</h6>;
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    const body = { name: event.target.name.value };
    const res = await test.post(body);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Đăng</button>
      </form>
      {data.length > 0 ? listData() : <h1>Loading</h1>}
    </div>
  );
}

export default TestCallApi;
