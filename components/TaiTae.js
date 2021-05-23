import {useEffect} from 'react'
import {useWhat} from 'usewhat'
import {Docs} from 'components/Docs'
import {useKeypress} from './useKeyPress'

let {log} = console

const App = () => {
	const [line, setLine] = useWhat(
		`line1`,
		`let quality = 'Passion ' + 'work! ' + '99%.'`
	)
	const [output, setOutput] = useWhat(`line1_output`, '')
	const up = useKeypress({key: 'ArrowUp'})
	const down = useKeypress({key: 'ArrowDown'})
	const enter = useKeypress({key: 'Enter'})

	useEffect(() => {
		if (up.down) {
			// prev() // appropriate actions here to change focus to next/previous input.
			log('pressed up')
		}
		if (down.down) {
			log('pressed down')
			// next() // appropriate actions here to change focus to next/previous input.
		}
		if (enter.down) {
			log('pressed enter')
			// next() // appropriate actions here to change focus to next/previous input.
		}
	}, [up.down, down.down, enter.down])

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

	useEffect(() => {
		let el = document.querySelector('.input-wrap .input')
		let widthMachine = document.querySelector('.input-wrap .width-machine')
		el.addEventListener('keyup', () => {
			widthMachine.innerHTML = el.value
		})

		return () => {
			el.removeEventListener('keyup', () => {
				widthMachine.innerHTML = el.value
			})
		}
	})

	// log('ss', eval(code))
	return (
		<div>
			<h1>Tai-tae</h1>
			<p> Enter code below to see live output in the line..!</p>
			<div className='code-area'>
				<span className='input-wrap'>
					<span className='width-machine' aria-hidden={true}>
						{line}
					</span>
					<input
						className='input'
						value={line}
						onChange={({target: {value}}) => {
							if (value.includes('\n')) {
								alert('new line..')
							} else {
								setLine(value)
							}
						}}
					/>
				</span>
				<span className='output-green'>{output}</span>
				{/*  */}
			</div>
			{Docs}
			{/* {style} */}
		</div>
	)
}

export default App
