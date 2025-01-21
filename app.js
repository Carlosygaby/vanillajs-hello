let who = [
    "Mi Iguana",
    "Mi tostadora",
    "Pedro sanchez",
    "4geeks",
    "La inflacion",
    "Romeo Santos",
  ];
  let accion = ["orino", "destruyo", "salvo", "escupio", "beso", "lanzo"];
  let what = [
    "mi telefono",
    "mi laptop",
    "mi arepa",
    "mi taza de 4geeks",
    "mi pasaporte",
    "mi dignidad",
  ];
  let when = [
    "el 24 de diciembre",
    "cuando estaba estudiando",
    "mientras me bañaba",
    "durante la clase de 4geeks",
    "a las 3 de la mañana",
    "mientras soñaba contigo",
  ];
  const recarga = () => {
    const excuse =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      accion[Math.floor(Math.random() * accion.length)] +
      " " +
      what[Math.floor(Math.random() * what.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];
    document.getElementById("excuse").innerHTML = excuse;
  };
  document.getElementById("excuse").innerHTML = recarga();