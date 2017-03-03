  var poptarts = 0;
  var poptartsd = poptarts + ' Poptarts';
  var toasters = 0;
  var microwaves = 0;
  var pps = 0;
  var ppsd = pps + ' Poptarts Per Second';
  var toasterpricer = 100;
  var toasterpriced = '';
  var microwavepricer = 1000;
  var microwavepriced = '';
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
      pps = toasters+(15*microwaves);
      poptarts += toasters+(15*microwaves);
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
  }
    function Microwave() {
      if (poptarts >= microwavepricer) {
      microwaves += 1;
      poptarts -= microwavepricer;
      microwavepricer = Math.round(microwavepricer*(0.05*microwaves));
      microwavepriced = microwavepricer + ' Poptarts';
      document.getElementById("microwaves").innerHTML = microwaves;
      document.getElementById("poptarts").innerHTML = poptartsd;
      document.getElementById("microwaveprice").innerHTML = microwavepriced;
      }
    }
