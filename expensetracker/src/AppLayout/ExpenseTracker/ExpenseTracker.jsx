import React, { Component } from "react";
// import History from "../../Components/History/History";

class ExpenseTracker extends Component {
	state = {
		balance: "0.00",
		income: "0.00",
		expense: "0.00",
		text: "0.00",
		number: "0.00",
		showValue: false,
	};

	changeText = (e) => {
		this.setState({ text: e.target.value });
	};

	changeNumber = (e) => {
		this.setState({ number: e.target.value });
	};

	buttonClicked = (e) => {
		e.preventDefault();
		this.setState({ showValue: true });
		console.log(this.state.text, this.state.number);
	};

	render() {
		return (
			<div className="container">
				<div className="header">
					<h1>Expense Tracker </h1>
				</div>
				<div className="balance">
					<span>your balance</span>
					<span>${this.state.showValue && this.state.number}</span>
				</div>
				<div className="incandexp">
					<div className="inc">
						<span>INCOME</span>
						<span>{this.state.income}</span>
					</div>
					<div className="exp">
						<span>EXPENSE</span>
						<span>{this.state.expense}</span>
					</div>
				</div>
				<div className="history">
					<h1>history</h1>
					{/* <History text={this.state.text} number={this.state.number} /> */}
				</div>
				<div className="transaction">
					<h1>Add new transaction</h1>
				</div>
				<form className="inputField">
					<div className="text">
						<label>text</label>
						<input type="text" onChange={this.changeText} />
					</div>
					<div className="amount">
						<label>Amount</label>
						<input type="number" onChange={this.changeNumber} />
					</div>
					<button className="btn" onClick={this.buttonClicked}>
						Add transaction
					</button>
				</form>
			</div>
		);
	}
}

export default ExpenseTracker;

/*

const ExpenseTracker = () => {
	const [balance, setBalance] = useState("0.00");
	const [income, setIncome] = useState("0.00");
	const [expense, setExpense] = useState("0.00");
	const [text, setText] = useState("");
	const [number, setNumber] = useState("");

	const buttonClicked = () => {
		console.log("button clicked");
		console.log(text, number);
	};

	return (
		<div className="container">
			<div className="header">
				<h1>Expense Tracker</h1>
			</div>
			<div className="balance">
				<span>your balance</span>
				<span>${number}</span>
			</div>
			<div className="incandexp">
				<div className="inc">
					<span>INCOME</span>
					<span>{income}</span>
				</div>
				<div className="exp">
					<span>EXPENSE</span>
					<span>{expense}</span>
				</div>
			</div>
			<div className="history">
				<h1>history</h1>
				<History text={text} number={number} />
			</div>
			<div className="transaction">
				<h1>Add new transaction</h1>
			</div>
			<div className="inputField">
				<div className="text">
					<label>text</label>
					<input
						type="text"
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				</div>
				<div className="amount">
					<label>Amount</label>
					<input type="number" onChange={(e) => setNumber(e.target.value)} />
				</div>
			</div>
			<button className="btn" onClick={buttonClicked}>
				Add transaction
			</button>
		</div>
	);
};

export default ExpenseTracker;
*/
