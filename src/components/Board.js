import React, { Component } from 'react';
import Square from './Square.js'

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
    );
  }
}
