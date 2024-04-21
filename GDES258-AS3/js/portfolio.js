var client = contentful.createClient({
    space: '7iuwxqetvahg',
    accessToken: 'iEh-UwmFrO75DLGhCncfH3atYrlZCQ7OtYHPhihoUM8',
  });

  // getting enteries in space
  var allProducts = document.getElementById('portfolio-products');

    // getting enteries in "homePortfolio" content type in contentful
  client.getEntries({content_type: 'portfollioContent',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        // container
        var resource = document.createElement('div');
        document.getElementById('portfolio-products').append(resource);

           // image
           var portfolioImg = document.createElement('img');
           portfolioImg.src = 'http:'+entry.fields.portfolioImg.fields.file.url;
           resource.append(portfolioImg);
   
           console.log(entry.fields.portfolioImg.fields.file.url);
   
           // h2
           var portfolioh2 = document.createElement('h2');
           portfolioh2.innerHTML = entry.fields.portfolioh2;
           resource.append(portfolioh2);
           console.log(entry.fields.portfolioh2);
   
           // p
           var portfolioP = document.createElement('p');
           portfolioP.innerHTML = entry.fields.portfolioP;
           resource.append(portfolioP);
           console.log(entry.fields.portfolioP);

    });
  }); 