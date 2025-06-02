// Your code here
function runQuiz() {
    var questionsArr = [
        {
            question: "The Unicorn is the national animal of Scotland.",
            answer: true
        },
        {
            question: "Three strikes in a row in bowling is called an egale.",
            answer: false
        },
        {
            question: "Apples and pears are part of the rose famly.",
            answer: true
        },
        {
            question: "Greenland is three times the size of the state of Texas.",
            answer: true
        },
        {
            question:"The liver is the second heaviest organ in the body.",
            answer: true
        },

    ];


    var numOfTrue = 0
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        console.log(question)
        var answer = confirm(question)
        if (answer) {
            numOfTrue++
        }
    }
    if (numOfTrue >= 4) {
        alert("You are smart")
    } else {
        alert("Now you know")
    }
}

