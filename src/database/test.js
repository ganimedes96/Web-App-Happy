const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    id: 2,
    lat: "-27.222633",
    lng: "-49.6456874",
    name: "Lar das meninas",
    about: "Prestar assistencia a criancas de 06 a 15 anos",
    whatsapp:"86981188385",
    images: [
      "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjMwMzQ2NjQy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",

      "https://images.unsplash.com/photo-1614270246588-98b5863a877c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjMwMzQ2NzU2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ].toString(),
    instructions:
      "Venha como se sentir a avontade e traga amor e paciencia para dar.",
    opening_hours: "Horario de visitas Das 18h ate 8h",
    open_on_weekends: "0",
  });

  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato, pelo id
 // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
 // console.log(orphanage);
/* 
  //deletar dados na tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
*/
});
