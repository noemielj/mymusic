document.querySelector("#fetch-btn").addEventListener('click', function () {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        const questionElement = document.querySelector("#result-question");
        const punchlineElement = document.querySelector("#result-punchline");
  
        questionElement.textContent = data.value;  
        punchlineElement.textContent = data.value;  
      });
  });