var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.forms["myForm"]["name"].value;
    var birthdate = document.forms["myForm"]["birthdate"].value;
    var textarea = document.forms["myForm"]["textarea"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    
    if (birthdate == "") {
        alert("Birthdate must be filled out");
        return false;
    }
    
    if (textarea == "") {
        alert("Textarea must be filled out");
        return false;
    }
    
    if (!gender) {
        alert("Please select a gender");
        return false;
    }

    var currentTime = new Date().toLocaleTimeString();

    document.getElementById("result-name").innerText = name;
    document.getElementById("result-birthdate").innerText = birthdate;
    document.getElementById("result-gender").innerText = gender.value;
    document.getElementById("result-textarea").innerText = textarea;
    document.getElementById("result-time").innerText = currentTime;
}

function replaceName() {
    let name = prompt("Siapakah nama anda", "");
    document.getElementById("name").innerHTML = name

    return false;
}
replaceName()
