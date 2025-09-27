const tabData = [
  {
    id: 1,
    name: "Tab-1",
    content: `<h1>Tab One</h1> <p>Hello I am Tab One</p>`,
  },
  {
    id: 2,
    name: "Tab-2",
    content: `<h1>Tab Two</h1> <p>Hello I am Tab Two</p>`,
  },
  {
    id: 3,
    name: "Tab-3",
    content: `<h1>Tab Three</h1> <p>Hello I am Tab Three</p>`,
  },
  {
    id: 4,
    name: "Tab-4",
    content: `<h1>Tab Four</h1> <p>Hello I am Tab Four</p>`,
  },
];

const selectedTabId = tabData[0].id;

const tabContainer = document.querySelector(".tab-container");
const tabBtnContainer = document.querySelector(".tab-btn-container");
const tabContentContainer = document.querySelector(".tab-content-container");

tabData.forEach((item) => {
  // For tab buttons
  const tabBtn = document.createElement("button");
  tabBtn.classList.add("tab-btn");
  tabBtn.innerText = item.name;
  tabBtn.setAttribute("btn-id", item.id);

  tabBtnContainer.appendChild(tabBtn);

  // For tab contents
  const tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");
  tabContent.innerHTML = `<div>${item.content}</div>`;
  tabContent.setAttribute("content-id", item.id);

  tabContentContainer.appendChild(tabContent);
});

activeTab(selectedTabId);

tabBtnContainer.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    activeTab(Number(e.target.getAttribute("btn-id")));
  }
});

function activeTab(tab_id) {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((item) => {
    if (Number(item.getAttribute("btn-id")) === tab_id) {
      item.classList.add("active-btn");
    } else {
      item.classList.remove("active-btn");
    }
  });

  tabContents.forEach((item) => {
    if (Number(item.getAttribute("content-id")) === tab_id) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
