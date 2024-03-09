console.log("hello word!");

var client = contentful.createClient({
    space: '7iuwxqetvahg',
    accessToken: 'C-VzpYMq056abAjyMVazLk6ylww0Km0j_ThkTfaM-wE',
  });
console.log(client);


var allProducts = document.getElementById('all-products');

client.getEntries({content_type: 'gdes258As2MeganKingston',}).then(function (entries) {
  entries.items.forEach(function (entry) {
      var productDiv = document.createElement('div');

      // header
      var name = document.createElement('h1');
      name.innerHTML = entry.fields.header;
      productDiv.append(name);

      // subheader
      var name = document.createElement('h2');
      name.innerHTML = entry.fields.subheader;
      productDiv.append(name);

      //main-image
      var mainImage = document.createElement('img');
      mainImage.classList.add('main-image');
      if (entry.fields.img){
        mainImage.src = entry.fields.img.fields.file.url;
        productDiv.append(mainImage);
        console.log(entry.fields.img.fields.file.url);
      }

      // description
      var name = document.createElement('p');
      name.innerHTML = entry.fields.paragraph;
      productDiv.append(name);

      // link
      var name = document.createElement('a');
      name.innerHTML = entry.fields.link;
      productDiv.append(name);

      allProducts.append(productDiv);

  });
});