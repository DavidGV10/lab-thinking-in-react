import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import FilterableProductTable from "./components/FilterableProductTable"
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
