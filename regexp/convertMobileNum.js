let mobile = "131 0000 8080"
function convertMobile(mobile){
  const mobileReg = /(\d{3})(\d{4})(\d{4})/ig;
  let mobileCalc = mobile.replace(/\s+/ig,"");
  mobileCalc = mobileCalc.replace(mobileReg,"$1****$3");
  return mobileCalc;
}
convertMobile(mobile); //131****8080

