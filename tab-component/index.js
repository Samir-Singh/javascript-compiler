const tabConfig = [
  {
    id: 1,
    title: "Tab 1",
    content: `
        <h1>Tab Content One Heading</h1>
        <p>Tab Content One Paragraph</p>
    `,
  },

  {
    id: 2,
    title: "Tab 2",
    content: `
        <h1>Tab Content Two Heading</h1>
        <p>Tab Content Two Paragraph</p>
    `,
  },

  {
    id: 3,
    title: "Tab 3",
    content: `
        <h1>Tab Content Three Heading</h1>
        <p>Tab Content Three Paragraph</p>
    `,
  },

  // We can add more tabs here
];

let selectedTabId = tabConfig[0].id;
const tabContainer = document.querySelector(".tab-container");
const tabHead = document.querySelector(".tab-head");
const tabBody = document.querySelector(".tab-body");

tabConfig.forEach((tab) => {
  const tabButton = document.createElement("button");
  tabButton.innerText = tab.title;
  tabButton.className = "tab-button";
  tabButton.setAttribute("data-tab-id", tab.id);
  tabHead.appendChild(tabButton);

  const tabContent = document.createElement("div");
  tabContent.innerHTML = tab.content;
  tabContent.className = "tab-content";
  tabContent.setAttribute("data-tab-id", tab.id);
  tabBody.appendChild(tabContent);
});

tabContainer.addEventListener("click", function (event) {
  if (event.target.className === "tab-button") {
    selectedTabId = event.target.getAttribute("data-tab-id");
    activeTab(selectedTabId);
  }
});

function activeTab(id) {
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    if (button.getAttribute("data-tab-id") === id) {
      button.classList.add("active-button");
    } else {
      button.classList.remove("active-button");
    }
  });

  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    if (content.getAttribute("data-tab-id") === id) {
      content.classList.add("active-tab");
    } else {
      content.classList.remove("active-tab");
    }
  });
}

activeTab(String(selectedTabId));
