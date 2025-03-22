let myLibrary = []

function render(){
    let libraryEl = document.querySelector('#library')
    libraryEl.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]

       let bookEl = document.createElement('div')
       bookEl.setAttribute('class', 'book-card')
       bookEl.innerHTML = `
       <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        `
       libraryEl.appendChild(bookEl)
    }
    
   
    }


function Book(title, author , pages, read){
    
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

function removeBook(index){
    myLibrary.splice(index, 1)
    render()
}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function toggleRead(index){
    myLibrary[index].toggleRead()
    render()
}

function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    let newBook = new Book(title, author, pages,read);
    myLibrary.push(newBook);
    render();
}

let newBookBtn = document.querySelector('#new-book-btn')


newBookBtn.addEventListener('click',() => {
    let showForm = document.querySelector('#new-book-form')
    showForm.style.display = 'flex';
})

document.querySelector('#new-book-form').addEventListener('submit', (event) => {
    event.preventDefault()
    addBookToLibrary()
    let showForm = document.querySelector('#new-book-form')
    showForm.style.display = 'none';
})



console.log(myLibrary)

