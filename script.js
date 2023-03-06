let result = document.getElementById("result");
let form = document.getElementById("myForm");

function verify() {
    let answer1 = form.elements.englandCapital.value;
    let answer2 = form.elements["franceCities[]"];

    let question1Result = false;
    if (answer1 === "london") {
        question1Result = true;
    }
    // console.log(question1Result);

    let question2Result = false;
    if (answer2[0].checked && !answer2[1].checked && !answer2[2].checked && answer2[3].checked) {
        question2Result = true;
    }
    // console.log(question2Result);

    if (question1Result && question2Result) {
        result.innerText = "Congratulations your 2 answers are correct"
    } else if (question1Result) {
        result.innerText = "Your first answer is correct but not your second"
    } else if (question2Result) {
        result.innerText = "Your second answer is correct but not your first"
    } else {
        result.innerText = "None of your answers are correct"
    }
}

// console.log(form);


// Old results

// result.innerText = userName + " likes";

    // let array = [];
    // for (let i = 0; i < userLikes.length; i++) {
    //     if (userLikes[i].checked) {
    //         array.push(userLikes[i].id)
    //     }

    // }
    // result.innerText = result.innerText + " " + array.join(" and ") + ".";

    // userLikes.forEach(like => {
    //     if (like.checked) {
    //         result.innerText = result.innerText + " " + like.id;
    //     }
    // })
    // result.innerText += ".";