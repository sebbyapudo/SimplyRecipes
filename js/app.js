// GetElement function double checks the classname of a selector and throws an exception if there ins't a match

const getElement = (selector) =>{
  const element = document.querySelector(selector);
  if(element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
});

// Setting the date and year dynamically
const date = getElement('#date');
const currentYear = new Date().getFullYear()
date.textContent = currentYear;