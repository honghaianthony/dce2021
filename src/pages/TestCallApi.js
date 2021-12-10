import React, { useEffect, useState } from "react";
import test from "../apis/testApi";
import compileApi from "../apis/compileApi";
import { useStore } from "../store";

function TestCallApi() {
  const [state, dispatch] = useStore();

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
      {!state.isLoggedIn && <h2>You are not logged in</h2>}
      <button onClick={compile}>Compile</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default TestCallApi;
