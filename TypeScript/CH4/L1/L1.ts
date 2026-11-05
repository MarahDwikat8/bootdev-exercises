//Array
export function averageScore(ratings: number[]) {
 
 if (ratings.length===0){
  return 0 ;
 }
 let sum =0;
 for(const rat of ratings){
  sum+=rat;
 }

return sum/ratings.length;

}
