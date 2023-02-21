import './Form.css'
import React, { Component } from 'react'


const Form = () => {
  return (
    <div class="calculator">
        <div class="heading">
          <h3>Investiční kalkulačka</h3>
          <small>Nárust vašich peněz v čase při složeném úrokování</small>
        </div>
        <form class="compound-form">
          <div class="input-group">
            <label for="initialAmount">Počáteční vklad [Kč]</label>
            <input type="number" name="" id="initialAmount" /><br />
            <div id="initial-warning">
              <small>Tento údaj musíte vyplnit!</small>
            </div>
          </div>
          <div class="input-group">
            <label for="monthlyDeposit">Měsíční vklad [Kč]</label>
            <input type="number" name="" id="monthlyDeposit" value="0"/>
            <small>Nepovinné</small>
            
          </div>
          <div class="input-group">
            <label for="rates">Roční úrok [%]</label>
            <input type="number" name="" id="rates" />
            <div id="rates-warning">
              <small>Tento údaj musíte vyplnit!</small>
            </div>
          </div>
          <div class="input-group">
            <label for="investmentYears">Délka investování</label>
            <input type="number" name="" id="investmentYears" />
            <div id="duration-warning">
              <small>Tento údaj musíte vyplnit!</small>
            </div>
            <select id="savingsLengthChoise">
              <option value="1">Let</option>
              <option value="2">Měsíců</option>
            </select>
          </div>
          <div class="input-group">
            <button>Spočítej</button>
          </div>
        </form>
      </div>
  )
}

export default Form
