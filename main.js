var poptarts = 0;
var poptartsd = poptarts + ' Poptarts';
var toasters = 0;
var toastersd = toasters + ' Toasters';
var microwaves = 0;
var microwavesd = microwaves + ' Microwaves';
var farms = 0;
var farmsd = farms + ' Farms';
var toasterpricer = Math.round(100*Math.pow(1.15, toasters));
var toasterpriced = toasterpricer + ' Poptarts';
var microwavepricer = Math.round(1000*Math.pow(1.15, microwaves));
var microwavepriced = microwavepricer + ' Poptarts';
var farmpricer = Math.round(10000*Math.pow(1.15, toasters));
var farmpriced = farmprice + ' Poptarts';
var pps = 0;
var ppsd = pps + ' Poptarts Per Second';
var poptartss = '';
var toasterss = '';
var microwavess = '';
var farmss = '';
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
  pps = toasters + 15 * microwaves + 200 * farms;
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
  if (confirm("Are you sure, this will clear all of your progress!") == true) {
  localStorage.clear();
  location.reload();
  }
}
function Save() {
  localStorage.setItem("poptarts", poptarts);
  localStorage.setItem("toasters", toasters);
  localStorage.setItem("microwaves", microwaves);
  localStorage.setItem("farms", farms);
}
function Load() {
  poptartss = localStorage.getItem("poptarts");
  toasterss = localStorage.getItem("toasters");
  microwavess = localStorage.getItem("microwaves");
  farmss = localStorage.getItem("farms");
  poptarts = Number(poptartss);
  toasters = Number(toasterss);
  microwaves = Number(microwavess);
  farms = Number(farmss)
  toasterpricer = Math.round(100*Math.pow(1.15, toasters));
  microwavepricer = Math.round(1000*Math.pow(1.15, microwaves));
  farmpricer = Math.round(10000*Math.pow(1.15, farms));
  toasterpriced = toasterpricer + ' Poptarts';
  microwavepriced = microwavepricer + ' Poptarts';
  farmpriced = farmpricer + ' Poptarts';
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
  if (farms == 1) {
    farmsd = farms + ' Farm';
  }
  else {
    farmsd = farms + ' Farms';
  }
  Pps();
  document.getElementById("toasters").innerHTML = toastersd;
  document.getElementById("microwaves").innerHTML = microwavesd;
  document.getElementById("farms").innerHTML = farmsd;
  document.getElementById("toasterprice").innerHTML = toasterpriced;
  document.getElementById("microwaveprice").innerHTML = microwavepriced;
  document.getElementById("farmprice").innerHTML = farmpriced;
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
function Farm() {
  if (poptarts >= farmpricer) {
    farms += 1;
    poptarts -= farmpricer;
    farmpricer = Math.round(10000*Math.pow(1.15, toasters));
    farmpriced = farmpricer + ' Poptarts';
    if (poptarts == 1) {
      poptartsd = poptarts + ' Poptart';
    }
    else {
      poptartsd = poptarts + ' Poptarts';
    }
    if (farms == 1) {
      farmsd = farms + ' Toaster';
    }
    else {
      farmsd = farms + ' Toasters';
    }
    document.getElementById("farms").innerHTML = farmsd;
    document.getElementById("poptarts").innerHTML = poptartsd;
    document.getElementById("farmprice").innerHTML = farmpriced;
  }
}
