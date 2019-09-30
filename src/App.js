import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Exporting Mongodb Metrics using prometheus and grafana</h1>
       <p>
          React App Using Docker, Kubernetes, Prometheus, Grafana and Mongodb.
        </p>
        <ol>
          <li>Create App</li>
          <li></li>
        </ol>
        <h1>
          Useful Links
        </h1>
        <ol>
          <li>
          https://github.com/helm/charts/tree/master/stable/prometheus-mongodb-exporter
          </li>
        </ol>
      
    </div>
  );
}

export default App;
