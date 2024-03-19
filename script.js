let bookmarks = document.querySelectorAll(".bookmark")
let items = document.querySelectorAll("issue")
let myBody = document.body

for (let i = 0; i < bookmarks.length; i++) {
    bookmarks[i].addEventListener("click", () => {
        myBody.style.backgroundColor = bookmarks[i].getAttribute("data-color")
    })
}

