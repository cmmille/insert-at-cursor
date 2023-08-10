// ---------- VALUE GENERATION ----------
const valueAtEnd = () => {
  const catInfo = document.getElementById("catInfo").value;
  const catFact = document.getElementById("catFacts").value;
  const newValue = catInfo ? catInfo + "\n" + catFact : catFact;
  return newValue;
};

const valueAtCursor = (textarea) => {
  const cursorPosition = textarea.dataset.cursorPosition;
  const catInfo = textarea.value;
  const catFact = document.getElementById("catFacts").value;
  const newValue =
    catInfo.slice(0, cursorPosition) + catFact + catInfo.slice(cursorPosition);
  return newValue;
};

const valueForPreview = () => {
  const catFact = document.getElementById("catFacts").value || "";
  const textAddition = `<span class="preview-text">${catFact}</span>`;
  const textarea = document.getElementById("catInfo");
  const catInfo = textarea.value || "";
  const cursorPosition = parseInt(textarea.dataset.cursorPosition) || 0;
  const newValue =
    catInfo.slice(0, cursorPosition) +
    textAddition +
    catInfo.slice(cursorPosition);
  const replacedValue = newValue.replace(/\n/g, "<br>");
  return replacedValue;
};

// ---------- BUTTONS ----------
const addAtEnd = () => {
  const newValue = valueAtEnd();
  addFact(newValue);
};

const addAtCursor = () => {
  const textarea = document.getElementById("catInfo");
  const newValue = valueAtCursor(textarea);
  addFact(newValue);
};

// ---------- HELPERS ----------
const addFact = (value) => {
  document.getElementById("catInfo").value = value;
};

const saveCursorPosition = (textarea) => {
  const cursorPosition = textarea.selectionStart;
  textarea.dataset.cursorPosition = cursorPosition;
};

const showPreview = () => {
  const textarea = document.getElementById("catInfo");
  const previewValue = valueForPreview();
  console.log(previewValue);
  textarea.style.display = "none";
  const preview = document.getElementById("preview");
  preview.style.display = "block";
  preview.innerHTML = previewValue;
};

const hidePreview = () => {
  const textarea = document.getElementById("catInfo");
  textarea.style.display = "block";
  const preview = document.getElementById("preview");
  preview.style.display = "none";
};
