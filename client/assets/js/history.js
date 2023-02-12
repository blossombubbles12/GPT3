
  // Get the original chat log
  const chatHistory = document.getElementById('chat-history');
  
  // Create a variable for our collapsible element 
  let collapsible = document.getElementsByClassName('collapsible');
  
  // Loop through each collapsible element to make it collapsible
  for (let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener('click', function () {
      this.classList.toggle('active');
  
      let collapsibleBody = this.nextElementSibling;
      if (collapsibleBody.style.display === 'block') {
        collapsibleBody.style.display = 'none';
      } else {
        collapsibleBody.style.display = 'block';
      }
    });
  }
  
  // Clear the chat history if user clicks the clear button
  document.getElementById('clear-history-btn').addEventListener('click', function(){
    chatHistory.innerHTML = '';`
  });
