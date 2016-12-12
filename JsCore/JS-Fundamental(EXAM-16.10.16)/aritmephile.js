/**
 * Created by MARK-Max on 16.10.2016 г..
 */
function arithmephile (input){
    let arr = input.map(Number);
    let finalNumber=-1000000000;
    for(let i=0;i<arr.length;i++){
        let count=0;
        let element;
        let sum=1 ;
        if(arr[i]>=0&&arr[i]<10){
           count=arr[i];
            for(let j =i+1;j<=i+arr[i];j++) {
                sum*=arr[j];
            }
            if(finalNumber<sum){
                finalNumber=sum;
            }
        }
    }
    console.log(finalNumber)
}
arithmephile([ '10',
  '20',
  '2',
  '30',
  '44',
  '3',
  '56',
  '20',
  '24' ]);