let test = ["m", "dm", "cm", "mm"];
let weight = ["kg","g"];
if (process.argv.length != 6 || process.argv[4] != "to" || (test.indexOf(process.argv[5]) == -1 && weight.indexOf(process.argv[5]) == -1) || (test.indexOf(process.argv[3]) == -1 && weight.indexOf(process.argv[3]) == -1) || isNaN(process.argv[2])) {
    console.log("Invalid parameters");
} else if(test.indexOf(process.argv[5]) != -1 && test.indexOf(process.argv[3]) != -1){
    console.log(process.argv[2] + " " + process.argv[3] + " are "+(process.argv[2] /(Math.pow(10,test.indexOf(process.argv[3]) - test.indexOf(process.argv[5])))+ " " +process.argv[5]));
}else{
    console.log(process.argv[2] + " " + process.argv[3] + " are "+(process.argv[2] /(Math.pow(1000,weight.indexOf(process.argv[3]) - weight.indexOf(process.argv[5])))+ " " +process.argv[5]));
}