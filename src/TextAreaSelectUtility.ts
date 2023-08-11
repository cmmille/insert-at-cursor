class TextAreaSelectUtility {
  private textarea: HTMLTextAreaElement;
  private select: HTMLSelectElement;
  private preview: HTMLDivElement;

  constructor(textareaId: string, selectId: string) {
    this.textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    this.select = document.getElementById(selectId) as HTMLSelectElement;
    this.preview = document.createElement("div");
    this.preview.id = "preview";
    this.preview.classList.add("form-control");
    this.preview.style.display = "none";
    this.preview.innerHTML = '<span class="preview-text"></span>';
    this.textarea.parentNode?.insertBefore(
      this.preview,
      this.textarea.nextSibling
    );
    this.textarea.addEventListener("scroll", () => this.setScrollPosition());
    this.textarea.addEventListener("input", () => this.setCursorPosition());
  }

  private valueAtEnd(): string {
    const catInfo = this.textarea.value;
    const catFact = this.select.value;
    const newValue = catInfo ? catInfo + "\n" + catFact : catFact;
    return newValue;
  }

  private valueAtCursor(): string {
    const cursorPosition = this.getCurrentCursorPosition();
    const catInfo = this.textarea.value;
    const catFact = this.select.value;
    const newValue =
      catInfo.slice(0, cursorPosition) +
      catFact +
      catInfo.slice(cursorPosition);
    return newValue;
  }

  private valueForPreview(): string {
    const catFact = this.select.value || "";
    const textAddition = `<span class="preview-text">${catFact}</span>`;

    const catInfo = this.textarea.value || "";
    const cursorPosition = parseInt(this.textarea.dataset.cursorPosition || "");

    const newValue =
      catInfo.slice(0, cursorPosition) +
      textAddition +
      catInfo.slice(cursorPosition);
    const replacedValue = newValue.replace(/\n/g, "<br>");
    return replacedValue;
  }

  public addAtEnd(): void {
    const newValue = this.valueAtEnd();
    this.addFact(newValue);
  }

  public addAtCursor(): void {
    const newValue = this.valueAtCursor();
    this.addFact(newValue);
  }

  private addFact(value: string): void {
    this.textarea.value = value;
  }

  private setCursorPosition(): void {
    const cursorPosition = this.textarea.selectionStart;
    this.textarea.dataset.cursorPosition = cursorPosition.toString();
  }

  private getCurrentCursorPosition(): number {
    const cursorPosition = parseInt(this.textarea.dataset.cursorPosition || "");
    return cursorPosition;
  }

  private setScrollPosition(): void {
    const scrollPosition = this.textarea.scrollTop;
    this.textarea.dataset.scrollPosition = scrollPosition.toString();
  }

  private getScrollPosition(): number {
    const scrollPosition = parseInt(this.textarea.dataset.scrollPosition || "");
    return scrollPosition;
  }

  public showPreview(): void {
    this.setCursorPosition();
    const previewValue = this.valueForPreview();
    this.textarea.style.display = "none";
    this.preview.innerHTML = previewValue;
    this.preview.style.display = "block";
    const scrollPosition = this.getScrollPosition();
    this.preview.scrollTop = scrollPosition;
  }

  public hidePreview(): void {
    this.textarea.style.display = "block";
    this.preview.style.display = "none";
  }
}

export default TextAreaSelectUtility;
