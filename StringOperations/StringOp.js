var StringOperations = function () {
    var dropdownval = e.options[e.selectedIndex].text;
    var text1 = document.getElementById("string1");
    var res = document.getElementById("result");
    text1 = text1.value;
    var string_obj1 = new string_exp(text1);
    switch (dropdownval) {
        case 'Length':
            len = string_obj1.strlen;
            res.innerHTML = len;
            break;
        case 'Concat':
            var text2 = document.getElementById("string2");
            var string_obj2 = new string_exp(text2.value);
            var concated = string_obj1.strconcat(string_obj2);
            res.innerHTML = concated;
            break;
        case 'substring':
            var text2 = document.getElementById("string2");
            text2 = text2.value;
            var text3 = document.getElementById("string3");
            text3 = text3.value;
            var start = parseInt(text2, 10);
            var end = parseInt(text3,10);
            var sub = string_obj1.strsubstring(start,end);
            res.innerHTML = sub;
            break;
        case 'charat':
            var text2 = document.getElementById("string2");
            text2 = text2.value;
            var ch = string_obj1.strcharAt(text2);     
            if (ch < 0)
                res.innerHTML="";
            else
                res.innerHTML = ch;
            break;
        case 'lastindexof':
            var text2 = document.getElementById("string2");
            text2 = text2.value;
            res.innerHTML = string_obj1.strlastIndexOf(text2);
            break; 
        case 'indexof':
            var text2 = document.getElementById("string2");
            text2 = text2.value;
            //var chstring = new string_exp(text2);
            res.innerHTML = string_obj1.strIndexOf(text2);
            break; 
        case 'replace':
            var text2 = document.getElementById("string2");
            text2 = text2.value;
            var text3 = document.getElementById("string3");
            text3 = text3.value;
            res.innerHTML = string_obj1.strreplace(text2,text3);
            break;
    }
}
var string_exp = function(val){
    this.value = val;
    this.strlen = mylength.call(this);
    this.strconcat = function(strobj2){
        return this.value + strobj2.value;
    }
    this.strsubstring = function(starting,ending){
        var i;
        var temp = "";
        if(isNaN(starting))
            return "Given Index is not a number";
        if(ending > this.strlen || ending == undefined || isNaN(ending))
            ending = this.strlen-1;
        for(i = starting;i<=ending;i++)
        {
            temp += this.value[i];
        }
        return temp;
    }
    this.strcharAt = function(index){
        if(index >= this.strlen || index < 0 || isNaN(index))
            return -1;
        else
            return this.value[index];
    }
    this.strlastIndexOf = function(ch){
        var i = this.strlen;
        while(i >= 0)
        {
            if(this.value[i] === ch)
                return i;
            i--;
        }        
        if(i<0)
        {
            return "Match Not Found";
        }
    }
    this.strIndexOf = function(ch){
        var i = 0;
        while(i < this.strlen)
        {
            if(this.value[i] === ch)
                return i;
            i++;
        }
        if(i===this.strlen)
        {
            return "Match Not Found";
        }
    }
    /*this.strsubIndexOf = function(ch){                  //for substring
        var i=0;
        var found = true;
        var ind=0;
        for(i=0;i<this.strlen;i++)
        {
            if(this.value[i] === ch.value[0])
            {
                debugger;
                var j = i+1;
                var k = 1;
                while(j < this.strlen || k < ch.strlen)
                {
                    if(this.value[j] != ch.value[k])
                    {
                        found = false;
                        break;
                    }
                }
                if(found === true)
                {
                    ind = i;
                    return ind;
                }
            }
        }
    }*/
    this.strreplace = function(searchstr,replacestr){
        var ind = this.value.indexOf(searchstr);
        var newstr="";
        var temp = replacestr;
        var lastind = ind + searchstr.length;
        for(var i =0;i<ind;i++)
            newstr+=this.value[i];
        newstr += replacestr;
        for(var j = lastind;j<this.strlen;j++)
            newstr+= this.value[j];
        return newstr;
    }
}

var mylength = function(){
    var i =0;
    while(this.value[i]!=null)
        i+= 1;
    return i;
}
var e = document.getElementById("select1");
e.onchange = StringOperations;