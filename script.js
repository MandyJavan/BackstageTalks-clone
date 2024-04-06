let bookmarks = document.querySelectorAll(".bookmark");
let items = document.querySelectorAll(".issue");
let myBody = document.body;

for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener("click", () => {
    myBody.style.backgroundColor = bookmarks[i].getAttribute("data-color");
  });
}

window.addEventListener("scroll", () => {
    items.forEach(item => {
      let rect = item.getBoundingClientRect();
      console.log(rect)
      // let isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      let isVisible = (rect.top + (rect.top - (2/3))) < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        myBody.style.backgroundColor = item.getAttribute( "data-color" );
      }
    })
});

// console.log(window.innerWidth)