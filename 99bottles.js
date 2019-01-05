var bottlesOfBeer = 99;

for (var i = bottlesOfBeer; i >= 0 ; i--){
     
    if (bottlesOfBeer > 1){
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.");
        console.log("Take one down and pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall.");
        console.log(" "); 
    }
    else if (bottlesOfBeer === 1){
        console.log(bottlesOfBeer + " bottle of beer on the wall, " + bottlesOfBeer + " bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log(" ");
    } else if (bottlesOfBeer === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
        bottlesOfBeer = bottlesOfBeer - 1;
}