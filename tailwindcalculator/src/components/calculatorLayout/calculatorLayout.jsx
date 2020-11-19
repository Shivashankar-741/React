import React, { Component } from "react";

class Layout extends Component {
	state = {
		result: [],
		arr: "",
	};

	addExpression(str) {
		console.log(str);
		let arraySplit = str.split("");

		for (let i = 0; i < arraySplit.length; i++) {
			if (arraySplit[i] === "+" || "-" || "/" || "*") {
				const indexSym = arraySplit.indexOf(arraySplit[i]);
				const one = parseInt(arraySplit.slice(0, indexSym).reduce((a, b) => a + b, 0));
				const two = parseInt(arraySplit.slice(indexSym + 1).reduce((a, b) => a + b, 0));
				if (arraySplit[i] === "+") {
					console.log(this.state.result);
					this.setState({
						result: [],
						arr: one + two,
					});
				} else if (arraySplit[i] === "-") {
					this.setState({
						result: [],
						arr: one - two,
					});
				} else if (arraySplit[i] === "*") {
					this.setState({
						result: [],
						arr: one * two,
					});
				} else if (arraySplit[i] === "/") {
					this.setState({
						result: [],
						arr: one / two,
					});
				} else if (arraySplit[i] === "%") {
					this.setState({
						result: [],
						arr: one % two,
					});
				}
			}
		}
	}

	addValue = (value) => {
		if (value === "AC") {
			this.setState({ result: [], arr: "" });
		} else if (value === "=") {
			console.log(value);
			let str = "";
			let arrLength = this.state.result.length;
			for (let i = 0; i < arrLength; i++) {
				str += this.state.result[i];
			}
			this.addExpression(str);
		} else {
			this.setState({ result: this.state.result.concat(value) });
		}
	};

	render() {
		return (
			<div className="flex justify-center">
				<div className="grid grid-cols-4 grid-rows-6 ">
					<div
						className="col-start-1 col-span-full row-start-1 row-span-1 bg-gray-600 flex justify-end items-end p-4
            text-4xl text-white
        "
					>
						{this.state.result} {this.state.arr}
					</div>

					<div
						className="col-start-1 col-span-1 row-start-2 row-span-1 bg-gray-400 border-solid border-2 border-white
            flex justify-center items-center text-4xl  
            sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue("AC")}>
							AC
						</span>
					</div>
					<div
						className="col-start-1 col-span-1 row-start-3 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl

        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(7)}>
							{" "}
							7
						</span>
					</div>
					<div
						className="col-start-1 col-span-1 row-start-4 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer " onClick={() => this.addValue(4)}>
							{" "}
							4
						</span>
					</div>
					<div
						className="col-start-1 col-span-1 row-start-5 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(1)}>
							{" "}
							1
						</span>
					</div>
					<div className="col-start-1 col-span-1 row-start-6 row-span-1 bg-gray-400 border-solid border-2 border-white"></div>

					<div
						className="col-start-2 col-span-1 row-start-2 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue()}>
							+/-
						</span>
					</div>
					<div
						className="col-start-2 col-span-1 row-start-3 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(8)}>
							{" "}
							8
						</span>
					</div>
					<div
						className="col-start-2 col-span-1 row-start-4 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(5)}>
							{" "}
							5
						</span>
					</div>
					<div
						className="col-start-2 col-span-1 row-start-5 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(2)}>
							{" "}
							2
						</span>
					</div>
					<div
						className="col-start-2 col-span-1 row-start-6 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(0)}>
							{" "}
							0
						</span>
					</div>

					<div
						className="col-start-3 col-span-1 row-start-2 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer " onClick={() => this.addValue("%")}>
							{" "}
							%
						</span>
					</div>
					<div
						className="col-start-3 col-span-1 row-start-3 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(9)}>
							{" "}
							9
						</span>
					</div>
					<div
						className="col-start-3 col-span-1 row-start-4 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(6)}>
							{" "}
							6
						</span>
					</div>
					<div
						className="col-start-3 col-span-1 row-start-5 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer " onClick={() => this.addValue(3)}>
							{" "}
							3
						</span>
					</div>
					<div
						className="col-start-3 col-span-1 row-start-6 row-span-1 bg-gray-400 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue(".")}>
							{" "}
							.
						</span>
					</div>

					<div
						className="col-start-4 col-span-1 row-start-2 row-span-1 bg-yellow-800 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
        "
					>
						<span className="cursor-pointer " onClick={() => this.addValue("/")}>
							{" "}
							/
						</span>
					</div>
					<div
						className="col-start-4 col-span-1 row-start-3 row-span-1 bg-yellow-800 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue("*")}>
							{" "}
							*
						</span>
					</div>
					<div
						className="col-start-4 col-span-1 row-start-4 row-span-1 bg-yellow-800 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue("-")}>
							{" "}
							-
						</span>
					</div>
					<div
						className="col-start-4 col-span-1 row-start-5 row-span-1 bg-yellow-800 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer" onClick={() => this.addValue("+")}>
							{" "}
							+
						</span>
					</div>
					<div
						className="col-start-4 col-span-1 row-start-6 row-span-1 bg-yellow-800 border-solid border-2 border-white
             flex justify-center items-center text-4xl 
             sm:text-2xl
        "
					>
						<span className="cursor-pointer " onClick={() => this.addValue("=")}>
							=
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
