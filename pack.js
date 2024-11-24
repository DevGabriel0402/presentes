const products = [
    {
        id: 1,
        name: "Pack Academia",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1bdI1gvMEBCFXy62iRh4J8O-dszZpjzrA&export=download&authuser=0`,
    },
    {
        id: 2,
        name: "Apresentação Corporativa",
        button: "Acessar",
        href: `https://drive.google.com/file/d/1KaWWg2zcEsoxl4SKfFUSihTbeTOahJyC/view`,
    },
    {
        id: 3,
        name: "Pack de Artes Fashion",
        button: "Acessar",
        href: `https://drive.google.com/file/d/1u5zfudokgN-YhXaiyWAsWCnnyV3Neq75/view`,
    },
    {
        id: 4,
        name: "Pack de Artes Mistas",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1BQaOfTN3M4WK6x0-Jg7k7LdcfLOL3s4g&export=download&authuser=0`,
    },
    {
        id: 5,
        name: "Pack de Artes Premium",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1WBewUrx4jsBLg8Td8ptreG6cp73ljPh0&export=download&authuser=0`,
    },
    {
        id: 6,
        name: "Pack de Bares e Happy Hours",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1sT3Kn4SSZ24nuaGOPcLSgzVngRFRr0D1&export=download&authuser=0`,
    },
    {
        id: 7,
        name: "Pack de Cardápios",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1WULzGRt5a6zYD0GJbGVs3oJ5nKh0EmBy&export=download&authuser=0`,
    },
    {
        id: 8,
        name: "Pack de Cartão Digital",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1j3o1bY_-BQyKoNUeMKNSnAgI4dNi_g-H&export=download&authuser=0`,
    },
    {
        id: 9,
        name: "Pack Comércios e Vendas",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1u2-WS2H5xTUfvZixL-iWJp0ap4VNgCKg&export=download&authuser=0`,
    },
    {
        id: 10,
        name: "Pack com Cores Vivas",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1IrFSBa0yWUHVIr2mdtLR9BbasQeqzAI6&export=download&authuser=0`,
    },
    {
        id: 11,
        name: "Pack de Datas Comemorativas",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=18Uu99qe_r7URMdn1M68_Eqk3p72eABhI&export=download&authuser=0`,
    },
    {
        id: 12,
        name: "Pack de Festas e Eventos",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1fkZcdWa1AHFueCg1HkT8C1NaZqJt6hFN&export=download&authuser=0`,
    },
    {
        id: 13,
        name: "Pack de Artes Gospel",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1wyq_6SB5a6C45jiFTzdJ7SVjCXHiZXNe&export=download&authuser=0`,
    },
    {
        id: 14,
        name: "Pack de Hamburgueria",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1AGIWUx7X_Tjj3ni8yViNiNdidfBixR8L&export=download&authuser=0`,
    },
    {
        id: 15,
        name: "Pack de Imobiliária",
        button: "Acessar",
        href: `https://drive.google.com/file/d/10rkI76NNOza3ilkA_F2_nZ-7epf7M1jN/view`,
    },
    {
        id: 16,
        name: "Pack de Natal",
        button: "Acessar",
        href: `https://drive.google.com/file/d/1ReUmoQy9D8kpBuxEQ_Kci4qv9m-5WZ9d/view?usp=drive_web`,
    },
    {
        id: 17,
        name: "Pack de Informática",
        button: "Acessar",
        href: `https://drive.google.com/file/d/1G4khVbdsrwCgUqpyNOLdhmrHV_WYQDSr/view`,
    },
    {
        id: 18,
        name: "Pack de PetShop",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1lX6A4WieyqpeTMyGSppzUZ_TX5VE0VmT&export=download&authuser=0`,
    },
    {
        id: 19,
        name: "Pack de Sorveteria",
        button: "Acessar",
        href: `https://drive.usercontent.google.com/download?id=1hkjlSrR31swClpLw1bAl5yJbTfcsvtmR&export=download&authuser=0`,
    },

]


// Função para criar o HTML de um produto
function createProductHTML(product) {
    return `
          <div class="border-animate">
              <div class="product">
                  <h1>${product.name}</h1s>
                  <h2>${product.name}</h2>
                  <button onclick="handleButtonClick(${product.id})">${product.button
        }</button>
              </div>
          </div>
      `;
}

// Função para lidar com o clique no botão
function handleButtonClick(productId) {
    const product = products.find((p) => p.id === productId);

    // Verifica se o produto possui um link href
    if (product.href) {
        window.open(product.href, "_blank"); //abre o link
    }
}

// Inserir produtos na página
const productsContainer = document.getElementById("products");
products.forEach((product) => {
    productsContainer.innerHTML += createProductHTML(product);
});