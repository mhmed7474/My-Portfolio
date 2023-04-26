const downloadPdf = document.getElementById("download-pdf");
const fileName = document.getAttribute("data-file");
downloadPdf.addEventListener("click", () => {
  window.location.href = fileName;
});
function scrolltop() {
  var x = window.document;
  x = location.href = "#home";
}
let contact = document.getElementById("contactform");
contact.addEventListener("click", function (e) {
  e.preventDefault();
  alert(`Sorry Request cannot be accepted due to some technical errors`);
});
