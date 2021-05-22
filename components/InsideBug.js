import {useWhat} from 'usewhat'

let {log} = console

const App = () => {
	const [code, setCode] = useWhat('code', '')

	return (
		<div>
			<h1>Taitae</h1>
			<textarea>I am text area..</textarea>
		</div>
	)
}

export default App
