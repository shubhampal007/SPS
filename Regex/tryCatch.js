var text=null;  // For False Case
text="Shubham";

try{
    console.log("In Try Block");

    console.log(text.length);
}
catch(err)
{
    console.log("In Catch Block");

    console.log(err.message);
}
finally{
    console.log("Thanks");
}