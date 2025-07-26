var textArea = document.getElementById('input')
var result = document.getElementsByTagName('h3')[0]

async function check() {
    let userInput = textArea.value;
    let reversedInput = userInput.split('').reverse().join('')
    let isValidWord = false

    if (!userInput) {
        result.innerText = "Please enter a word."
        document.body.style.backgroundColor = "white"
    } else {
        result.innerHTML = "<span style='font-weight:normal;'>Please wait</span>"

        try {
            let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`);
            isValidWord = response.ok;
        } catch (e) {
            isValidWord = false;
        }

        if(!isValidWord) {
            result.innerText = "Please enter a valid English word."
            document.body.style.backgroundColor = "#FFEF00"
        } else {
                if (userInput === reversedInput) {
                result.innerText = `${userInput} is a palindrome`
                document.body.style.backgroundColor = "#00FA9A"
            } else {
                result.innerText = `${userInput} isn't a palindrome`
                document.body.style.backgroundColor = "#ff3f35ff"
                result.style.color = "#232020ff"
            }
        }
    }
}
