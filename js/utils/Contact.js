class Contact{ 
submitContact() {
  var strText = document.getElementById("textone").value;          
  var strText1 = document.getElementById("textTWO").value;
  var result = strText + ' ' + strText1;         
   document.getElementById("spanResult").textContent = result;

      
       
  }
}
module.exports=Contact