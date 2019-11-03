import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
        <button
            className="square"
            onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(361).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
        <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
    );
  }

  createBoard(boardSize) {
    let table = []
    for (let i = 0; i < boardSize; i++) {
      let rows = []
      for (let j = 0; j < boardSize; j++)
        rows.push(this.renderSquare(i * boardSize + j))
      table.push(<div className="board-row">{rows}</div>)
    }
    return table
  }
  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <table>{this.createBoard(19)}</table>
        </div>
    );
  }
}

export default Board;
