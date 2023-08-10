const addCatFact = () => {
  const newValue = valueAtEnd();
  addFact(newValue);
};

const valueAtEnd = () => {
  const catInfo = document.getElementById("catInfo").value;
  const catFact = document.getElementById("catFacts").value;
  const newValue = catInfo ? catInfo + "\n" + catFact : catFact;
  return newValue;
};

const saveCursorPosition = (textarea) => {
  const cursorPosition = textarea.selectionStart;
  textarea.dataset.cursorPosition = cursorPosition;
};

const valueAtCursor = (textarea) => {
  const cursorPosition = textarea.dataset.cursorPosition;
  console.log("cursorPosition", cursorPosition);
  const catInfo = textarea.value;
  const catFact = document.getElementById("catFacts").value;
  const newValue =
    catInfo.slice(0, cursorPosition) + catFact + catInfo.slice(cursorPosition);
  return newValue;
};

const addAtCursor = () => {
  const textarea = document.getElementById("catInfo");
  const newValue = valueAtCursor(textarea);
  addFact(newValue);
};

const addFact = (value) => {
  document.getElementById("catInfo").value = value;
};
