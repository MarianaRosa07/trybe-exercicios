const menu = {
    sanduiches: [
      {
        name: 'Big Mac',
        price: 26.90,
        ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
        calories: 503,
      },
      {
        name: 'Duplo Quarterão',
        price: 39.90,
        ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
        calories: 762,
      },
      {
        name: 'Big Tasty',
        price: 39.90,
        ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
        calories: 944,
      },
    ],
    acompanhamentos: [
      {
        name: 'Chicken McNuggets - 10 unidades',
        price: 16.90,
        ingredients: ['frango empanado'],
        calories: 414,
      },
      {
        name: 'McFritas Kids',
        price: 8.90,
        ingredients: ['batata', 'sal'],
        calories: 90,
      },
      {
        name: 'McFritas Pequena',
        price: 11.90,
        ingredients: ['batata', 'sal'],
        calories: 211,
      },
      {
        name: 'McFritas Média',
        price: 13.90,
        ingredients: ['batata', 'sal'],
        calories: 295,
      },
      {
        name: 'McFritas Grande',
        price: 15.90,
        ingredients: ['batata', 'sal'],
        calories: 422,
      },
    ],
    sobremesas: [
      {
        name: 'McFlurry Ovomaltine Caramelo',
        price: 13.90,
        ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
        calories: 462,
      },
      {
        name: 'Top Sundae Chocolate',
        price: 11.90,
        ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
        calories: 377,
      },
      {
        name: 'Torta de Banana',
        price: 6.90,
        ingredients: ['banana', 'massa crocante'],
        calories: 222,
      },
    ],
    bebidas: [
      {
        name: 'Coca-Cola 300ml',
        price: 13.90,
        calories: 129,
      },
      {
        name: 'Del Valle Uva 500ml',
        price: 11.90,
        calories: 200,
      }
    ]
  }
  
  // console.log(menu.sobremesas[1].ingredients[1]);
  
  const newItem = {
    name: 'Cheddar McMelt',
    price: 46.90,
    ingredients: ['2 hambúrgueres', 'queijo cheddar', 'molho especial', 'cebola', 'pão com gergelim', 'felicidade'],
    calories: 505,
  }
  
  // menu.sanduiches.push(newItem);
  menu.sanduiches.unshift(newItem);
  // console.log(menu.sanduiches);
  
  
  /* 
  Criar uma função para adicionar a propriedade 'isExpensive' para todos os elementos de uma categoria
  do menu.
  Caso o preço do elemento seja maior que um valor estipulado, a propriedade
  'isExpensive' recebe o valor 'Muito caro!', senão, recebe o valor 'Tá de boa!'.
  
  Exemplo: addProperty('sobremesas', 9.90);
  */
  
  function addProperty (category, value) {
    for (let index = 0; index < menu[category].length; index += 1) {
      let object = menu[category][index];
  
      if (object.price >= value) {
        object.isExpensive = 'Muito caro!';
      } else {
        object.isExpensive = 'Tá de boa!';
      }
    }
  }
  
  // addProperty('sanduiches', 30.90);
  // addProperty('acompanhamentos', 12.90);
  // console.log(menu);
  
  /* 
  Criar uma função para atualizar o preço de um produto com base no preço atual.
  Caso o preço do produto seja maior que um valor estipulado, a propriedade ‘price’ recebe um desconto também estipulado.
  
  
  Exemplo: addDiscount(‘sanduiches’, 25.00, 10);
  */
  
  const addDiscount = (category, value, discount) => {
    for (let index = 0; index < menu[category].length; index += 1) {
      let object = menu[category][index];
  
      if (object.price >= value) {
        object.price = (object.price - (object.price * discount / 100)).toFixed(2);
      }
    }
  }
  
  // addDiscount('sanduiches', 25.00, 10);
  // console.log(menu);
  
  
  /* 
  O desconto será somente para o Cadu OU Rods
  */
  
  const verifyPerson = (who, category) => {
    if (who === 'Cadu' || who === 'Rods') {
      addDiscount(category, 1.00, 10);
    }
  }
  
  // verifyPerson('Cadu', 'sanduiches');
  verifyPerson('Renan', 'sanduiches');
  console.log(menu.sanduiches);