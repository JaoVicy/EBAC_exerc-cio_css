document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".article__button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const articleBlock = this.closest(".article__block");
            if (articleBlock.classList.contains("expanded")) {
                articleBlock.classList.remove("expanded");
                this.textContent = "Ver mais";
            } else {
                articleBlock.classList.add("expanded");
                this.textContent = "Ver menos";
            }
        });
    });
});