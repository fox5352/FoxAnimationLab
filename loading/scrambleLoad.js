


/**
 * Scrambles the innerHTML of the elements that match the given selector.
 * @param {string} selector - A CSS selector that matches the elements to be scrambled.
 * @param {number} [delay=0] - The delay (in milliseconds) between each iteration.
 * @param {number} [iterationSpeed=10] - The speed (in milliseconds) at which each iteration occurs.
 * @param {string} [letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"] - The set of letters to use for scrambling.
 */
export default function scrambleLoad(selector, 
  delay = 0, 
  iterationSpeed = 10, 
  letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  ) {
  const tags = document.querySelectorAll(selector);

  tags.forEach((tag) => {
    tag.dataset.text = tag.innerHTML;

    setTimeout(() => {
      let iterCount = 0;
      // loop in an interval
      const interval = setInterval(() => {
        let string = tag.innerHTML.split("");

        // replace each letter with a random letter
        let newStr = string.map((letter, index) => {
          if (index < iterCount) {
            return tag.dataset.text[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        }).join("");

        // set the new string to the current string
        tag.innerHTML = newStr;

        if (iterCount >= tag.dataset.text.length) {
          clearInterval(interval);
        }

        iterCount++;
      }, iterationSpeed);
    }, delay);
  });
}