/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const db = require("../../data/db-config");

const idIleTarifKontrol = async function (tarif_id) {
    const tarif = await db("tarifler").where("tarifler.tarif_id", tarif_id);
    return tarif;
};

const idIleTarifGetir = async function (tarif_id) {
  const tarif = await db("tarifler").where("tarifler.tarif_id", tarif_id);

  const tarifAdimlar = await db("tarifler")
    .leftJoin("adimlar", "adimlar.tarif_id", "tarifler.tarif_id")
    .select("*")
    .where("tarifler.tarif_id", tarif_id);

  const tarifIcindekiler = await db("tarifler")
    .leftJoin("adimlar", "adimlar.tarif_id", "tarifler.tarif_id")
    .leftJoin("icindekiler", "icindekiler.adim_sirasi", "adimlar.adim_sirasi")
    .select("*")
    .where("tarifler.tarif_id", tarif_id);

  const tarifModel = {
    tarif_id: tarif[0].tarif_id,
    tarif_adi: tarif[0].tarif_adi,
    kayit_tarihi: tarif[0].kayit_tarihi,
    adimlar: [],
  };

  tarifAdimlar.length !== 0 &&
    tarifAdimlar.forEach((adim) => {
      tarifModel.adimlar.push({
        adim_id: adim.adim_id,
        adim_sirasi: adim.adim_sirasi,
        adim_talimati: adim.adim_talimati,
        icindekiler: tarifIcindekiler
          .filter((malzeme) => adim.adim_sirasi === malzeme.adim_sirasi)
          .map((malzeme) => ({
            icindekiler_id: malzeme.icindekiler_id,
            icindekiler_adi: malzeme.icindekiler_adi,
            miktar: malzeme.miktar,
          })),
      });
    });

  return tarifModel;
};

module.exports = {
  idIleTarifGetir,
  idIleTarifKontrol
};
