import React, { Component } from "react";

class App extends Component {
	state = {
		usdValue: 0,
		audValue: 0,
	};

	render() {
		return (
			<div>
				<h1>USD/AUD Conversion</h1>
				<div>
					<span className="currLabel">USD $</span>
					<input
						type="number"
						className="usdInput"
						value={this.state.usdValue}
						onChange={(e) => {
							this.setState({
								usdValue: e.target.value,
								audValue: e.target.value * 0.72,
							});
						}}
					/>
				</div>
				<div className="equals">=</div>
				<div>
					<span className="currLabel">AUD $</span>
					<input
						type="number"
						className="audInput"
						value={this.state.audValue}
						onChange={(e) =>
							this.setState({
								audValue: e.target.value,
								usdValue: e.target.value * 1.38,
							})
						}
					/>
				</div>
			</div>
		);
	}
}

export default App;
