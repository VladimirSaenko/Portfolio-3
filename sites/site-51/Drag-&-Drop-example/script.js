
"use strict";

const dropArea = document.querySelector('.drag-area');
//const dragText = document.querySelector('.drag-area header');
const dragText = dropArea.querySelector('header');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('input');

let file;

button.onclick = () => {
    input.click();
}

input.addEventListener("change", handleFiles);
function handleFiles() {
  file = this.files[0];
    dropArea.classList.add("active");
  showFile(); 
}

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragText.textContent = "Drop to Upload File";
    dropArea.classList.add('active');
})

dropArea.addEventListener('dragleave', (e) => {
    dragText.textContent = "Drag & Drop to Upload File";
    dropArea.classList.remove('active');
})

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    //console.log(e.dataTransfer.files[0]);
    file = e.dataTransfer.files[0];
    showFile();
})

function showFile() {
    let fileType = file.type;
    let validation = ["image/jpeg", "image/jpg", "image/png"];
    if (validation.includes(fileType)) {
        let fileReader = new FileReader();
        console.log('i`m working!');    
        fileReader.onload = () => {
            let fileUrl = fileReader.result;
            let imgTag = `<img src="${fileUrl}" alt="user-image">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    }
    else 
    {
        alert('This is not an Image File!');
        dropArea.classList.remove('active');
        dragText.textContent = "Drag & Drop to Upload File";
    }
}