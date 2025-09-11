const accordionConfig = [
  {
    id: 1,
    title: "Accordion One",
    content: `<h2>I am accordion one heading</h2> <p>I am accordion one para</p>`,
  },

  {
    id: 2,
    title: "Accordion Two",
    content: `<h2>I am accordion two heading</h2> <p>I am accordion two para</p>`,
  },

  {
    id: 3,
    title: "Accordion Three",
    content: `<h2>I am accordion three heading</h2> <p>I am accordion three para</p>`,
  },
];

const accordionContainer = document.querySelector(".accordion-container");
accordionConfig.forEach((item) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");
  accordionItem.setAttribute("data-id", item.id);
  accordionItem.setAttribute("aria-expanded", "false");

  const accordionButton = document.createElement("button");
  accordionButton.classList.add("accordion-button");
  accordionButton.textContent = item.title;
  accordionItem.appendChild(accordionButton);

  const accordionContent = document.createElement("div");
  accordionContent.classList.add("accordion-content");
  accordionContent.innerHTML = item.content;
  accordionItem.append(accordionContent);

  accordionContainer.appendChild(accordionItem);
});

let selectedId = String(accordionConfig[0].id);
openAccordion(selectedId);

accordionContainer.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    selectedId = e.target.parentNode.getAttribute("data-id");
    openAccordion(selectedId);
  }
});

function openAccordion(id) {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const accordionContent = item.querySelector(".accordion-content");
    if (item.getAttribute("data-id") === id) {
      if (item.getAttribute("aria-expanded") === "true") {
        item.setAttribute("aria-expanded", "false");
        accordionContent.style.display = "none";
      } else {
        item.setAttribute("aria-expanded", "true");
        accordionContent.style.display = "block";
      }
    } else {
      item.setAttribute("aria-expanded", "false");
      accordionContent.style.display = "none";
    }
  });
}
