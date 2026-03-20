function calculateresult()
{
    let n=document.getElementById("subject").value;
    let total=0;
    for(let i=1;i<=n;i++)
    {
        let marks=parseFloat(prompt("enter marks for subject"+i));
        total+=marks;
    }
    let average=total/n;
    let grade;
    if(average>=90)
        grade="A";
    if(average>80)
        grade="B";
    if(average>=70)
        grade="c";
    if(average>=60)
        grade="d";
    else
        grade="F";

        
    if(average>=60)
        result="pass";
    else
        result="fail";
    document.getElementById("result").innerHTML="total marks: "+total+"<br>average marks: "+average+"<br>grade: "+grade+"<br>result: "+result;


}