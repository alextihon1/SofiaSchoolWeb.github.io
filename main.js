const questions = [
	{
		question: "1. Как называется знаменитый мост через Влтаву?",
		answers: ["Мост Карела", "Карлов мост", "Мост Вацлава", "Янов Мост"],
		correct: 2,
	},
	{
		question: "2. Где находится Астрономические часы (Орлой)?",
		answers: [
			"На Вацлавской площади",
			"На Староместской площади",
			"На площади Святой Марии",
			"В Пражском Граде",
		],
		correct: 2,
	},
	{
		question: "3. Какой собор расположен в Пражском Граде?",
		answers: [
			"Собор Святого Вацлава",
			"Собор Святого Петра",
			"Собор Святой Марии",
			"Собор Святого Вита",
		],
		correct: 4,
	},
	{
		question: "4 Какая река протекает через Прагу?",
		answers: ["Дунай", "Влтава", "Эльба", "Сена"],
		correct: 2,
	},
	{
		question: "5 Что чаще всего советуют туристам посетить в Праге на закате?",
		answers: ["Собор Святого Вита", "Пражский Град", "Карлов мост", "Телебашню"],
		correct: 3,
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