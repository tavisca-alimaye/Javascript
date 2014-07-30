var showFeed = function(){
    var e = document.getElementById("select1");
    var url = e.options[e.selectedIndex].value;
    var dropdownInd = e.selectedIndex;
    var carDetails = [""]
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
				case 0:
					break;
				case 1:
					var count = result.deals.length;
					for(var counter = 0;counter<count;counter++)
					{
						var hotels = result.deals[counter];

						var hoteldiv = document.createElement("div");
						hoteldiv.className = "deal-content-div";
						hoteldiv.id = "hdiv"+counter;
						var hoteldesc = document.createElement("div");
						hoteldesc.className = "description-div";
						var hnamelabel = document.createElement("H1");
						hnamelabel.className = "proper-noun-name";
						hnamelabelText = document.createTextNode(hotels.hotelName);
						hnamelabel.appendChild(hnamelabelText);
						hoteldesc.appendChild(hnamelabel);

						var hdesc = document.createTextNode(hotels.description);
						hoteldesc.appendChild(hdesc);	
						hoteldiv.appendChild(hoteldesc);					

						var hotelimg = document.createElement("img");
						hotelimg.className = "image-div";
						hotelimg.src = hotels.imageUrl;
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
							cardiv.className = "deal-content-div";
							cardiv.id = "cdiv"+counter;
							var cardesc = document.createElement("div");
							cardesc.className = "description-div";
							cardiv.appendChild(cardesc);
							var cnamelabel = document.createElement("H1");
							cnamelabel.className = "proper-noun-name";
							cnamelabelText = document.createTextNode(cars.rentalCompanyName);
							cnamelabel.appendChild(cnamelabelText);
							cardesc.appendChild(cnamelabel);

							var cdesc = document.createTextNode(cars.description);
							cardesc.appendChild(cdesc);

							var loc = document.createElement("H2");
							loc.className = "proper-noun-name";
							locText = document.createTextNode("Drop Location : " + cars.dropOffLocation.city);
							loc.appendChild(locText);
							cardesc.appendChild(loc);

							var bookingValidity = document.createElement("div");
							bookingValidity.className = "right-side-div";
							cardiv.appendChild(bookingValidity);
							var validityperiod = document.createElement("H2");
							validityperiod.className = "proper-noun-name";
							validityperiodText = document.createTextNode("Validity(From start date To end date)");
							validityperiod.appendChild(validityperiodText);
							bookingValidity.appendChild(validityperiod);

							var startdiv = document.createElement("div");
							startdiv.className = "set-float-left start-end-date-div"
								var start = document.createElement("H4");
								var startText = document.createTextNode("START");
								start.appendChild(startText);
								startdiv.appendChild(start);
								var vdate = document.createTextNode(cars.validityPeriod.start.date);
								startdiv.appendChild(vdate);
								var vtime = document.createTextNode(", " + cars.validityPeriod.start.time); 
								startdiv.appendChild(vtime);
							bookingValidity.appendChild(startdiv);

							var enddiv = document.createElement("div");
							enddiv.className = "set-float-right start-end-date-div";
								var end = document.createElement("H4");
								var endText = document.createTextNode("END");
								end.appendChild(endText);
								enddiv.appendChild(end);
								var venddate = document.createTextNode(cars.validityPeriod.end.date);
								enddiv.appendChild(venddate);
								var vendtime = document.createTextNode(", " + cars.validityPeriod.end.time); 
								enddiv.appendChild(vendtime);
							bookingValidity.appendChild(enddiv);

							parent.appendChild(cardiv);
                       }
                   	}
                    break;
                    case 3:
                    	var count = result.deals.length;
                    	if(count === 0)
                    	{
                    		var activitydiv = document.createElement("H1");
                    		activitydiv.style.color = "proper-noun-name";
                    		var activitydivText = document.createTextNode("SORRY!!!THERE ARE NO DEALS AVAILABLE FOR ACTIVITIES!!!");
                    		activitydiv.appendChild(activitydivText);
                    		parent.appendChild(activitydiv);
                    	}
                    break;
			}
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
