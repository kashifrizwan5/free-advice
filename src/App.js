import React from 'react';
import axios from 'axios';

import './App.css';


class App extends React.Component {

	state = { advice: "" }

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios.get("https:/git add README.md/api.adviceslip.com/advice")
			.then((response) => {
				console.log(response);
				const { advice } = response.data.slip;
				this.setState({ advice })
			}).catch((reject) => {
				console.log(reject);
			})
	}

	render() {
		const { advice } = this.state
		return (
			<div className="app">
				<div className="card">
					<h1 className="heading">{this.state.advice}</h1>
					<button className="button" onClick={this.fetchAdvice}>
						<span>GIVE ME ADVICE!</span>
					</button>
				</div>
			</div>
		)
	}
}

export default App;