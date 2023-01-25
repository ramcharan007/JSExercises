// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  constructor(start_date,end_date){
    this.start=start_date;
    this.end=end_date;
    this.total_leaves=12;
    this.reductionperday=1000;
    this.reason='casual'
    
  }
  leaveDuration(){
    let s =new Date(this.start);
    let e = new Date(this.end);
    return (e.getTime()-s.getTime())/(1000*3600*24);
  }
  setReason(reason){
    this.reason=reason;
  }
  getReason(){
    return this.reason;
  }
  salaryReduction(){
    return this.leaveDuration()*this.reductionperday;
  }
  leaveStatus(){
    if(this.total_leaves-this.leaveDuration()>0){
      console.log("Approved");
    }
    else{
      console.log("Denied");
    }
  }
}

export default Leave;