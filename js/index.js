// Selects all elements
const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelector("#main-section");
//
const addContactButtonList = document.querySelectorAll(".addContactButton");
const arrowBack = document.getElementById("arrowBack");
//
const contactListContainer = document.getElementById("contactListContainer");
const emptyContactList = document.getElementById("emptyContactList");
const contactList = document.getElementById("contactList");
//
const contactFormContainer = document.getElementById("contactFormContainer");
const contactFirstName = document.getElementById("contactFirstName");
const contactName = document.getElementById("contactName");
const saveContact = document.getElementById("saveContact");

const contacts = [];

// Callback functions
const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

const hideElement = (element) => {
  handleRemoveStyle(element, "display-visible");
  handleAddStyle(element, "display-none");
};

const displayElement = (element) => {
  handleRemoveStyle(element, "display-none");
  handleAddStyle(element, "display-visible");
};

const goBackToContactList = () => {
  hideElement(contactFormContainer);
  displayElement(contactListContainer);

  if (contacts.length > 0) {
    hideElement(emptyContactList);
    displayElement(contactList);
  } else {
    hideElement(contactList);
    displayElement(emptyContactList);
  }
};

// Add events

burgerMenu.addEventListener("click", (event) => {
  if (sideBarMenu.classList.contains("display-none")) {
    handleRemoveStyle(sideBarMenu, "display-none");
    handleRemoveStyle(mainSection, "w-100");
  } else {
    handleAddStyle(sideBarMenu, "display-none");
    handleAddStyle(mainSection, "w-100");
  }
});

addContactButtonList.forEach((addContactButton) => {
  addContactButton.addEventListener("click", () => {
    hideElement(contactListContainer);
    displayElement(contactFormContainer);
  });
});

arrowBack.addEventListener("click", () => {
  goBackToContactList();
});

saveContact.addEventListener("click", (event) => {
  event.preventDefault();

  const contact = {
    contactFirstName: contactFirstName.value,
    contactName: contactName.value,
  };

  contacts.push(contact);

  contactFirstName.value = "";
  contactName.value = "";

  console.log(contacts);
  goBackToContactList();
});
