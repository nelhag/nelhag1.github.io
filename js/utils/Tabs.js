class Tabs{
    openProject(evt,projectName ) {
        var i;
    const   tabcontent = document.querySelector('.tabcontent')
    tabcontent.addEventListener('click', () => {
     for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    })
    const   tablinks = document.querySelector('.tablinks')
     tablinks.addEventListener('click', () => {
      
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
     })
    
     document.getElementById(projectName).style.display = "block";
     evt.currentTarget.className += " active";
    
  }
}

module.exports = Tabs