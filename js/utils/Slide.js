class Slide{
/* Set the width of the side navigation to 250px */

openNav() {
    var themeButton = document.querySelector('.openbtn')
    if(themeButton){
    themeButton.addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "250px";
         
      })
    }
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    var themeButton = document.querySelector('.closebtn')
    // if(themeButton){
    themeButton.addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "0";
         
      })  
    // }  
  }
 

}

  module.exports = Slide