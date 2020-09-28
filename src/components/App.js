import React from 'react';
import Accordion from './Accordion';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'It is a favorite library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use it like this! See, super simple',
	},
];

export default () => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};
