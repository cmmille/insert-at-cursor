# Add Items to Textarea at Cursor Position

This project demonstrates how to add items to a textarea at a cursor position using JavaScript.

The project includes a simple [demo web page](https://cmmille.github.io/insert-at-cursor/) with a textarea element and a button that allows the user to add items to the textarea at the current cursor position.

## CDN

```html
<script src=""></script>
```

## Usage

```js
const TextAreaTools = new TextAreaUtils.TextAreaSelectUtility(
  "catInfo",
  "catFacts"
);
```

- You can then add event listeners to buttons for: TextAreaTools.addAtCursor(), TextAreaTools.addAtEnd(), TextAreaTools.showPreview(), and TextAreaTools.hidePreview().
- See `example/index.html` for an example of how to use the library.

## Demo

Demo website: https://cmmille.github.io/insert-at-cursor/

- Type some text into the textarea.
- Move the cursor to the desired position in the textarea.
- Click the "Add at Cursor" button to add an item to the textarea at the current cursor position.
- You can also click the "Add Cat Fact" button to add an item to the end of the textarea.
