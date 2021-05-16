function display(){
    document.getElementById("log").innerHTML="Solving...\n";
    console.log("Solved");
}

function displayRowCol(){
    var i,j;
    var str;
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            str="b"+i+j;
            console.log(str);
            document.getElementById(str).value="("+i+","+j+")";
        }
    }
}
function clearMatrix(){
    var i,j;
    var str;
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            str="b"+i+j;
            document.getElementById(str).value="";
        }
    }
}

function solve(){
    //window.alert("Function not available");
    
    console.log("Solution Started");
    //get input
    var mat=getInput();
    console.log("Input taken");
    printResult(mat);
    console.log("Input matrix printed");
    //solve 
    console.log("Solution Started");
    var r=solveSudoku(mat);
    console.log("Solution received");
    //print output
    if(r==1) printResult(mat);
    else{
        window.alert("Impossible");
    }
}

function solveSudoku(mat,i=0,j=0){
    console.log("again");
    if(j==9) return solveSudoku(mat,i+1,0);
    if(i==9) return 1;
    if(mat[i][j]!=0) return solveSudoku(mat,i,j+1);
    var a;
    for(var c=1;c<10;c++){
        console.log(""+i+","+j+"-> "+c);
        a=1;
        //check row
        for(var z=0;z<9;z++){
            if(mat[i][z]==c){
                a=0;
                break;
            }
        }
        if(a==0) continue;
        //check col
        for(var z=0;z<9;z++){
            if(mat[z][j]==c){
                a=0;
                break;
            }
        }
        if(a==0) continue;
        //check bigbox
        var iMin,jMin;
        iMin=Math.floor(i/3);
        jMin=Math.floor(j/3);
        iMin*=3;jMin*=3;
        for(var y=0;y<3;y++){
            for(var z=0;z<3;z++){
                if(mat[iMin+y][jMin+z]==c){
                    a=0;
                    break;
                }
            }if(a==0) break;
        }
        if(a==0) continue;
        mat[i][j]=c;
        var q=solveSudoku(mat,i,j+1);
        if(q==1) return 1;
        else mat[i][j]=0;
    }
    mat[i][j]=0;
    return 0;
}

function getInput(){
    var mat=new Array(9);
    for(var i=0;i<mat.length;i++){
        mat[i]=new Array(9);
    }
    var i,j,str;
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            str="b"+i+j;
            mat[i][j]=document.getElementById(str).value;
            if(mat[i][j]=="") mat[i][j]=0;
            else mat[i][j]=parseInt(mat[i][j]);
        }
    }
    return mat;
}

function printResult(mat){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            str="b"+i+j;
            document.getElementById(str).value=mat[i][j];
            
        }
    }
}

function addTwo(){
    var x=parseInt(document.getElementById("b00").value);
    var y=parseInt(document.getElementById("b01").value);
    var z=x+y;
    document.getElementById("b02").value=z;
}