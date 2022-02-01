const colorPicker = document.getElementById("color-picker");
const addColorBtn = document.getElementById("add-color");
const colorList = document.getElementById("color-list");
const animateBtn = document.getElementById("animate");
const listItems= document.getElementsByClassName("list-item")
const body = document.getElementById("body");
const listText = document.getElementById("list-text");

 animateBtn.disabled=true

 

colorPicker.addEventListener("change", () => {
  body.style.backgroundColor = colorPicker.value;
});

addColorBtn.addEventListener("click", () => {
  listText.remove();

  const listItem = document.createElement("li");
  const spanPreviewBox = document.createElement("span");
  const spanColorCode = document.createElement("span");
  const deleteColorBtn = document.createElement("i");

  listItem.classList.add("list-item");
  spanPreviewBox.classList.add("preview-box");
  const listItemCount = document.getElementsByClassName("list-item").length;
  spanPreviewBox.classList.add(`preview-box-${listItemCount + 1}`);
  spanColorCode.classList.add("colorCode");
  deleteColorBtn.classList.add("fas", "fa-trash-alt", "delete-color");

  colorList.appendChild(listItem);
  listItem.appendChild(spanPreviewBox);
  listItem.appendChild(spanColorCode);
  listItem.appendChild(deleteColorBtn);

  spanColorCode.innerText = colorPicker.value;
  spanPreviewBox.style.backgroundColor = colorPicker.value;

  const deleteColorButtons = document.getElementsByClassName("delete-color");

  for (const deleteColorBtn of deleteColorButtons) {
    deleteColorBtn.addEventListener("click", () => {
      deleteColorBtn.parentElement.remove();
    });
  }

 if(listItems.length>=2){
animateBtn.disabled=false;
 }


});

const colorCodes = document.getElementsByClassName("colorCode");

let isPlaying = true;

animateBtn.addEventListener("click", () => {
  for (let i = 0; i < colorCodes.length; i++) {
    setTimeout(() => {
      body.style.backgroundColor = colorCodes[i].innerText;
    }, 1000 * i);
  }
});
