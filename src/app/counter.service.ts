export class CounterService{
   activeToInactive=0;
   inactiveToActive=0;
   
   onActiveToInactive(){
   this.activeToInactive++;
   console.log("Active to Inactive--"+this.activeToInactive);
   }
  
   onInActiveToActive(){
    this.inactiveToActive++;
    console.log("Active to Inactive--"+this.inactiveToActive);
   } 

}