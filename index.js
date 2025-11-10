const accordionConfig = [
  {
    id: 1,
    title: "Accordion One",
    content: `
      <h1>I am Accordion One Heading</h1>
      <p>I am Accordion One Para</p>
    `,
  },

  {
    id: 2,
    title: "Accordion Two",
    content: `
      <h1>I am Accordion Two Heading</h1>
      <p>I am Accordion Two Para</p>
    `,
  },

  {
    id: 3,
    title: "Accordion Three",
    content: `
      <h1>I am Accordion Three Heading</h1>
      <p>I am Accordion Three Para</p>
    `,
  },
];

const accordionContainer = document.querySelector(".accordion-container");
let selectedItem = accordionConfig[0].id;

accordionConfig.forEach((item) => {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");
  accordionItem.setAttribute("aria-expanded", false);
  accordionItem.setAttribute("data-acc-id", item.id);

  const accordionBtn = document.createElement("button");
  accordionBtn.classList.add("accordion-btn");
  accordionBtn.innerText = item.title;

  const accordionContent = document.createElement("div");
  accordionContent.innerHTML = item.content;
  accordionContent.classList.add("accordion-content");

  accordionItem.appendChild(accordionBtn);
  accordionItem.appendChild(accordionContent);
  accordionContainer.appendChild(accordionItem);
});

accordionContainer.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    selectedItem = event.target.parentNode.getAttribute("data-acc-id");
    console.log(selectedItem);
    activeAccordion(selectedItem);
  }
});

function activeAccordion(id) {
  const accordionContents = document.querySelectorAll(".accordion-content");
  accordionContents.forEach((item) => {
    if (item.parentNode.getAttribute("data-acc-id") === id) {
      if (item.parentNode.getAttribute("aria-expanded") === "true") {
        item.parentNode.setAttribute("aria-expanded", false);
        item.style.display = "none";
      } else {
        item.parentNode.setAttribute("aria-expanded", true);
        item.style.display = "block";
      }
    } else {
      item.style.display = "none";
      item.parentNode.setAttribute("aria-expanded", false);
    }
  });
}

activeAccordion(String(selectedItem));
