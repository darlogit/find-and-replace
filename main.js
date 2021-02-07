
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")


const rowElements = document.querySelectorAll(".row")


function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}



replaceAllButton.addEventListener("click", function() {
    console.log(findInput.value);
    let search = replaceInput.value
    console.log(search)
    let name = findInput.value;
   
    console.log(name)

    for(let i = 0; i < rowElements.length; i ++){
        console.log(rowElements[i])

        let currentRowElement = getCellElements(rowElements[i])

        console.log(currentRowElement)

        for(let i = 0; i < currentRowElement.length; i++){
            console.log(currentRowElement[i].innerHTML)

            let name = findInput.value
            console.log(name.includes)

            let newName = findInput.innerHTML
            let result = newName.replace(name, newName)


        }
    }

})

    console.log("dalo")