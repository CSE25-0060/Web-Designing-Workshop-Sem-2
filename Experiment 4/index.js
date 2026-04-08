function calculateresult()
{
    let n=document.getElementById("subject").value;
    let total=0;
    for(let i=1;i<=n;i++)
    {
        let marks=parseFloat(prompt("Enter marks for each subject"+i));
        total+=marks;
    }
    let average=total/n;
    let grade;
    if(average>=90)
        grade="A";
    else if(average>80)
        grade="B";
    else if(average>=70)
        grade="c";
    else if(average>=60)
        grade="d";
    else
        grade="F";

    let result;    
    if(average>=60)
        result="pass";
    else
        result="fail";
    document.getElementById("result").innerHTML="total marks: "+total+"<br>average marks: "+average+"<br>grade: "+grade+"<br>result: "+result;


}