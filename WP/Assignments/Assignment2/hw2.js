function sayHello()
{
    var x = document.forms["myForm"]["fname"].value;
    if(x == "")
    {
        alert("Name must be filled out");
        return false;
    }
    alert("Hello " + x);
    
}
function add()
{
    var x = Number(document.forms["calcFomr"]["fnum"].value);
    var y = Number(document.forms["calcFomr"]["fnum1"].value);
    var result = x+y;
    document.calcFomr.result.value=result;
}
function sub()
{
    var x = Number(document.forms["calcFomr"]["fnum"].value);
    var y = Number(document.forms["calcFomr"]["fnum1"].value);
    var result = x-y;
    document.calcFomr.result.value=result;
}
function mult()
{
    var x = Number(document.forms["calcFomr"]["fnum"].value);
    var y = Number(document.forms["calcFomr"]["fnum1"].value);
    var result = x*y;
    document.calcFomr.result.value=result;
}
function div()
{
    var x = Number(document.forms["calcFomr"]["fnum"].value);
    var y = Number(document.forms["calcFomr"]["fnum1"].value);
    var result = x/y;
    document.calcFomr.result.value=result;
}
function strings(id)
{
    var x = document.getElementById(id);
    switch(x)
    {
        case 1:
            document.keys.str.value="a";
        case 2:
            document.keys.str.value="b";
        case 3:
            document.keys.str.value="c";
        case 4:
            document.keys.str.value="d";
        case 5:
            document.keys.str.value="e";
        case 6:
            document.keys.str.value="f";
        case 7:
            document.keys.str.value="g";
        case 8:
            document.keys.str.value=" ";
            
            
    }

}
function cart()
{
    var box = document.getElementById("cart")
    if(box.checked == true)
    {
        alert("box");
    }
}

function makeTable(students) 
{
    var students = [
        { name: "Andy", id: 001, major: "Computer Science" },
        { name: "Ben", id: 002, major: "Biology" },
        { name: "Hari", id: 003, major: "Computer Science" },
        { name: "Lisa", id: 004, major: "Physic" },
        { name: "Wendy", id: 005, major: "Math" }
        ];

    var result = "<table border=1>";
    for(var i=0; i<students.length; i++)
    {
        result += "<tr>";
        for(var j=0; j<students[i].length; j++)
        {
            result += "<td>"+students[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";
    return result;
}
function accses()
{
    var username = ["user1", "user2", "user3"]
    var password = ["user1-111", "user2-222", "user3-333"]
    var user = document.forms[auth][usr].value
    var pass =document.forms[auth][pwd].value
    
}