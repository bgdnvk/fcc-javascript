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
    // Math.round(e[1] * Math.pow(10,2)) / Math.pow(10,2)
    // console.log(e[1]);
    // console.log(typeof e[1]);
    register_cash_total+=e[1]
    obj_register_cash[e[0]] = e[1]
    arr_cash_in_register.push([e[0],e[1]]);
    // console.log("element is: "+e);
    // console.log("e1 is: "+e[1]);
  });
  
  // console.log(obj_register_cash);
  register_cash_total = Math.round(register_cash_total*100)/100
  // console.log(register_cash);
  let change = cash-price;

  let arr_change = [];
  let change_given = 0;

  arr_cash_in_register.reverse();

  //Math.round()*100/100
  arr_cash_in_register.forEach(money_inArr => {
    let cash = money_inArr[1];
    let bill = values[arr_cash_in_register.indexOf(money_inArr)].val;

    console.log("----------------FOREACH-------------");
    console.log("CASH IS "+cash);
    console.log("BILL IS "+bill);
    console.log("---------TYPE: "+money_inArr[0]);
    change_left = Math.round((change - change_given)*100)/100
    console.log("CHANGE LEFT "+change_left);
    
    if(change_given <= change &&
      bill <= change){
      

      let bill_count = count_bills(cash, bill, change_left);
      console.log("bills you can take (bill count) "+bill_count);

      let cash2take = bill_count*bill;
      console.log(">>>cash2take: "+cash2take);

      
        
        //taking cash
      arr_change.push([money_inArr[0], cash2take]);
      console.log("arr pushed: "+[money_inArr[0], cash2take]);
      change_given = Math.round((change_given +bill_count*bill)*100)/100;
      console.log("change_given: "+change_given);


        
        // cash = Math.round((cash - bill*bill_count)*100)/100;
        // let change_given = change2give + Math.round((bill*bill_count)*100)/100;
        // console.log("change given so far: "+change_given);
        // change2give = Math.round(change2give-change_given)*100/100;
        // console.log("change2give: "+change2give);
    }
  })
 
  function count_bills(cash, bill, change_left){
    console.log("--------------countbills func---------------");
    console.log("cash is "+cash);
    console.log("bill is "+bill);
    console.log("change left is "+change_left);
    
    let num_bills;
    // if(cash >= bill){
    //   num_bills_max = Math.floor(cash/bill);
    // }
    
    if((cash*100)%(bill*100) === 0){
      console.log("inside if --");
      num_bills = Math.floor(cash/bill);
      
      while(num_bills*bill > change_left){
        num_bills--;
      }
    }
    console.log("-----------------END------------------------------------------");
    return num_bills || 0;
  }

  // console.log(
  //   count_bills(3.1,0.1,0.24)
  // );
  
  
  
  // console.log("cash in register b4: "+arr_cash_from_register_b4);

  // let arr_cash_from_register_after = [];
 
  // let change_temp = change;
  //   values.forEach(element => {
  //     console.log(element.val);
  //     let count = 0;
  //     console.log("change_temp is "+change_temp);
  //     console.log("element val is "+element.val);

  //     console.log("weird /: "+(change_temp / element.val));
  //     while(change_temp / element.val >= 0
  //       && change_temp >= element.val){
  //       console.log("enter loop");
  //       count+=1;
  //       change_temp = Math.round((change_temp-=element.val)*100)/100
  //       console.log("change is "+change_temp);
  //     }
  //     console.log("change is "+change_temp);
  //     console.log("count "+count);
  //     let bills = element.val*count;
  //     arr_cash_from_register_after.push(bills);

  //   });
  // let names_values = [];
 
  // // let change_temp = change;
  // let register_cash_after = Math.round(register_cash-change)*100/100;

  //   values.forEach(element => {
  //     console.log(element.val);
  //     let count = 0;
  //     console.log("cash_after loop: "+register_cash_after);
  //     console.log("element val is "+element.val);

  //     console.log("division r_cash_after ele value /: "+(register_cash_after / element.val));
  //     while(register_cash_after / element.val >= 0
  //       && register_cash_after >= element.val){
  //       console.log("enter loop");
  //       count+=1;
  //       register_cash_after = Math.round((register_cash_after-=element.val)*100)/100
  //       console.log("register cash after "+register_cash_after);
  //     }
  //     console.log("register cash after "+register_cash_after);
  //     console.log("count "+count);
  //     let bills = element.val*count;
  //     // arr_cash_from_register_after.push(bills);
  //     arr_cash_from_register_after.push([element.name,bills]);


  //   });
    
  //   console.log("register cash: "+register_cash);
  //   console.log(
  //     "register cash after: "+register_cash_after
  //   );
  //   console.log("register cash to give "+(Math.round(register_cash-change)*100/100));

  //   console.log("arr AFTER: "+arr_cash_from_register_after);
    console.log("arr BEFORE "+arr_cash_in_register);
    
    let arr_result = arr_change.filter(e => e[1] > 0);

    console.log(arr_result);

  

  let cash_register = {
    status: null,
    change: arr_result,
  }

  if(change> register_cash_total){
    cash_register.status = "INSUFFICIENT_FUNDS"
    cash_register = [];
  } else if(change === register_cash_total){
    cash_register.status = "CLOSED"
  } else{
    cash_register.status = "OPEN"
  }

  console.log("CHANGE "+change);
  console.log("REGISTER CASH "+register_cash_total);
  console.log("--------------------IN: "+cid);
  console.log("-----------------out: "+arr_result);

  console.log(cash_register);
  return cash_register;
}

// console.log(
//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// );
console.log(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}