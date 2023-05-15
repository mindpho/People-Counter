let incrementBtn = document.getElementById("incrementButton")
let saveBtn = document.getElementById("saveButton")
let count = 0

function increment() {
    count += 1
    numberDisplay.textContent = count
}

function save() {
    let countSave = count + " - "
    preSave.textContent += countSave
    count = 0
    numberDisplay.textContent = 0
}
