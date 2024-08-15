
export const hackedTextAnimate = (element) => {
    const letters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ" //set of your letters
    let interval = null;

    let iteration = 0
    const originalText = element.innerText;

    clearInterval(interval)

    interval = setInterval(() => {
        element.innerText = element.innerText.split("").map((letter, index) => {
            if(index < iteration) {
                return originalText[index];
            }

            return letters[Math.floor(Math.random() * letters.length)]
        }).join("");

        if(iteration >= originalText.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30)
}
