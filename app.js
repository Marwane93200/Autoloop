const KEY = "autoloop_v05";

const cars = {
  Renault: {
    Mégane: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    Clio: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    Captur: ["2019", "2020", "2021", "2022", "2023", "2024"]
  },
  Peugeot: {
    208: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    308: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    3008: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  },
  Citroën: {
    C3: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    C4: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  },
  Volkswagen: {
    Golf: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    Polo: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  },
  BMW: {
    Serie1: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    Serie3: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  },
  Mercedes: {
    ClasseA: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    ClasseC: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  },
  Audi: {
    A3: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    A4: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
  }
};

const seed = [
  {
    id: 1,
    name: "Kit plaquettes de frein avant",
    brand: "Brembo",
    vehicle: "Renault Mégane 2018",
    engine: "1.5 dCi 110",
    price: 69.90,
    stock: 8,
    seller: "AutoParts Pro",
    image: ""
  },
  {
    id: 2,
    name: "Filtre à huile",
    brand: "Bosch",
    vehicle: "Peugeot 308 2020",
    engine: "1.6 HDi",
    price: 12.50,
    stock: 24,
    seller: "Pièces Express",
    image: ""
  }
];

let db = JSON.parse(localStorage.getItem(KEY) || "null") || {
  products: seed,
  cart: [],
  orders: [],
  accounts: [],
  seller: null,
  pendingVerification: null
};

function save() {
  localStorage.setItem(KEY, JSON.stringify(db));
  updateCart();
}

function money(value) {
  return Number(value).toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });
}

function updateCart() {
  const el = document.querySelector("#cartCount");

  if (el) {
    el.textContent = db.cart.reduce(
      (sum, item) => sum + item.qty,
      0
    );
  }
}

function brandOptions() {
  return Object.keys(cars)
    .map(brand => `<option>${brand}</option>`)
    .join("");
}

function modelOptions(brand) {
  return Object.keys(cars[brand] || {})
    .map(model => `<option>${model}</option>`)
    .join("");
}

function yearOptions(brand, model) {
  return (cars[brand]?.[model] || ["2024"])
    .map(year => `<option>${year}</option>`)
    .join("");
}

function show(page) {
  const app = document.querySelector("#app");

  if (!app) return;

  if (page === "home") app.innerHTML = home();
  if (page === "catalogue") app.innerHTML = catalogue();
  if (page === "sell") app.innerHTML = sell();
  if (page === "login") app.innerHTML = login();
  if (page === "verify") app.innerHTML = verify();
  if (page === "dashboard") app.innerHTML = dashboard();
  if (page === "addproduct") app.innerHTML = addProduct();
  if (page === "cart") app.innerHTML = cart();

  updateCart();

  if (page === "addproduct") {
    preparePhotoInput();
  }
}

function home() {
  return `
    <section class="wrap hero">

      <p class="eyebrow">MARKETPLACE AUTO</p>

      <h1>
        La bonne pièce.<br>
        <span>Pour la bonne voiture.</span>
      </h1>

      <p class="lead">
        Pièces automobiles neuves vendues
        par des professionnels.
      </p>

      <div class="finder">

        <select id="carBrand" onchange="updateModels()">
          ${brandOptions()}
        </select>

        <select id="carModel" onchange="updateYears()">
          ${modelOptions("Renault")}
        </select>

        <select id="carYear">
          ${yearOptions("Renault", "Mégane")}
        </select>

        <button
          class="btn primary"
          onclick="show('catalogue')">
          Rechercher
        </button>

      </div>

      <div class="hero-actions">

        <button
          class="btn dark"
          onclick="show('sell')">
          Devenir vendeur
        </button>

        <button
          class="btn"
          onclick="show('catalogue')">
          Voir le catalogue
        </button>

      </div>

    </section>
  `;
}

function updateModels() {
  const brand = document.querySelector("#carBrand");
  const model = document.querySelector("#carModel");
  const year = document.querySelector("#carYear");

  if (!brand || !model || !year) return;

  model.innerHTML = modelOptions(brand.value);
  year.innerHTML = yearOptions(
    brand.value,
    model.value
  );
}

function updateYears() {
  const brand = document.querySelector("#carBrand");
  const model = document.querySelector("#carModel");
  const year = document.querySelector("#carYear");

  if (!brand || !model || !year) return;

  year.innerHTML = yearOptions(
    brand.value,
    model.value
  );
} function catalogue() {
  return `
    <section class="wrap">

      <p class="eyebrow">CATALOGUE</p>

      <div class="section-title">

        <h2>Pièces disponibles</h2>

        <input
          class="input"
          placeholder="Rechercher..."
          oninput="search(this.value)"
        >

      </div>

      <div
        id="products"
        class="grid">

        ${productCards(db.products)}

      </div>

    </section>
  `;
}

function productCards(list) {

  if (!list.length) {
    return `
      <div class="empty">
        Aucune pièce trouvée.
      </div>
    `;
  }

  return list.map(product => {

    const image = product.image
      ? `
        <img
          src="${product.image}"
          alt="${product.name}"
          style="
            width:100%;
            height:220px;
            object-fit:cover;
            border-radius:16px 16px 0 0;
          "
        >
      `
      : `
        <div class="pic">
          PIÈCE AUTO
        </div>
      `;

    return `
      <article class="product">

        ${image}

        <div class="pbody">

          <div class="small">
            ${product.brand}
            ·
            ${product.seller}
          </div>

          <h3>
            ${product.name}
          </h3>

          <div class="small">
            ${product.vehicle}
          </div>

          ${
            product.engine
            ?
            `<div class="small">
              ${product.engine}
            </div>`
            :
            ""
          }

          <div class="price">
            ${money(product.price)}
          </div>

          <div class="small">
            Stock : ${product.stock}
          </div>

          <div class="row">

            <button
              class="btn primary"
              style="flex:1"
              onclick="add(${product.id})">
              Ajouter
            </button>

            <button
              class="btn dark"
              onclick="details(${product.id})">
              Voir
            </button>

          </div>

        </div>

      </article>
    `;

  }).join("");
}

function search(query) {

  const text = query.toLowerCase();

  const products = db.products.filter(product => {

    return (
      product.name +
      " " +
      product.brand +
      " " +
      product.vehicle +
      " " +
      product.seller
    )
      .toLowerCase()
      .includes(text);

  });

  const container =
    document.querySelector("#products");

  if (container) {
    container.innerHTML =
      productCards(products);
  }
}

function details(id) {

  const product =
    db.products.find(p => p.id === id);

  if (!product) return;

  alert(
    product.name +
    "\n\n" +
    product.vehicle +
    "\n" +
    (product.engine || "") +
    "\n\nVendeur : " +
    product.seller +
    "\n\nPrix : " +
    money(product.price) +
    "\n\nStock : " +
    product.stock
  );
}

function add(id) {

  const product =
    db.products.find(p => p.id === id);

  if (!product) return;

  if (product.stock <= 0) {
    alert("Cette pièce est en rupture de stock.");
    return;
  }

  const existing =
    db.cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    db.cart.push({
      id: id,
      qty: 1
    });
  }

  save();

  alert("Pièce ajoutée au panier.");
}

function cart() {

  let total = 0;

  const rows = db.cart.map(item => {

    const product =
      db.products.find(p => p.id === item.id);

    if (!product) return "";

    total +=
      product.price * item.qty;

    return `
      <tr>

        <td>
          ${product.name}
        </td>

        <td>
          ${product.seller}
        </td>

        <td>
          ${item.qty}
        </td>

        <td>
          ${money(product.price * item.qty)}
        </td>

        <td>
          <button
            class="btn"
            onclick="removeCart(${product.id})">
            ×
          </button>
        </td>

      </tr>
    `;

  }).join("");

  return `
    <section class="wrap">

      <p class="eyebrow">
        COMMANDE
      </p>

      <h2>
        Panier
      </h2>

      ${
        rows
        ?
        `
          <table class="table">

            <tr>
              <th>Produit</th>
              <th>Vendeur</th>
              <th>Qté</th>
              <th>Total</th>
              <th></th>
            </tr>

            ${rows}

          </table>

          <div
            style="
              text-align:right;
              margin-top:25px;
            "
          >

            <div class="total">
              ${money(total)}
            </div>

            <button
              class="btn primary"
              onclick="checkout()">
              Créer la commande
            </button>

          </div>
        `
        :
        `
          <div class="empty">
            Votre panier est vide.
          </div>
        `
      }

    </section>
  `;
}

function removeCart(id) {

  db.cart =
    db.cart.filter(
      item => item.id !== id
    );

  save();

  show("cart");
}

function checkout() {

  if (!db.cart.length) {
    alert("Votre panier est vide.");
    return;
  }

  let total = 0;

  db.cart.forEach(item => {

    const product =
      db.products.find(p => p.id === item.id);

    if (product) {
      total +=
        product.price * item.qty;
    }

  });

  db.orders.push({
    id: "AL-" + Date.now(),
    date: new Date().toLocaleDateString("fr-FR"),
    total: total,
    status: "En préparation"
  });

  db.cart = [];

  save();

  alert(
    "Commande créée.\n\n" +
    "Paiement encore simulé."
  );

  show("home");
}function sell() {

  return `
    <section class="wrap">

      <div class="auth">

        <p class="eyebrow">
          PROFESSIONNELS
        </p>

        <h2>
          Devenir vendeur
        </h2>

        <div class="notice">

          Création de compte avec
          vérification email et téléphone.

          <br><br>

          Dans le prototype,
          les codes sont affichés à l'écran.

        </div>

        <form
          class="card form"
          onsubmit="register(event)"
        >

          <label>
            Nom de l'entreprise
          </label>

          <input
            id="rname"
            class="input"
            required
            placeholder="Auto Pièces 94"
          >

          <label>
            Adresse email
          </label>

          <input
            id="remail"
            class="input"
            type="email"
            required
            placeholder="contact@entreprise.fr"
          >

          <label>
            Téléphone
          </label>

          <input
            id="rphone"
            class="input"
            type="tel"
            required
            placeholder="06 12 34 56 78"
          >

          <label>
            Mot de passe
          </label>

          <input
            id="rpass"
            class="input"
            type="password"
            minlength="8"
            required
            placeholder="8 caractères minimum"
          >

          <label>
            Ville
          </label>

          <input
            id="rcity"
            class="input"
            required
            placeholder="Paris"
          >

          <br>

          <button
            class="btn primary"
            type="submit">
            Créer mon compte
          </button>

        </form>

        <p>
          Déjà inscrit ?

          <span
            class="smalllink"
            onclick="show('login')">
            Se connecter
          </span>
        </p>

      </div>

    </section>
  `;
}

async function register(event) {

  event.preventDefault();

  const email =
    document
      .querySelector("#remail")
      .value
      .trim()
      .toLowerCase();

  const phone =
    document
      .querySelector("#rphone")
      .value
      .trim();

  if (
    db.accounts.some(
      account => account.email === email
    )
  ) {

    alert(
      "Cette adresse email est déjà utilisée."
    );

    return;
  }

  const password =
    document
      .querySelector("#rpass")
      .value;

  const passwordHash =
    await hashPassword(password);

  const emailCode =
    String(
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );

  const phoneCode =
    String(
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );

  const account = {

    id: Date.now(),

    name:
      document
        .querySelector("#rname")
        .value
        .trim(),

    email: email,

    phone: phone,

    city:
      document
        .querySelector("#rcity")
        .value
        .trim(),

    passHash:
      passwordHash,

    emailVerified: false,

    phoneVerified: false

  };

  db.accounts.push(account);

  db.pendingVerification = {

    accountId:
      account.id,

    emailCode:
      emailCode,

    phoneCode:
      phoneCode

  };

  save();

  show("verify");
}

function verify() {

  const pending =
    db.pendingVerification;

  if (!pending) {
    return sell();
  }

  return `
    <section class="wrap">

      <div class="auth">

        <p class="eyebrow">
          SÉCURITÉ DU COMPTE
        </p>

        <h2>
          Vérifie ton compte
        </h2>

        <div class="notice">

          Prototype :

          <br>

          les codes sont affichés
          à l'écran.

          <br><br>

          Dans la vraie version,
          ils seront envoyés par email
          et SMS.

        </div>

        <div class="card">

          <p>
            <strong>
              Code email :
            </strong>

            <span class="pill">
              ${pending.emailCode}
            </span>
          </p>

          <p>
            <strong>
              Code téléphone :
            </strong>

            <span class="pill">
              ${pending.phoneCode}
            </span>
          </p>

          <label>
            Code email
          </label>

          <input
            id="emailCode"
            class="input"
            inputmode="numeric"
            maxlength="6"
            required
          >

          <label>
            Code téléphone
          </label>

          <input
            id="phoneCode"
            class="input"
            inputmode="numeric"
            maxlength="6"
            required
          >

          <br>

          <button
            class="btn primary"
            onclick="completeVerification()">
            Vérifier mon compte
          </button>

        </div>

      </div>

    </section>
  `;
}

function completeVerification() {

  const pending =
    db.pendingVerification;

  if (!pending) {
    show("sell");
    return;
  }

  const email =
    document
      .querySelector("#emailCode")
      .value
      .trim();

  const phone =
    document
      .querySelector("#phoneCode")
      .value
      .trim();

  if (
    email !== pending.emailCode ||
    phone !== pending.phoneCode
  ) {

    alert(
      "Code email ou téléphone incorrect."
    );

    return;
  }

  const account =
    db.accounts.find(
      account =>
        account.id === pending.accountId
    );

  if (!account) {
    alert("Compte introuvable.");
    return;
  }

  account.emailVerified = true;
  account.phoneVerified = true;

  db.seller = {
    ...account
  };

  db.pendingVerification = null;

  save();

  alert(
    "Compte vérifié avec succès !"
  );

  show("dashboard");
}

function login() {

  return `
    <section class="wrap">

      <div class="auth">

        <p class="eyebrow">
          CONNEXION
        </p>

        <h2>
          Espace vendeur
        </h2>

        <form
          class="card form"
          onsubmit="doLogin(event)"
        >

          <label>
            Adresse email
          </label>

          <input
            id="lemail"
            class="input"
            type="email"
            required
          >

          <label>
            Mot de passe
          </label>

          <input
            id="lpass"
            class="input"
            type="password"
            required
          >

          <br>

          <button
            class="btn primary"
            type="submit">
            Se connecter
          </button>

        </form>

        <p>
          Pas encore de compte ?

          <span
            class="smalllink"
            onclick="show('sell')">
            Créer un compte
          </span>
        </p>

      </div>

    </section>
  `;
}

async function doLogin(event) {

  event.preventDefault();

  const email =
    document
      .querySelector("#lemail")
      .value
      .trim()
      .toLowerCase();

  const password =
    document
      .querySelector("#lpass")
      .value;

  const hash =
    await hashPassword(password);

  const account =
    db.accounts.find(
      account =>
        account.email === email &&
        account.passHash === hash
    );

  if (!account) {
    alert(
      "Email ou mot de passe incorrect."
    );
    return;
  }

  if (
    !account.emailVerified ||
    !account.phoneVerified
  ) {

    alert(
      "Ton compte n'est pas encore vérifié."
    );

    return;
  }

  db.seller = {
    ...account
  };

  save();

  show("dashboard");
}function dashboard() {

  if (!db.seller) {
    return login();
  }

  const mine =
    db.products.filter(
      product =>
        product.seller === db.seller.name
    );

  return `
    <section class="wrap">

      <div class="seller-head">

        <div>

          <p class="eyebrow">
            ESPACE VENDEUR
          </p>

          <h2>
            ${db.seller.name}
          </h2>

          <p class="muted">
            ${db.seller.email}
            ·
            ${db.seller.phone}
            ·
            ${db.seller.city}
          </p>

          <p>

            <span class="pill">
              Email vérifié ✓
            </span>

            <span class="pill">
              Téléphone vérifié ✓
            </span>

          </p>

        </div>

        <button
          class="btn"
          onclick="logout()">
          Déconnexion
        </button>

      </div>

      <div class="two">

        <div class="card">

          <h3>
            Mes produits
          </h3>

          <div class="total">
            ${mine.length}
          </div>

          <p class="muted">
            produits publiés
          </p>

          <button
            class="btn primary"
            onclick="show('addproduct')">
            + Ajouter une pièce
          </button>

        </div>

        <div class="card">

          <h3>
            Mes commandes
          </h3>

          <div class="total">
            ${db.orders.length}
          </div>

          <p class="muted">
            commandes
          </p>

        </div>

      </div>

      <br>

      <h3>
        Mon catalogue
      </h3>

      ${
        mine.length
        ?
        `
          <div class="grid">
            ${productCards(mine)}
          </div>
        `
        :
        `
          <div class="empty">
            Aucune pièce publiée.
            <br><br>
            Ajoute ta première pièce.
          </div>
        `
      }

    </section>
  `;
}

function addProduct() {

  if (!db.seller) {
    return login();
  }

  return `
    <section class="wrap">

      <div class="form">

        <p class="eyebrow">
          VENDEUR
        </p>

        <h2>
          Ajouter une pièce
        </h2>

        <form
          id="productForm"
          class="card"
          onsubmit="publish(event)"
        >

          <label>
            Nom de la pièce
          </label>

          <input
            id="pname"
            class="input"
            required
            placeholder="Ex. Plaquettes de frein avant"
          >

          <label>
            Marque de la pièce
          </label>

          <input
            id="pbrand"
            class="input"
            required
            placeholder="Brembo"
          >

          <label>
            Photo de la pièce
          </label>

          <input
            id="productPhoto"
            class="input"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            capture="environment"
            required
          >

          <div
            id="photoPreview"
            style="
              margin-top:15px;
            "
          ></div>

          <label>
            Véhicule compatible
          </label>

          <div class="finder compact">

            <select
              id="pCarBrand"
              onchange="updateProductModels()"
            >
              ${brandOptions()}
            </select>

            <select
              id="pCarModel"
              onchange="updateProductYears()"
            >
              ${modelOptions("Renault")}
            </select>

            <select
              id="pCarYear"
            >
              ${yearOptions("Renault", "Mégane")}
            </select>

          </div>

          <label>
            Motorisation
          </label>

          <input
            id="pengine"
            class="input"
            placeholder="Ex. 1.5 dCi 110"
          >

          <label>
            Prix (€)
          </label>

          <input
            id="pprice"
            class="input"
            type="number"
            step="0.01"
            min="0"
            required
          >

          <label>
            Stock disponible
          </label>

          <input
            id="pstock"
            class="input"
            type="number"
            min="1"
            required
          >

          <br>

          <button
            class="btn primary"
            type="submit">
            Publier la pièce
          </button>

        </form>

      </div>

    </section>
  `;
}

function preparePhotoInput() {

  const input =
    document.querySelector(
      "#productPhoto"
    );

  const preview =
    document.querySelector(
      "#photoPreview"
    );

  if (!input || !preview) {
    return;
  }

  input.addEventListener(
    "change",
    function () {

      const file =
        this.files[0];

      if (!file) {
        preview.innerHTML = "";
        return;
      }

      if (
        !file.type.startsWith("image/")
      ) {

        alert(
          "Sélectionne une image."
        );

        this.value = "";
        return;
      }

      const reader =
        new FileReader();

      reader.onload =
        function (event) {

          preview.innerHTML = `
            <img
              src="${event.target.result}"
              alt="Photo de la pièce"
              style="
                width:100%;
                max-width:450px;
                max-height:300px;
                object-fit:cover;
                border-radius:16px;
                display:block;
              "
            >
          `;

        };

      reader.readAsDataURL(file);

    }
  );
}

function updateProductModels() {

  const brand =
    document.querySelector(
      "#pCarBrand"
    );

  const model =
    document.querySelector(
      "#pCarModel"
    );

  const year =
    document.querySelector(
      "#pCarYear"
    );

  if (!brand || !model || !year) {
    return;
  }

  model.innerHTML =
    modelOptions(brand.value);

  year.innerHTML =
    yearOptions(
      brand.value,
      model.value
    );
}

function updateProductYears() {

  const brand =
    document.querySelector(
      "#pCarBrand"
    );

  const model =
    document.querySelector(
      "#pCarModel"
    );

  const year =
    document.querySelector(
      "#pCarYear"
    );

  if (!brand || !model || !year) {
    return;
  }

  year.innerHTML =
    yearOptions(
      brand.value,
      model.value
    );
}function publish(event) {

  event.preventDefault();

  const fileInput =
    document.querySelector(
      "#productPhoto"
    );

  const file =
    fileInput.files[0];

  if (!file) {

    alert(
      "Ajoute une photo de la pièce."
    );

    return;
  }

  const reader =
    new FileReader();

  reader.onload =
    function () {

      const brand =
        document.querySelector(
          "#pCarBrand"
        ).value;

      const model =
        document.querySelector(
          "#pCarModel"
        ).value;

      const year =
        document.querySelector(
          "#pCarYear"
        ).value;

      const engine =
        document.querySelector(
          "#pengine"
        ).value
        .trim();

      const vehicle =
        `${brand} ${model} ${year}` +
        (
          engine
          ? ` · ${engine}`
          : ""
        );

      const product = {

        id: Date.now(),

        name:
          document
            .querySelector("#pname")
            .value
            .trim(),

        brand:
          document
            .querySelector("#pbrand")
            .value
            .trim(),

        vehicle:
          vehicle,

        engine:
          engine,

        price:
          Number(
            document
              .querySelector("#pprice")
              .value
          ),

        stock:
          Number(
            document
              .querySelector("#pstock")
              .value
          ),

        seller:
          db.seller.name,

        image:
          reader.result

      };

      db.products.unshift(product);

      save();

      alert(
        "Pièce publiée dans AUTOLOOP !"
      );

      show("dashboard");
    };

  reader.readAsDataURL(file);
}

function logout() {

  db.seller = null;

  save();

  show("home");
}

async function hashPassword(value) {

  const data =
    new TextEncoder()
      .encode(value);

  const buffer =
    await crypto.subtle.digest(
      "SHA-256",
      data
    );

  return [
    ...new Uint8Array(buffer)
  ]
    .map(
      byte =>
        byte
          .toString(16)
          .padStart(2, "0")
    )
    .join("");
}

show("home");
