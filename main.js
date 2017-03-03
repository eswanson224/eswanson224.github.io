  var poptarts = 0;
  var poptartsd = poptarts + ' Poptarts';
  var toasters = 0;
  var farms = 0;
  var pps = 0;
  var ppsd = pps + ' Poptarts Per Second';
  var toasterpricer = 100;
  var toasterpriced = '';
  var farmpricer = 1000;
  var farmpriced = '';
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
      pps = (1*toasters)+(15*farms)
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
      if (poptarts >= toasterpricer) {
      toasters += 1;
      poptarts -= toasterpricer;
      toasterpricer = Math.round(toasterpricer*(0.05*toasters));
      toasterpriced = toasterpricer + ' Poptarts';
      document.getElementById("toasters").innerHTML = toasters;
      document.getElementById("poptarts").innerHTML = poptartsd;
      document.getElementById("toasterprice").innerHTML = toasterpriced;
}
    function Farm() {
      if (poptarts >= farmpricer) {
      farms += 1;
      poptarts -= farmpricer;
      farmpricer = Math.round(farmpricer*(0.05*farms));
      farmpriced = farmpricer + ' Poptarts';
      document.getElementById("farms").innerHTML = farms;
      document.getElementById("poptarts").innerHTML = poptartsd;
      document.getElementById("farmprice").innerHTML = farmpriced;
      }
