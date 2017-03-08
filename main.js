var poptarts = 0;
var poptartsd = poptarts + ' Poptarts';
var toasters = 0;
var toastersd = toasters + ' Toasters';
var microwaves = 0;
var microwavesd = microwaves + ' Microwaves';
var toasterpricer = Math.round(100*Math.pow(1.15, toasters));
var toasterpriced = toasterpricer + ' Poptarts';
var microwavepricer = Math.round(1000*Math.pow(1.15, microwaves));
var microwavepriced = microwavepricer + ' Poptarts';
var pps = 0;
var ppsd = pps + ' Poptarts Per Second';
var poptartss = '';
var toasterss = '';
var microwavess = '';
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
function Clear() {
  localStorage.clear();
  location.reload();
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
  toasterpricer = Math.round(100*Math.pow(1.15, toasters));
  microwavepricer = Math.round(1000*Math.pow(1.15, microwaves));
  toasterpriced = toasterpricer + ' Poptarts'
  microwavepriced = microwavepricer + ' Poptarts'
  if (poptarts == 1) {
    poptartsd = poptarts + ' Poptart';
  }
  else {
    poptartsd = poptarts + ' Poptarts';
  }
  if (toasters == 1) {
    toastersd = toasters + ' Toaster';
  }
  else {
    toastersd = toasters + ' Toasters';
  }
  if (microwaves == 1) {
    microwavesd = microwaves + ' Microwave';
  }
  else {
    microwavesd = microwaves + ' Microwaves';
  }
  Pps();
  document.getElementById("toasters").innerHTML = toastersd;
  document.getElementById("microwaves").innerHTML = microwavesd;
  document.getElementById("toasterprice").innerHTML = toasterpriced;
  document.getElementById("microwaveprice").innerHTML = microwavepriced;
  setTimeout(Save, 30000);
}
function Toaster() {
  if (poptarts >= toasterpricer) {
    toasters += 1;
    poptarts -= toasterpricer;
    toasterpricer = Math.round(100*Math.pow(1.15, toasters));
    toasterpriced = toasterpricer + ' Poptarts';
    if (poptarts == 1) {
      poptartsd = poptarts + ' Poptart';
    }
    else {
      poptartsd = poptarts + ' Poptarts';
    }
    if (toasters == 1) {
      toastersd = toasters + ' Toaster';
    }
    else {
      toastersd = toasters + ' Toasters';
    }
    document.getElementById("toasters").innerHTML = toastersd;
    document.getElementById("poptarts").innerHTML = poptartsd;
    document.getElementById("toasterprice").innerHTML = toasterpriced;
  }
}
function Microwave() {
  if (poptarts >= microwavepricer) {
    microwaves += 1;
    poptarts -= microwavepricer;
    microwavepricer = Math.round(1000*Math.pow(1.15, microwaves));
    microwavepriced = microwavepricer + ' Poptarts';
    if (poptarts == 1) {
      poptartsd = poptarts + ' Poptart';
    }
    else {
      poptartsd = poptarts + ' Poptarts';
    }
    if (microwaves == 1) {
      microwavesd = microwaves + ' Microwave';
    }
    else {
      microwavesd = microwaves + ' Microwaves';
    }
    document.getElementById("microwaves").innerHTML = microwavesd;
    document.getElementById("poptarts").innerHTML = poptartsd;
    document.getElementById("microwaveprice").innerHTML = microwavepriced;
  }
}
