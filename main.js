  var poptarts = 0;
  var poptartsd = poptarts + ' Poptarts';
  var toasters = 0;
  var pps = 0;
  var ppsd = pps + ' Poptarts Per Second'
  function Click() {
      poptarts += 1;
      if (poptarts == 1) {
          poptartsd = poptarts + ' Poptart';
      }
      else {
          poptartsd = poptarts + ' Poptarts';
      }
      document.getElementById("poptarts").innerHTML = poptartsd;
}
  function Pps() {
      pps = toasters
      poptarts += pps;
      if (poptarts == 1) {
          poptartsd = poptarts + ' Poptart';
      }
      else {
          poptartsd = poptarts + ' Poptarts';
      }
      document.getElementById("poptarts").innerHTML = poptartsd;
       if (pps == 1) {
          ppsd = pps + ' Poptart Per Second';
      }
      else {
          ppsd = pps + ' Poptarts Per Second';
      }
      document.getElementById("pps").innerHTML = ppsd;
      setTimeout(Pps, 1000);
}
  function Toaster() {
      if (poptarts >= 100) {
      toasters += 1;
      poptarts -= 100;
      document.getElementById("toasters").innerHTML = toasters;
      document.getElementById("poptarts").innerHTML = poptartsd;
}
}