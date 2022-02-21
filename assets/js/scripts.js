var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('hide.bs.tab', function (event) {

  event.target.style.border = "0px"; // newly activated tab
  event.relatedTarget.style.border = "0px"; // previous active tab

})