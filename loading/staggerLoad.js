/**
 * Staggers the loading of characters into a DOM element
 * @param {string} selector - The CSS selector for the element to be loaded
 * @param {number} [duration=250] - The duration of the animation, in milliseconds
 */
function staggerLoad(selector, duration = 250) {
  // get data
  const tag = document.querySelector(selector);
  tag.style.transition = "all 250ms ease-in-out 1s";

  const text = tag.dataset.text;

  // clear
  tag.innerHTML = "";
  // append
  for (let index = 0; index < text.length; index++) {
    tag.appendChild(wrapChar(text[index], index, duration));
  }
}

/**
 * Wraps a single character in a DOM element for animation
 * @param {string} char - The character to be wrapped
 * @param {number} index - The index of the character in the original string
 * @param {number} duration - The duration of the animation, in milliseconds
 * @returns {HTMLElement} The wrapped character
 */
function wrapChar(char, index, duration) {
  const div = document.createElement("span");
  div.innerHTML = char;

  div.style.opacity = 0;

  // Animate characters with delay
  setTimeout(() => {
    div.style.transition = "opacity 0.5s, transform 0.5s";
    div.style.opacity = 1;
  }, index * duration); // Adjust delay as needed

  return div;
}

export default staggerLoad;