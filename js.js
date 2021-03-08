// defining var
let del = document.getElementById("del")
let submit = document.getElementById("submit")
shownotes()
// storing data of textarea in localStorage

submit.addEventListener("click", function () {
    let note = document.getElementById("textarea")
    let output = localStorage.getItem("output")
    if (output == null) {
        x = []
    } else {
        x = JSON.parse(output)
    }
    x.push(note.value)
    localStorage.setItem("output", JSON.stringify(x));
    note.value = ""
    shownotes()
})
function shownotes() {
    let output = localStorage.getItem("output")
    if (output == null) {
        x = [];
    } else {
        x = JSON.parse(output);
    }
    let html = "";
    x.forEach(function (element, index) {
        html += `
        <div class="col-sm-4 mt-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="remove(this.id)" class="btn btn-primary">Delete Note</button>

                </div>
            </div>
        </div>`;
    });
    let row = document.getElementById('row')
    if (x.length != 0) {
        row.innerHTML = html;
    } else {
        row.innerHTML = "<h3>Nothing to show. Sir, use add note to add something</h3>"
    }
}
function remove(index) {
    let output = localStorage.getItem("output")
    if (output == null) {
        x = []
    } else {
        x = JSON.parse(output)
    }
    x.splice(index, 1)
    localStorage.setItem("output", JSON.stringify(x));
    shownotes();
}
// making  search bar
let search = document.getElementById("SearchTxt")
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})