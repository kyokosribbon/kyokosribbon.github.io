var client = contentful.createClient({
    space: 'bxfzp74j7r2t',
    accessToken: 'z_CUkqT5yY8zQD_W9uylfsNsy11lV5TkUYLUcK-kl2E',
  });

var productsDiv = document.getElementById('products');
  client.getEntries({content_type: 'resourcesExample',}).then(function (entries) {

    entries.items.forEach(function (entry) {

        var productDiv = document.createElement('div'); // <div></div>
        productDiv.classList.add('product'); // <div class="product"></div>
        var nameH3 = document.createElement('h3');
        nameH3.classList.add('product-name');
        nameH3.innerHTML = entry.fields.name;

        var mainImage = document.createElement('img');
        mainImage.classList.add('product-image');
        if (entry.fields.mainImage){
            mainImage.src = entry.fields.mainImage.fields.file.url;
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);
        
        productDiv.appendChild(nameH3); 
        productDiv.appendChild(linkToDetails);
        productsDiv.appendChild(productDiv);
    
    });
  });