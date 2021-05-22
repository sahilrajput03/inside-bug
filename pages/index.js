import dynamic from 'next/dynamic'
import React from 'react'

const ClienRenderedComponent = dynamic(() => import('../components/TaiTae'), {
	ssr: false, // I disabled the server rendering this way!!! Thanks to 🥇︎: https://github.com/vercel/next.js/issues/9890#issuecomment-605543395
})

const HomePage = () => {
	return <ClienRenderedComponent />
}

export default HomePage
