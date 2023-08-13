function highestRunScore(allscores){
    var max = allscores[0][1];
    for(var i=0; i<5; i++){
        for(var j=1; j<2; j++){
            if(max < allscores[i][j]){
                max = allscores[i][j];
            }
        }
    }
    return max;
}

function highestRunScorer(allscores, updated_max){
    var batter = allscores[0][0];
    for (var x=0; x<5; x++){
        for(var y=1; y<2; y++){
            if(updated_max == allscores[x][y]){
                batter=allscores[x][0];  
            }
        }
        
    }
    return batter;
}

var allscores = [
    ["ABC", 101],
    ["DEF", 30],
    ["GHI", 198],
    ["JKL", 3],
    ["MNO", 173]
]



var updated_max = highestRunScore(allscores);
var scorer = highestRunScorer(allscores, updated_max);

document.write(scorer);
document.write("<br/>")
document.write(updated_max);