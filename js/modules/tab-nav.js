export default function initTavNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add("ativo");

    function activeTab(index) {
      tabConteudo.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabConteudo[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
