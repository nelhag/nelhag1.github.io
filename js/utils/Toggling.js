class Toggling {

      toggleTheme() {
      
        const body = document.body
     const themeButton = document.querySelector('.theme-button')

        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark')
            // header.classList.toggle('light')
              })
 }
}
module.exports = Toggling