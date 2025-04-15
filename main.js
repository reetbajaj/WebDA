document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const wordCounter = document.getElementById("word-counter");
  

    messageInput.addEventListener("input", function () {
      const wordCount = countWords(messageInput.value);
      wordCounter.textContent = `Words: ${wordCount}`;
    });
  
    /
    function countWords(str) {
      
      const words = str.trim().split(/\s+/);
      
      return words[0] === "" ? 0 : words.length;
    }
  
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const status = document.getElementById("formStatus");
  
      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
      } else {
        status.textContent = "Thank you for your message!";
        status.style.color = "green";
        document.getElementById("contact-form").reset();
        wordCounter.textContent = "Words: 0"; // Reset word count after submission
      }
    });
  });
  
