         //first problem

    function kilometerToMeter(kilometer){
        let meter=kilometer*1000;
           return meter;
     }
     let result=kilometerToMeter(9);
     console.log(result);
     
     
          //Second Problem
     
     function budgetCalculator(watch,phone,laptop){
         let watchPrice=50;
        let phonePrice=100;
        let laptopPrice=500;
        watchCost=watch*watchPrice;
        phoneCost=phone*phonePrice;
        laptopCost=laptop*laptopPrice;
     
       let totalExpense=watchCost+phoneCost+laptopCost;
        return totalExpense;
     
     }
     let budget=budgetCalculator(10,12,5);
     console.log(budget);
     
             //Third Problem
     
     function hotelCost(days){
       let cost=0;
           if(days>0 && days<=10){
              cost=days*100;
           }
           else if(days>10 && days<=20){
             let firstTen =10*100;
             let remain=days-10;
             let secondTen=remain*80;
             cost=firstTen+secondTen;
            
           }
           else{
             firstTen=10*100;
             secondTen=10*80;
             remain=days-20;
             let RestOfDays=remain*50;
             cost=firstTen+secondTen+RestOfDays;
           }
         return cost;
     }
     let totalCost=hotelCost(15);
     console.log(totalCost);
     
     
               //fourth Problem
     
        
        function megaFriend(name){
          let max=name[0];
          for (let i = 0; i < name.length; i++) {
             
              if(name[i].length > max.length){
                  max = name[i];
              }
   
   
          }
          return max;
      }
      let friend=["sai","mahbub","tareq hasan","saiful islam mahbub","mahi","abdullah"];
      let biggest=megaFriend(friend);
      console.log(biggest);