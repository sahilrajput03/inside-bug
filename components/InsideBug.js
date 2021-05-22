import {useWhat} from 'usewhat'

const InsideBug = () => {
	const [user, setUser] = useWhat('sahil', {name: 'Sahil'})

	log(useWhat, getWhat)

	return 'i want to use my library..!'
}

export default InsideBug
