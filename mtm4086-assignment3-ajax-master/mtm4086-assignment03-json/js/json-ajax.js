function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        //console.log(jsonObj);
		
		//console.log(jsonObj[0].title);
		
		//Div to append all my results
		var feed = document.getElementById('article-feed');
		
		// Create Image with src attribute as the imageURL
		//var img = document.createElement('img');
		//img.setAttribute('src', jsonObj[0].imageUrl);
		
		
		
		//var title = document.createElement('h1');
		//title.innerHTML = jsonObj[0].title;
		
		//append the Image to the article-feed div
		//feed.appendChild(title);
		//feed.appendChild(img);
		
		for (var key in jsonObj){
			console.log(jsonObj[key]);
			// Create Image with src attribute as the imageURL
		var img = document.createElement('img');
		img.setAttribute('src', jsonObj[key].imageUrl);
		
		var title = document.createElement('h1');
		title.innerHTML = jsonObj[key].title;
		
		var subtitle = document.createElement('p');
		subtitle.innerHTML = jsonObj[key].caption;
		
		var author = document.createElement('p');
		author.innerHTML = jsonObj[key].author;
		
		//append the Image to the article-feed div
		feed.appendChild(title);
		feed.appendChild(img);
		feed.appendChild(subtitle);
		feed.appendChild(author);
		}
		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();