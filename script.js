
var xar=document.getElementById("you");
var yar=document.getElementById("fiance");
var s=document.getElementById("submit");
var r=document.getElementById("close");
var x;
var y;
            
var alpha1 = new Array(26);
var alpha2 = new Array(26);
var i;
for (i=0; i<26; ++i){
    alpha1[i]=0;
    alpha2[i]=0;
}
            //xar=x.split('');
            //yar=y.split('');
            //xar.sort();
            //yar.sort();
            
r.onclick = function(){
    window.close();
}
s.onclick = function(){
    x=xar.value.toLowerCase();
    y=yar.value.toLowerCase();
    if (x.length==0 && y.length!=0){
        document.getElementById('res').innerHTML="Having an identity crisis?";
    }
    else if(x.length!=0 && y.length==0){
        document.getElementById('res').innerHTML="Too shy to disclose your crush's name?";
    }
    else if(x.length==0 && y.length==0){
        document.getElementById('res').innerHTML="Both entries empty! Am I a joke to you?";         
    }
    else if(x.length!=0 && y.length!=0){
        console.log(x);
        var m;
        for (i=0; i<x.length; ++i){
            alpha1[x.charCodeAt(i)-97]++;
        }
        for (i=0; i<y.length; ++i){
            alpha2[y.charCodeAt(i)-97]++;
        }
        var total=0;
        for (i=0; i<26; ++i){
            if (alpha1[i]>alpha2[i]){
                m=alpha2[i];
            }
            else{
                m=alpha1[i];
            }
            total=total+alpha1[i]+alpha2[i]-2*m;
        }
        console.log(total);
        var F = ["F","L","A","M","E","S"];
        var j=-1;
        var index=-1;
        for (i=0; i<5; ++i){
            while (j<total-1){
                j=j+1;
                index=(index+1)%(6);
                while (F[index]==-1){
                    index=(index+1)%(6);
                }
                        
            }
            console.log("THE INDEX"+(index+1));
            F[index]=-1;
                    //index=(index+1)%6;
                    //while (F[index]==-1){
                      //  index=(index+1)%(6);
                    //}
            j=-1;
        }
        var letter;
        for (i=0; i<6; ++i){
            if (F[i]!=-1){
                letter=F[i];
            }
        }
        if (letter=='F'){
            document.getElementById('res').innerHTML="Report: Oh no! Your crush will friendzone you. :(";
        }
        else if (letter=='L'){
            document.getElementById('res').innerHTML="Report: Congrats! You crush loves you. :)";    
        }
        else if (letter=='A'){
            document.getElementById('res').innerHTML="Report: Okay! Your crush is affectionate towards you.";    
        }
        else if (letter=='M'){
            document.getElementById('res').innerHTML="Report: Wow! Your crush will get married to you.";    
        }
        else if (letter=='E'){
            document.getElementById('res').innerHTML="Report: Alert! Your crush can be your enemy!";    
        }
        else{
            document.getElementById('res').innerHTML="Report: Siblings.";    
        }
        var butchange = document.getElementById("submit");
        butchange.innerHTML = "RESET";
        butchange.onclick = function(){
            window.location.reload();
        }
    }
                
}