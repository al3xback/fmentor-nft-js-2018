const cardEl = document.querySelector('.card');

/* Promise.finally */
let description;

const promise = Promise.resolve(
	'Our Equilibrium collection promotes balance and calm.'
);

promise
	.then((text) => {
		description = text;
	})
	.finally(() => {
		const cardDescriptionEl = cardEl.querySelector('.card__desc');
		cardDescriptionEl.textContent = description;
	});

/* Object rest properties */
const card = {
	title: 'Equilibrium #3429',
	shortTitle: 'Equilibrium',
	authorName: 'Jules Wyvern',
	authorImage: 'avatar.png',
};

const { title, shortTitle, ...author } = card;
const { authorName, authorImage } = author;

const cardAuthorEl = cardEl.querySelector('.card__author');

const cardAuthorImageEl = cardAuthorEl.querySelector('.card__author-img');
cardAuthorImageEl.src = './images/' + authorImage;
cardAuthorImageEl.alt = authorName;

const cardAuthorNameEl = cardAuthorEl.querySelector('.card__author-desc a');
cardAuthorNameEl.textContent = authorName;
