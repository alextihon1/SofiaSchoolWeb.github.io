const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];


// nahodim elementi

const headerConteiner = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

// peremennie igri


let score = 0;  // kolicestvo pravilnih otvetov

let questionIndex = 0; // tekuscii vopros


clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;



function clearPage() {
	headerConteiner.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion() {
	console.log('showQuestion');
	//console.log(questions[questionIndex])

	// vopros
	//console.log(questions[questionIndex]['question']);
	//console.log(questions[questionIndex]['answers']);


	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])

	headerConteiner.innerHTML = title;

	// otveti
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']) {

		//for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
		//console.log(answerText);
		//console.log(index + 1, answerText);
		const questionTemplate =

			`<li>
				<label>
					<input value ="%number%" input type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>

			</li>`
		//let answerHTML = questionTemplate.replace('%answer%', answerText);
		//answerHTML = answerHTML.replace('%number%', answerNumber);
		const answerHTML = questionTemplate
			.replace('%answer%', answerText)
			.replace('%number%', answerNumber);
		//console.log(answerHTML);

		//listContainer.innerHTML = answerHTML;
		listContainer.innerHTML = listContainer.innerHTML + answerHTML;
		answerNumber++;
	}

}

function checkAnswer() {
	//console.log('checkAnswer started!');

	const checkedRadio = listContainer.querySelector('input[type= "radio"]:checked')
	//const checkRadio2 = listContainer.querySelector('input:checked')
	//console.log(checkRadio)


	if (!checkedRadio) {
		submitBtn.blur();
		return
	}
	//console.log(checkedRadio.value);

	// uznaem nomer otveta
	const userAnswer = parseInt(checkedRadio.value);


	// esli otvet vernii uvelicivaem scet

	//console.log(userAnswer, questions[questionIndex]['correct']);

	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
	}

	//console.log('score = ', score);

	if (questionIndex !== questions.length - 1) {
		console.log('This is NOT last question!!!')
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else {
		console.log('This is the last question.')
		clearPage();
		showResults();
	}



}

function showResults() {
	console.log('showResults started');
	console.log(score);

	const resultsTemplate =
		`
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
`;

	let title, message;

	// Options of header and text in results

	if (score === questions.length) {

		title = 'Поздравляем 🥳 🎉';
		message = 'Вы ответили верно на все вопросы 👏 🏅';

	} else if ((score * 100) / questions.length >= 50) {

		title = 'Поздравляем 🥈';
		message = 'Вы ответили верно на большую половину вопросов ';

	} else {
		title = 'Ну, так себе.. 🤔';
		message = 'Вы ответили верно на меньшую половину вопросов 🤦‍♂️';
	}

	//Result

	let result = `${score} из ${questions.length}`

	const finalMessage = resultsTemplate
		.replace('%title%', title)
		.replace('%message%', message)
		.replace('%result%', result);

	headerConteiner.innerHTML = finalMessage;

	// Change button name to : Start game

	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = () => history.go();


}