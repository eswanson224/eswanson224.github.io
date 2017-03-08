  var poptarts = 0;
  var poptartsd = poptarts + ' Poptarts';
  var toasters = 0;
  var microwaves = 0;
  var pps = 0;
  var ppsd = pps + ' Poptarts Per Second';
  var poptartss = '';
  var toasterss = '';
  var microwavess = '';
  var toasterpricer = Math.round(100*Math.pow(1.05, toasters));
  var toasterpriced = '';
  var microwavepricer = Math.round(1000*Math.pow(1.05, microwaves));
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
      pps = toasters+15*microwaves;
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
  function Save() {
    localStorage.setItem("poptarts", poptarts);
    localStorage.setItem("toasters", toasters);
    localStorage.setItem("microwaves", microwaves);
}
  function Load() {
    poptartss = localStorage.getItem("poptarts");
    toasterss = localStorage.getItem("toasters");
    microwavess = localStorage.getItem("microwaves");
    poptarts = Number(poptartss);
    toasters = Number(toasterss);
    microwaves = Number(microwavess);
    Pps();
    document.getElementById("toasters").innerHTML = toasters;
    document.getElementById("microwaves").innerHTML = microwaves;
    setTimeout(Save, 30000);
}
  function Toaster() {
      if (poptarts >= toasterpricer) {
      toasters += 1;
      poptarts -= toasterpricer;
      toasterpricer += Math.round(100*Math.pow(1.05, toasters));
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
      microwavepricer += Math.round(1000*Math.pow(1.05, microwaves));
      microwavepriced = microwavepricer + ' Poptarts';
      document.getElementById("microwaves").innerHTML = microwaves;
      document.getElementById("poptarts").innerHTML = poptartsd;
      document.getElementById("microwaveprice").innerHTML = microwavepriced;
      }
    }
