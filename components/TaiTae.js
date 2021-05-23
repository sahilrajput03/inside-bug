import {useEffect} from 'react'
import {useWhat} from 'usewhat'
import {Docs} from 'components/Docs'

let {log} = console

const App = () => {
	const [line, setLine] = useWhat(`line1`, 'let m = 2 + "kadam"')
	const [output, setOutput] = useWhat(`line1_output`, '')

	useEffect(() => {
		if (line.includes('=')) {
			const [_, toBeEvaluated] = line.split('=')
			try {
				const output = eval(toBeEvaluated)

				setOutput(output)
			} catch (error) {
				setOutput('🛑︎')
			}
		}
	}, [line])

	// log('ss', eval(code))
	return (
		<div>
			<h1>Tai-tae</h1>
			<p> Enter code below to see live output in the line..!</p>
			<div className='line'>
				<textarea
					rows='1'
					cols='50'
					value={line}
					onChange={({target: {value}}) => {
						setLine(value)
					}}
				/>
				<h2>Here is the temporary output</h2>
				{output}
				{/*  */}
			</div>
			{Docs}
			{/* {style} */}
		</div>
	)
}

export default App
