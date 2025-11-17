 
  let items = [
    { id:1, name:"IQOO",      price:15000, img:"https://m.media-amazon.com/images/I/61Vb6GsQgrL._AC_UY327_FMwebp_QL65_.jpg", stock:"available",   rating:4.0 },
    { id:2, name:"Samsung",   price:20000, img:"https://m.media-amazon.com/images/I/71kmZ1zJYUL._AC_UY327_FMwebp_QL65_.jpg",        stock:"unavailable", rating:4.5 },
    { id:3, name:"POCO",      price:18000, img:"https://m.media-amazon.com/images/I/71EfJ+H1uRL._AC_UY327_FMwebp_QL65_.jpg",        stock:"available",   rating:4.0 },
    { id:4, name:"realme",    price:25000, img:"https://m.media-amazon.com/images/I/71Vjn1DfArL._AC_UY327_FMwebp_QL65_.jpg",        stock:"available",   rating:4.2 },
    { id:5, name:"OnePlus",   price:30000, img:"https://m.media-amazon.com/images/I/61IOa9IrlaL._AC_UY327_FMwebp_QL65_.jpg",        stock:"available",   rating:4.8 },
    { id:6, name:"iPhone 17", price:120000,img:"https://m.media-amazon.com/images/I/31Bn8sQI3xL._SX342_SY445_QL70_FMwebp_.jpg",   stock:"unavailable", rating:5.0 }
  ];

  const cardContainer = document.getElementById('card');
  cardContainer.innerHTML = ''; 

  items.forEach(item => {
    
    const disabledAttr = item.stock !== 'available' ? 'disabled' : '';
    const buttonText = item.stock !== 'available' ? 'Out of stock' : 'Add to cart';

    cardContainer.innerHTML += `
      <div class="cards">
        <img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>Rs. ${item.price}</p>
        <p>Stock: ${item.stock}</p>
        <button ${disabledAttr} onclick="addToCart(${item.id})">${buttonText}</button>
      </div>
    `;
  });

  let cartItems = [];     
  let total = 0;

  function addToCart(id) {
   


    const product = items.find(p => p.id === id);
    if (!product) {
      alert('Product not found');
      return;
    }

    if (product.stock !== 'available') {
      alert('This product is currently unavailable.');
      return;
    }

    if (cartItems.some(p => p.id === id)) {
      alert('This product is already in the cart!');
      return;
    }

   
    cartItems.push(product);
    total += product.price;

  
    appendCartRow(product);
    updateTotal();
  }
  function appendCartRow(product) {
    const table = document.getElementById('table');
   
    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${product.name}</td>
        <td>${product.price}</td>
      </tr>
    `);
  }


  function updateTotal() {
    document.getElementById('total').innerText = 'Total: Rs. ' + total;
  }

  
    
  