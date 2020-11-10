var text = document.body.querySelector(".texttime")

document.body.querySelector(".for").addEventListener("click", function () {
 text.style.color = "red";
 text.innerHTML = "Vulcan is not responsible for any injury, death, extreme sickness, or subsequint ass kickings that may be the result of purchasing our computers."
 myFunction()
});

function myFunction() {
var x = document.body.querySelector(".texttime");
if (x.style.display === "none") {
x.style.display = "block";
}else{
x.style.display = "none";
}
}