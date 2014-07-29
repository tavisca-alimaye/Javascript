var showFeed = function(){
    var e = document.getElementById("select1");
    var url = e.options[e.selectedIndex].value;
    var dropdownInd = e.selectedIndex;
    var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	var parent = document.getElementById("displayArea");
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var result =JSON.parse(xmlhttp.responseText);
			switch(dropdownInd){
				case 1:
					var count = result.deals.length;
					for(var counter = 0;counter<count;counter++)
					{
						var hotels = result.deals[counter];
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
						hotelimg.style.width = "300px";
						hotelimg.style.height = "300px";
						hoteldiv.appendChild(hotelimg);
						parent.appendChild(hoteldiv);
					
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
							cardiv.style.position = "relative";
							cardiv.style.height = "400px";
							var cardesc = document.createElement("div");
							cardesc.style.background = "#FFFFFF";
							cardesc.style.color = "#232323";
							cardiv.appendChild(cardesc);
							var cnamelabel = document.createElement("H1");
							cnamelabel.style.color = "#91D65C";
							cnamelabel.innerHTML = "Company : " + cars.rentalCompanyName;
							cardesc.appendChild(cnamelabel);

							var cdesc = document.createTextNode(cars.description);
							cardesc.appendChild(cdesc);

							var loc = document.createElement("H2");
							loc.style.color = "#000";
							loc.innerHTML = "Drop Location : " + cars.dropOffLocation.city;
							cardesc.appendChild(loc);

							var validityperiod = document.createElement("H3");
							validityperiod.style.color = "#f00";
							validityperiod.innerHTML = "Validity(From start To end date) : ";
							cardesc.appendChild(validityperiod);

							var startdiv = document.createElement("div");
							startdiv.style.width = "50%";
							startdiv.style.float = "left";
							startdiv.style.color = "#000";
								var start = document.createElement("H4");
								start.style.color = "#300";
								start.innerHTML = "START";
								startdiv.appendChild(start);
								var vdate = document.createTextNode(cars.validityPeriod.start.date);
								startdiv.appendChild(vdate);
								var vtime = document.createTextNode(", " + cars.validityPeriod.start.time); 
								startdiv.appendChild(vtime);
							cardesc.appendChild(startdiv);

							var enddiv = document.createElement("div");
							enddiv.style.width = "50%";
							enddiv.style.float = "right";
							enddiv.style.color = "#000";
								var end = document.createElement("H4");
								end.style.color = "#300";
								end.innerHTML = "END";
								enddiv.appendChild(end);
								var venddate = document.createTextNode(cars.validityPeriod.end.date);
								enddiv.appendChild(venddate);
								var vendtime = document.createTextNode(", " + cars.validityPeriod.end.time); 
								enddiv.appendChild(vendtime);
							cardesc.appendChild(enddiv);

							var carimg = document.createElement("img");
							carimg.src = cars.imageUrl;
							cardiv.appendChild(carimg);
							parent.appendChild(cardiv);
                       }
                   	}
                    break;
                    case 3:
                    	var count = result.deals.length;
                    	if(count === 0)
                    	{
                    		var activitydiv = document.createElement("H1");
                    		activitydiv.style.color = "#f00";
                    		activitydiv.innerHTML = "SORRY!!!THERE ARE NO DEALS AVAILABLE FOR ACTIVITIES!!!";
                    		activitydiv.style.align = "centre";
                    		parent.appendChild(activitydiv);
                    	}
                    break;
			}
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
