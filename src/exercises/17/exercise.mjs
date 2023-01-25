// Extend the Leave class, to create different classes for different Leave types.
import Leave from '../16/exercise.mjs'
class SickLeave extends Leave{
    constructor(start_date,end_date){
        super(start_date,end_date);
        this.reason='sick';
        this.reductionperday=500;
    } 
    getReason(){
        return this.reason;
    }
    
}
class CasualLeave  extends Leave{
    constructor(start_date,end_date){
        super(start_date,end_date);
        this.reason='casual';
        this.reductionperday=1000;
    } 
    getReason(){
        return this.reason;
    }
    
}
