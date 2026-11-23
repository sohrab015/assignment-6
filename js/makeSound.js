function makeSound(word) {
  window.speechSynthesis.cancel();
  const pronounce = new SpeechSynthesisUtterance(word);
  pronounce.lang = "en-US";
  pronounce.rate = 0.8;
  window.speechSynthesis.speak(pronounce);
}