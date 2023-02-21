import './Chart.css'
import React, { Component } from 'react'


const Chart = () => {
  return (
    <div class="results" id="chart-area">
        <h3 id="message"></h3>
        <canvas id="data-set"></canvas>
        <h3 id="months-message"></h3>
      </div>
  )
}

export default Chart
