const accordionConfig = [
  {
    id: 1,
    title: "Accordion One",
    content: `<h1>I am accordion one heading</h1><p>I am accordion one para</p>`,
  },

  {
    id: 2,
    title: "Accordion Two",
    content: `<h1>I am accordion two heading</h1><p>I am accordion two para</p>`,
  },

  {
    id: 3,
    title: "Accordion Three",
    content: `<h1>I am accordion three heading</h1><p>I am accordion three para</p>`,
  },
];

const accordionContainer = document.querySelector(".accordion-container");
let selectedId = accordionConfig[0].id;

accordionConfig.forEach((item) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");
  accordionItem.setAttribute("data-id", item.id);

  const accordionHead = document.createElement("div");
  accordionHead.classList.add("accordion-head");
  accordionHead.textContent = item?.title;

  const accordionContent = document.createElement("div");
  accordionContent.classList.add("accordion-content");
  accordionContent.innerHTML = item.content;

  accordionItem.appendChild(accordionHead);
  accordionItem.appendChild(accordionContent);

  accordionContainer.appendChild(accordionItem);
});

toggleAccordion(selectedId);

accordionContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("accordion-head")) {
    selectedId = e.target.parentNode.getAttribute("data-id");
    toggleAccordion(selectedId);
  }
});

function toggleAccordion(id) {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const accordionContent = item.querySelector(".accordion-content");

    if (item.getAttribute("data-id") == id) {
      if (item.getAttribute("aria-expanded") === "true") {
        accordionContent.style.display = "none";
        item.setAttribute("aria-expanded", "false");
      } else {
        accordionContent.style.display = "block";
        item.setAttribute("aria-expanded", "true");
      }
    } else {
      accordionContent.style.display = "none";
      item.setAttribute("aria-expanded", "false");
    }
  });
}
