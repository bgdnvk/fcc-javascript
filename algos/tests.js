var values = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  // let change = price-cash;
  // change = Math.round(change * 100) / 100;

  let register_cash = 0;
  let obj_register_cash = {};

  let money_left = [];
  let temp_cash = cash;

  cid.forEach((e) => {
    // Math.round(e[1] * Math.pow(10,2)) / Math.pow(10,2)
    console.log(e[1]);
    console.log(typeof e[1]);
    register_cash+=e[1]
    obj_register_cash[e[0]] = e[1]
    // console.log("element is: "+e);
    // console.log("e1 is: "+e[1]);
  });
  
  console.log(obj_register_cash);
  register_cash = Math.round(register_cash*100)/100
  // console.log(register_cash);

  let change = register_cash - cash;

  let cash_register = {
    status: null,
    change: cid,
  }

  if(change < 0){
    cash_register.status = "INSUFFICIENT_FUNDS"
  } else if(change === 0){
    cash_register.status = "CLOSED"
  } else{
    cash_register.status = "OPEN"
  }

  return cash_register;
}

console.log(
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);
