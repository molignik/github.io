function clock() {
  var time = new Date().toLocaleString();
  document.getElementById("idClock").innerText = time.replace(",", "г.");
}
setInterval(clock, 10);
