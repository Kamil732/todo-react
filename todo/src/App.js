import './App.css'
import Navgiation from './components/Navgiation'
import Home from './views/Home'
import Todo from './views/Todo'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

function App() {
  	return (
		<div>
			<Router>
				<Navgiation />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/todo-app">
						<Todo />
					</Route>
				</Switch>
			</Router>

		</div>
  	)
}

export default App
