document.getElementById("newGame").addEventListener("click", async () => {
  const response = await fetch("/game/new");
  if (!response.ok) {
    throw new Error(" Failed to fetch new game");
  }

  const data = await response.json();
  const word = data.word;

  const gameWord = document.getElementById("game-word");
  gameWord.innerHTML = "";

  const letterRow = "letter-row";
  const letterRows = 6;

  // Create letter rows
  for (let i = 0; i < letterRows; i++) {
    const row = document.createElement("div");
    row.classList.add(letterRowClass);

    // Create cells for each letter in the word
    for (let j = 0; j < word.length; j++) {
      const cell = document.createElement("div");
      row.appendChild(cell);
    }
    gameBoard.appendChild(row);
  }
});

document.addEventListener("keyup", (event) => {
  // Vérifiez si la touche relâchée est une lettre de l'alphabet
  if (event.key.match(/^[a-zA-Z]$/)) {
    // Récupérez la lettre relâchée
    const letter = event.key.toUpperCase();

    // Sélectionnez la première case de lettre vide dans le tableau de jeu
    const letterBox = document.querySelector(
      ".letter-row:not(.filled-row) .letter-box:not(.filled-box)"
    );

    // Si une case de lettre vide est trouvée, mettez à jour son contenu et sa classe
    if (letterBox) {
      letterBox.textContent = letter;
      letterBox.classList.add("filled-box");

      // Vérifiez si toutes les cases de la rangée actuelle sont remplies, si c'est le cas, ajoutez la classe "filled-row"
      if (
        !document.querySelector(
          ".letter-row:not(.filled-row) .letter-box:not(.filled-box)"
        )
      ) {
        letterBox.parentElement.classList.add("filled-row");
      }
    }
  }
});

document.addEventListener("keydown", (event) => {
  // Vérifiez si la touche pressée est la touche "Entrée"
  if (event.key === "Enter") {
    // Récupérez toutes les lettres renseignées dans le tableau de jeu
    const filledBoxes = document.querySelectorAll(".letter-box.filled-box");
    const enteredLetters = Array.from(filledBoxes)
      .map((box) => box.textContent)
      .join("");

    // Récupérez le mot cible
    const targetWord = document.querySelector("#game-board").dataset.word;

    // Vérifiez si le nombre de lettres est suffisant
    if (enteredLetters.length !== targetWord.length) {
      document.querySelector("#result").textContent = "Not enough letters!";
      return;
    }

    // Évaluez chaque lettre
    for (let i = 0; i < enteredLetters.length; i++) {
      const enteredLetter = enteredLetters[i];
      const targetLetter = targetWord[i];
      const box = filledBoxes[i];

      // Vérifiez si la lettre est à la bonne position
      if (enteredLetter === targetLetter) {
        box.style.backgroundColor = "green";
      } else if (targetWord.includes(enteredLetter)) {
        // Vérifiez si la lettre est dans le mot mais à la mauvaise position
        box.style.backgroundColor = "yellow";
      } else {
        // La lettre n'est pas dans le mot
        box.style.backgroundColor = "gray";
      }
    }
  }
});

document.addEventListener("keydown", (event) => {
  // Vérifiez si la touche pressée est la touche "Entrée"
  if (event.key === "Enter") {
    // Récupérez toutes les lettres renseignées dans le tableau de jeu
    const filledBoxes = document.querySelectorAll(".letter-box.filled-box");
    const enteredLetters = Array.from(filledBoxes)
      .map((box) => box.textContent)
      .join("");

    // Récupérez le mot cible
    const targetWord = document.querySelector("#game-board").dataset.word;

    // Vérifiez si le nombre de lettres est suffisant
    if (enteredLetters.length !== targetWord.length) {
      document.querySelector("#result").textContent = "Not enough letters!";
      return;
    }

    // Évaluez chaque lettre
    for (let i = 0; i < enteredLetters.length; i++) {
      const enteredLetter = enteredLetters[i];
      const targetLetter = targetWord[i];
      const box = filledBoxes[i];

      // Vérifiez si la lettre est à la bonne position
      if (enteredLetter === targetLetter) {
        box.style.backgroundColor = "green";
      } else if (targetWord.includes(enteredLetter)) {
        // Vérifiez si la lettre est dans le mot mais à la mauvaise position
        box.style.backgroundColor = "yellow";
      } else {
        // La lettre n'est pas dans le mot
        box.style.backgroundColor = "gray";
      }
    }

    // Mettre à jour le résultat en fonction du mot entré par le joueur
    if (enteredLetters === targetWord) {
      document.querySelector("#result").textContent = "YOU WON!";
    } else {
      // Mettez à jour le nombre de tentatives du joueur (le nombre de rangées remplies)
      const filledRows = document.querySelectorAll(
        ".letter-row.filled-row"
      ).length;
      const maxAttempts = 6;
      if (filledRows >= maxAttempts) {
        document.querySelector("#result").textContent = "GAME OVER";
      }
    }
  }
});
