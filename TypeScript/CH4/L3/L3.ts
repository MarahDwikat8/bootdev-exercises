//Heterogeneous Arrays
/*
يعني ارراي بتحتوي على انواع بيانات مختلفه 
*/

export function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[],
) {
  for (let i =0 ;i<comments.length;i++){
    if(comments[i]===id){
        comments[i]=comment;
        break;
    }
  }
  return comments;
}
