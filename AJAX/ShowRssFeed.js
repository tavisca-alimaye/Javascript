var showFeed = function(){
    var e = document.getElementById("select1");
    var url = e.options[e.selectedIndex].value;
    var dropdownInd = e.selectedIndex;
    var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("blogContent").innerHTML=xmlhttp.responseText;
			var result =JSON.parse(xmlhttp.responseText);
			switch(dropdownInd){
				case 1:
					var count = result.deals.length;
					for(var counter = 0;counter<count;counter++)
					{
						var hotels = result.deals[counter];
						if(hotels.hotelName !== "")
						{
							var hoteldiv = document.createElement("div");
							hoteldiv.id = "hdiv"+counter;
							hoteldiv.style.border = "2px solid #222222";
							var hoteldesc = document.createElement("div");
							hoteldesc.style.background = "#FFFFFF";
							hoteldesc.style.color = "#232323";
							hoteldiv.appendChild(hoteldesc);
							var hnamelabel = document.createElement("H1");
							hnamelabel.style.color = "#91D65C";
							hnamelabel.innerHTML = hotels.hotelName;
							hoteldesc.appendChild(hnamelabel);

							var hdesc = document.createTextNode(hotels.description);
							hoteldesc.appendChild(hdesc);						

							var hotelimg = document.createElement("img");
							hotelimg.src = hotels.imageUrl;
							hoteldiv.appendChild(hotelimg);
							document.getElementById("displayArea").appendChild(hoteldiv);
						}
					}
					break;
				case 2:
					var count = result.deals.length;
                   	for(var counter = 0;counter<count;counter++)
                   	{
                       var cars = result.deals[counter];
                       if(cars.rentalCompanyName !== "")
                       {
                           var cardiv = document.createElement("div");
                           cardiv.id = "cdiv"+counter;
                           cardiv.style.border = "2px solid #222222";
                           var cardesc = document.createElement("div");
                           cardesc.style.background = "#FFFFFF";
                           cardesc.style.color = "#232323";
                           cardiv.appendChild(cardesc);
                           var cnamelabel = document.createElement("H1");
                           cnamelabel.style.color = "#91D65C";
                           cnamelabel.innerHTML = cars.rentalCompanyName;
                           cardesc.appendChild(cnamelabel);

                           var cdesc = document.createTextNode(cars.description);
                           cardesc.appendChild(cdesc);

                           //var cnamelabel1 = document.createElement("H4");
                           //cnamelabel1.style.color = "#000";
                           //cnamelabel1.innerHTML = result[counter].dropOffLocation.city;
                           //cars.rentalCompanyName;
                           //cnamelabel.appendChild(cnamelabel1);

                           var carimg = document.createElement("img");
                           carimg.src = cars.imageUrl;
                           cardiv.appendChild(carimg);
                           document.getElementById("displayArea").appendChild(cardiv);
                       }
                   	}
                    break;
			}
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
