let inputBox = document.querySelector("#inputBox");
let userMessage = document.querySelector(".me");
let allMessage = document.querySelector("#message-el");
const outputEL = document.querySelector(".text")
let inputValue = '';
inputBox.addEventListener("keyup", () => {
    if (event.keyCode === 13) {
        myMessage()
        chatGpt()
    }
})

function myMessage() {
    // let inputText = inputBox.vasendlue;
    // userMessage.innerText = inputText;
    if (inputBox.value === '') {
        // alert("you must write something!")
    } else {
        let div = document.createElement("div")
        // div.style.marginBottom = '8px';
        div.setAttribute("class", "me")
        let p = document.createElement("p")
        p.setAttribute("class", "text")
        p.innerHTML = inputBox.value
        div.appendChild(p)
        // div.innerHTML = inputBox.value
        allMessage.appendChild(div);

    }
    inputValue = inputBox.value
    inputBox.value = ''
}
myMessage();


const apiKey = "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"

const submit = document.querySelector("#send")


async function chatGpt() {
    console.log('clicked')
    console.log(document.querySelector("#inputBox").value)
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputValue}],
            max_tokens: 100
          })

        
    }
    
    
    try {
       const response = await fetch('https://api.openai.com/v1/chat/completions',options)
        const data = await response.json()
        console.log(data)
        let div = document.createElement("div")
        div.setAttribute("class", "ai")
        let p = document.createElement("p")
        p.setAttribute("class", "text-two")
        p.textContent = data.choices[0].message.content
        div.appendChild(p)
        allMessage.appendChild(div);
   
} catch (error){
    console.error(error)
}

}


submit.addEventListener('click', chatGpt)

