const books = [
  { title: "Atomic Habits", image: "images/atomic_habits.jpg" },
  { title: "Ice Breaker", image: "images/ice_breaker.jpg" },
  { title: "It Ends With Us", image: "images/it_ends_with_us.jpg" },
  { title: "It Starts With Us", image: "images/it_starts_with_us.jpg" },
  { title: "Philosopher's Stone", image: "images/philosophers_stone.jpg" },
  { title: "Sunrise On The Reaping", image: "images/sunrise_on_the_reaping.jpg" },
  { title: "The Hobbit", image: "images/the_hobbit.jpg" },
  { title: "The Housemaid", image: "images/the_housemaid.jpg" },
  { title: "The Let Them Theory", image: "images/the_let_them_theory.png" },
  { title: "The Nightingale", image: "images/the_nightingale.jpg" }
];

let currentBookIndex = 0;

function loadBook() {
  const book = books[currentBookIndex];
  document.getElementById("book-cover").src = book.image;
  document.getElementById("guess-input").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkGuess() {
  const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
  const correctTitle = books[currentBookIndex].title.trim().toLowerCase();

  if (userGuess === correctTitle) {
    document.getElementById("feedback").textContent = "🎉 Correctly!";
    currentBookIndex++;

    if (currentBookIndex < books.length) {
      setTimeout(loadBook, 1500);
    } else {
      document.getElementById("feedback").textContent = "🏆 You guessed all the books!";
      document.getElementById("book-cover").style.filter = "none";
    }
  } else {
    document.getElementById("feedback").textContent = "❌ Try again.";
  }
}

loadBook();
