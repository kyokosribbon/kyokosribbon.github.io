var client = contentful.createClient({
    space: '7iuwxqetvahg',
    accessToken: 'iEh-UwmFrO75DLGhCncfH3atYrlZCQ7OtYHPhihoUM8',
  });

  // getting enteries in space
  var allProducts = document.getElementById('all-products');

    // getting enteries in "homePortfolio" content type in contentful
  client.getEntries({content_type: 'homePortfolio',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        // container
        var resource = document.createElement('div');
        document.getElementById('all-products').append(resource);

        // image
        var image = document.createElement('img');
        image.src = 'http:'+entry.fields.mainImage.fields.file.url;
        resource.append(image);

        console.log(entry.fields.mainImage.fields.file.url);

        // h2
        var h2 = document.createElement('h2');
        h2.innerHTML = entry.fields.h2;
        resource.append(h2);
        console.log(entry.fields.h2);

        // p
        var p = document.createElement('p');
        p.innerHTML = entry.fields.p;
        resource.append(p);
        console.log(entry.fields.p);
        
        var portfolioButton = document.createElement('a');
        portfolioButton.innerHTML = "Portfolio";
        resource.append(portfolioButton);

        portfolioButton.href = "portfolio.html?id="+entry.sys.id;

    });
  }); 