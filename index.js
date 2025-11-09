const tabConfig = [
  {
    id: 1,
    title: "Tab 1",
    content: `
      <h1>Tab One Heading</h1>
      <p>Tab One Paragraph</p>
    `,
  },

  {
    id: 2,
    title: "Tab 2",
    content: `
      <h1>Tab Two Heading</h1>
      <p>Tab Two Paragraph</p>
    `,
  },

  {
    id: 3,
    title: "Tab 3",
    content: `
      <h1>Tab Three Heading</h1>
      <p>Tab Three Paragraph</p>
    `,
  },
];

let selectedTabId = tabConfig[0].id;

const tabContainer = document.querySelector(".tab-container");
const tabHead = document.querySelector(".tab-head");
const tabBody = document.querySelector(".tab-body");

tabConfig.forEach((item) => {
  const tabBtn = document.createElement("button");
  tabBtn.setAttribute("data-tab-id", item.id);
  tabBtn.classList.add("tab-btn");
  tabBtn.innerText = item.title;

  const tabContent = document.createElement("div");
  tabContent.innerHTML = item.content;
  tabContent.setAttribute("data-tab-id", item.id);
  tabContent.classList.add("tab-content");

  tabHead.appendChild(tabBtn);
  tabBody.appendChild(tabContent);
});

tabContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    selectedTabId = event.target.getAttribute("data-tab-id");
    activeTab(selectedTabId);
  }
});

function activeTab(id) {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    if (btn.getAttribute("data-tab-id") === id) {
      btn.classList.add("active-btn");
    } else {
      btn.classList.remove("active-btn");
    }
  });

  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    if (content.getAttribute("data-tab-id") === id) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

activeTab(String(selectedTabId));
