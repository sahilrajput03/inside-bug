import dynamic from 'next/dynamic'
// import {MyResizable} fro../utils/Testing.jsTesting.js'
// import {InsideBug} from '../components/InsideBug'
let {log} = console

// const Index = () => {
// 	return <InsideBug />
// }

// export default Index

import React from 'react'

const ContentDynamic = dynamic(() => import('../components/InsideBug'), {
	ssr: false,
})

const HomePage = () => {
	return <ContentDynamic />
}

export default HomePage
