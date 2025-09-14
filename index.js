const tabConfig = [
  {
    id: 1,
    title: "Tab 1",
    content: "<h1>Tab One Heading</h1> <p>Tab one paragraph</p>",
  },
  {
    id: 2,
    title: "Tab 2",
    content: "<h1>Tab Two Heading</h1> <p>Tab two paragraph</p>",
  },
  {
    id: 3,
    title: "Tab 3",
    content: "<h1>Tab Three Heading</h1> <p>Tab three paragraph</p>",
  },
];

const tabContainer = document.querySelector(".tab-container");
const tabHead = document.querySelector(".tab-head");
const tabBody = document.querySelector(".tab-body");

let activeId = String(tabConfig[0].id);

tabConfig.forEach((item) => {
  const tabButton = document.createElement("button");
  tabButton.innerText = item.title;
  tabButton.setAttribute("data-id", item.id);
  tabButton.classList.add("tab-button");

  tabHead.appendChild(tabButton);

  const tabContent = document.createElement("div");
  tabContent.setAttribute("data-id", item.id);
  tabContent.classList.add("tab-content");
  tabContent.innerHTML = item.content;

  tabBody.append(tabContent);
});

activeTab(activeId);

tabContainer.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    activeId = e.target.getAttribute("data-id");
    activeTab(activeId);
  }
});

function activeTab(id) {
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((item) => {
    if (item.getAttribute("data-id") === id) {
      //button active
      item.classList.add("active-button");
    } else {
      // button not active
      item.classList.remove("active-button");
    }
  });

  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((item) => {
    if (item.getAttribute("data-id") === id) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
