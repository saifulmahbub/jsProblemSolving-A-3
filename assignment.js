    //first problem

    function kilometerToMeter(kilometer){
        let meter=kilometer*1000;
           return meter;
     }
     let result=kilometerToMeter(8);
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
     let budget=budgetCalculator(12,15,11);
     console.log(budget);
     
             //Third Problem
     
     function hotelCost(days){
           if(days<=10){
             let cost=days*100;
           }
           else if(days<=20){
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
     let totalCost=hotelCost(30);
     console.log(totalCost);
     
     
               //fourth Problem
     
         function megaFriend(name){
             let max=name[0].length;
             for (let i = 0; i < name.length; i++) {
                 // const element = name[i];
                 // if (element>max){
                 //     max=element;
                 if(name[i].length > max){
                     max = name[i].length;
                 }
                 
                 
             }
             return max;
         }
      let friend=["sai","mahbub","tareq","saifulislammahbub","mahi","abdullah"];
      let biggest=megaFriend(friend);
      console.log(biggest);