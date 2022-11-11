import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.processClick(this.props.squareNumber)}>
              {this.props.squareValue}
            </button>
          );
    }  
  }

class Choice extends React.Component {
    render() {
        return(
            <button className="square" onClick = {() => this.props.processChoice(this.props.choiceNumber)}>
                {this.props.choiceNumber}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentValue : 1,
            board : Array(81).fill(null),
        };
        fetch("https://sugoku.herokuapp.com/board?difficulty=random")
            .then(res => res.json())
            .then(data => 
                this.setState({board: data.board.flat(1)}));
    }
    renderSquare(i) {
        return <Square squareNumber={i} squareValue={this.state.board[i]} processClick={() => this.handleClick(i)} />;
    }

    renderChoice(i) {
        return <Choice choiceNumber={i} processChoice={() => this.onChoice(i)} />;
    }

    handleClick(i) {
        const squares = this.state.board.slice();
        squares[i] = this.state.currentValue;
        this.setState({board: squares});
    }
    onChoice(i) {
        this.setState({currentValue: i});
    }

    render() {
        const status = 'Current number: ' + this.state.currentValue;
        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            <div className="board-row">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            </div>
            <div className="board-row">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            </div>
            <div className="board-row">
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
            </div>
            <div className="board-row">
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            </div>
            <div className="board-row">
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            </div>
            <div className="board-row">
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            </div>
            <div className="board-row">
            {this.renderSquare(63)}
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
            {this.renderSquare(70)}
            {this.renderSquare(71)}
            </div>
            <div className="board-row">
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
            {this.renderSquare(80)}
            </div>
            <br></br>
            <div className="board-row">
            {this.renderChoice(1)}
            {this.renderChoice(2)}
            {this.renderChoice(3)}
            {this.renderChoice(4)}
            {this.renderChoice(5)}
            {this.renderChoice(6)}
            {this.renderChoice(7)}
            {this.renderChoice(8)}
            {this.renderChoice(9)}
            </div>
        </div>
        );
    }
    }

    /* class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{status }</div>
            <ol>{ TODO }</ol>
            </div>
        </div>
        );
    }
} */


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
