import React, { useEffect, useState } from "react";
import test from "../apis/testApi";
import compileApi from "../apis/compileApi";

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
  const compile = async () => {
    const code = `#include<iostream>
using namespace std;
int main()
{
    cout<<"Hello World from C++";   
    return 0;
}`;
    const data = {
      code: code,
      inputRadio: false,
      lang: "C++",
    };
    const res = await compileApi.postCompile(data);
    console.log(res);
  };
  return (
    <div>
      <button onClick={compile}>Compile</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Đăng</button>
      </form>
      {data.length > 0 ? listData() : <h1>Loading</h1>}
    </div>
  );
}

export default TestCallApi;
