let deno =[1,2,5,10,20,50,100,500,1000];
let n=deno.length;

function findMin(v){
    let ans =[];

    for(let i=n-1;i>=0;i--){
        while(v>=deno[i]){
            ans.push(deno[i]);
        }
    }

    for(const element of ans){
        console.log(""+element);
    }
}

n=93;
console.log("Following is minimal number"+"of change for"+n+":");
findMin(n);