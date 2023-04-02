/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tarifler").insert({
    tarif_adi: "Spagetti Bolonez",
    tarif_id: 1,
  });
  await knex("adimlar").insert([
    {
      adim_sirasi: 1,
      adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
      tarif_id: 1,
    },
    {
      adim_sirasi: 2,
      adim_talimati: "Üzerine biraz tuz serpin",
      tarif_id: 1,
    },
    {
      adim_sirasi: 3,
      adim_talimati: "1 yemek kaşığı zeytinyağı ekleyin",
      tarif_id: 1,
    },
    {
      adim_sirasi: 4,
      adim_talimati: "Kaynar suda 10dk pişirin",
      tarif_id: 1,
    },
    {
      adim_sirasi: 5,
      adim_talimati: "Makarnayı süzün",
      tarif_id: 1,
    },
    {
      adim_sirasi: 6,
      adim_talimati: "Tabaklara servis edin",
      tarif_id: 1,
    },
    {
      adim_sirasi: 7,
      adim_talimati: "Üzerine yarım bardak bolonez sosu dökün",
      tarif_id: 1,
    },
  ]);
  await knex("icindekiler").insert([
    {
      icindekiler_adi: "tuz",
      miktar: 'bir tutam',
      adim_sirasi: 2,
      tarif_id: 1,
    },
    {
      icindekiler_adi: "zeytinyağı",
      miktar: 'bir kaşık',
      adim_sirasi: 3,
      tarif_id: 1,
    },
    {
      icindekiler_adi: "bolonez sos",
      miktar: 'yarım bardak',
      adim_sirasi: 7,
      tarif_id: 1,
    },
    {
      icindekiler_adi: "feslegen",
      miktar: 'bir tutam',
      adim_sirasi: 7,
      tarif_id: 1,
    },
  ]);
};
