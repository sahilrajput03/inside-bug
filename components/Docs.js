const WhatWorks = (
	<div>
		<h4>What works 🐥︎:</h4>
		<ul className='good'>
			<li>let m = 2 + 3</li>
			<li>let p = "sahil" + " " + "rajput"</li>
			<li></li>
		</ul>
	</div>
)

const WhatDoesntWorks = (
	<div>
		<h4>What doesn't work: 🦍︎</h4>
		<ul className='bad'>
			<li>
				<p>
					Combined way: I get to implement the multiline support, and each line
					shoudl be passed to different line component. So below code should
					give individual code output:
				</p>
				<pre>
					let m = 2 + 2 <br />
					let p = 49 + 1
				</pre>
			</li>
			<li></li>
		</ul>
	</div>
)

const TodoNext = (
	<div>
		<h3>Todo </h3>
		<ul>
			<li>
				Modify the multi line ability to navigate to respective up and down
				line(span) elements. The key events arrow-up, arrow-down and enter key
				has been added(check the browser logs for that).{' '}
			</li>
			<li>
				Inject the some code inside the eval function so you can fetch the
				binding value from the input code from the user then.!!!
				<br />
				Say, watch the code execution method in the image @ `tai-tae-dev` group
				of discord server for implementation deatails.
			</li>
		</ul>
	</div>
)

export const Docs = (
	<div>
		{TodoNext}
		{WhatDoesntWorks}
		{WhatWorks}
	</div>
)
