var ob={
    sno:"101",
    fname:"Shubham",
    fullname: function()
    {
        var sno="202";
        var fname="Raju";

        return sno+" "+this.fname;

    }
};
console.log(ob.fullname());