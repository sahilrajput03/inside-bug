export const style = (
	<style global jsx>{css`
		body {
			background: white;
		}

		textarea {
			margin: 0;
			font-size: 1rem;
			padding: 0.6rem;
			border-radius: 2rem;
			border: 1px solid deeppink;
		}
		textarea:focus {
			outline: none;
		}

		ul.good {
			list-style-type: '👌🏻';
		}
		ul.bad {
			list-style-type: '🛑︎';
		}
		body {
			caret-color: green;
		}
	`}</style>
)
