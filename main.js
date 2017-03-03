  var poptarts = 0;
  var poptartsd = poptarts + ' Poptarts';
  var toasters = 0;
  var pps = 0;
  var ppsd = pps + ' Poptarts Per Second';
  var toasterprice = 100;
  var toasterpricer = 100;
  var toasterpriced = '';
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
      if (poptarts >= toasterprice) {
      toasters += 1;
      poptarts -= toasterpricer;
      toasterprice += toasterprice*(0.05*toasters);
      toasterpricer = Math.round(toasterprice)
      toasterpriced = toasterpricer + ' Poptarts';
      document.getElementById("toasters").innerHTML = toasters;
      document.getElementById("poptarts").innerHTML = poptartsd;
      document.getElementById("toasterprice").innerHTML = toasterpriced;
}
}
