const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

//function to toggle links being show
//logic: if links are shown, remove the links class so they're hidden
//if links aren't shown, add links class so they are shown
//can also use toggle method
navToggle.addEventListener('click', function () {
  console.log(links)

  console.log()
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links')
  } else {
    links.classList.add('show-links')
  }
})
