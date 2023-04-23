
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle =document.querySelector(".loading");
const exitButton = document.getElementById("exit-chat");


exitButton.addEventListener("click", ()=> {
        
                    $(".contuiner").toggleClass("activez");
          

});

send.addEventListener("click", () => renderUserMessage())

txtInput.addEventListener("keyup", (event)=> {
          if(event.keyCode == 13 ){
                    renderUserMessage()
          }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value="";
  toggleLoading(false)
  setTimeout(() => {
          if (userInput === "bye"){
                    setTimeout(()=>document.querySelector(".contuiner").classList.add("activez"), 1250)
          }
          renderChatBotResponse(userInput)
          setScrollPosition();
          toggleLoading(true)
  }, 1200  
  );
};

const renderChatBotResponse = (userInput)=>{
          const res = getChatBotResponse(userInput);
          renderMessageEle(res)
};

const renderMessageEle = (txt, type) => {
          let className="user-message";
          
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.append(txtNode);
  if(type!=="user"){
          className = "chatbot-message";
          messageEle.classList.add(className);
          const botResponseContainer = document.createElement("div");
          botResponseContainer.classList.add("bot-response-container");
          const botImg = document.createElement("img");
          botImg.setAttribute('src', "./images/chatbot.png");
          botResponseContainer.append(botImg);
          botResponseContainer.append(messageEle);
          chatBody.append(botResponseContainer)
} else {
          messageEle.classList.add(className);
          chatBody.append(messageEle);
}
 
};
// renders the message to the screen

const getChatBotResponse = (userInput)=>{
          return responseObj[userInput]==undefined? "Please try something else" : responseObj[userInput]
}

const setScrollPosition = ()=> {
          if(chatBody.scrollHeight > 0) {
                    chatBody.scrollTop = chatBody.scrollHeight;
          }
};

const toggleLoading = (show) => loadingEle.classList.toggle("hide", show)

if ( res=== bye){
          $("#connect").on('click', ()=>{
                    $(".contuiner").toggleClass("activez");
          });

}