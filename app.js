// Without Local Storage
const inputAreaWithoutLocalStorage = document.querySelector(
  ".input-area-without-local-storage"
);

const inputTextValueWithoutLocalStorage = document.querySelector(
  ".input-text-value-without-local-storage"
);

inputAreaWithoutLocalStorage.addEventListener(
  "keyup",
  displayWithoutLocalStorage
);

function displayWithoutLocalStorage() {
  inputTextValueWithoutLocalStorage.innerHTML =
    inputAreaWithoutLocalStorage.value;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// With Local Storage
const inputAreaWithLocalStorage = document.querySelector(
  ".input-area-with-local-storage"
);

const inputTextValueWithLocalStorage = document.querySelector(
  ".input-text-value-with-local-storage"
);

/* This for show last data after refresh */
inputTextValueWithLocalStorage.innerHTML =
  localStorage.getItem("valueOfTextInput");

inputAreaWithLocalStorage.addEventListener("keyup", displayWithLocalStorage);

function displayWithLocalStorage() {
  localStorage.setItem("valueOfTextInput", inputAreaWithLocalStorage.value);
  /* This is For Test */
  console.log(localStorage.getItem("valueOfTextInput"));
  inputTextValueWithLocalStorage.innerHTML =
    localStorage.getItem("valueOfTextInput");
}

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Clear Local Storage
const clearLocalStorage = document.querySelector(".remove-local-storage");
// const inputTextValueWithLocalStorage = document.querySelector(
//   ".input-text-value-with-local-storage"
// );

clearLocalStorage.addEventListener("click", removeLocalStorage);

function removeLocalStorage() {
  localStorage.clear();
  inputTextValueWithLocalStorage.innerHTML = "";
}
