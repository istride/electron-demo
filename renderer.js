function sayHello() {
  const text = document.getElementById('renderer').innerText;
  document.getElementById('renderer').innerText = text + " Hi!";
}

document.getElementById('say-hello').addEventListener('click', sayHello);
