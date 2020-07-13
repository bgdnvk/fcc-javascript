var values = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.10 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {

  let register_cash_total = 0;
  let obj_register_cash = {};
  let arr_cash_in_register = [];

  cid.forEach((e) => {
    register_cash_total+=e[1];
    obj_register_cash[e[0]] = e[1];
    arr_cash_in_register.push([e[0],e[1]]);

  });
  

  register_cash_total = Math.round(register_cash_total*100)/100;

  let change = cash-price;

  let arr_change = [];
  let change_given = 0;

  arr_cash_in_register.reverse();

  /**
   * last bug
   */
  let pos = values.findIndex();
  function changePos(change){
    
  }
   /**
    * 
    */

  
  arr_cash_in_register.forEach(money_inArr => {
    let cash = money_inArr[1];
    let bill = values[arr_cash_in_register.indexOf(money_inArr)].val;

  
    // change_left = Math.round((change - change_given)*100)/100
    let change_left = Math.round((change - change_given)*100)/100
    
    
    if(change_given <= change &&
      bill <= change){
      

      let bill_count = count_bills(cash, bill, change_left);
      // console.log("bills you can take (bill count) "+bill_count);

      let cash2take = bill_count*bill;
      // console.log(">>>cash2take: "+cash2take);

      arr_change.push([money_inArr[0], cash2take]);
      // console.log("arr pushed: "+[money_inArr[0], cash2take]);
      change_given = Math.round((change_given +bill_count*bill)*100)/100;
      // console.log("change_given: "+change_given);



    }
  })
 
  function count_bills(cash, bill, change_left){
    
    let num_bills;
   
    console.log("count bills");
    console.log(cash);
    console.log(bill);
    
    // if((cash*100)%(bill*100) === 0){
    if((cash*100)%(bill*100) === 0){
      
      num_bills = Math.floor(cash/bill);
      
      while(num_bills*bill > change_left){
        num_bills--;
      }
    }
  
    return num_bills || 0;
  }

    
    
  let arr_result = arr_change.filter(e => e[1] > 0);
  console.log("arr res "+arr_result);


  let cash_register = {
    status: null,
    change: arr_result,
  }

  if(change> register_cash_total){
    console.log("ins funds");
    cash_register.status = "INSUFFICIENT_FUNDS";
    cash_register.change = [];
  } else if(change === register_cash_total){
    cash_register.status = "CLOSED";
    cash_register.change = cid;
  } else{
    cash_register.status = "OPEN";
  }
  console.log("CHANGE IS "+change);
  console.log("CASH REG IS "+register_cash_total);


  console.log(cash_register.change);
  return cash_register;
}

// console.log(
//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// );
// console.log(
//   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// );
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

);