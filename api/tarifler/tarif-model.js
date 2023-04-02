/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const db = require("../../data/db-config");

const icindekileriGetir = async function (adim_id) {
  const icindekiler = await db('icindekiler_adimlar')
  .leftJoin('icindekiler','icindekiler_adimlar.icindekiler_id','icindekiler.icindekiler_id')
  .select('icindekiler.*')
  .where('adim_id',adim_id)
  return icindekiler;
};

const idIleTarifGetir = async function (tarif_id) {
    const tarifler = await db('tarifler')
    .leftJoin('adimlar','adimlar.tarif_id','tarifler.tarif_id')
    .leftJoin('icindekiler_adimlar','icindekiler_adimlar.adim_id','adimlar.adim_id')
    .leftJoin('icindekiler','icindekiler.icindekiler_id','icindekiler_adimlar.icindekiler_id')
    .select('tarifler.*',
    'adimlar.adim_id','adimlar.adim_sirasi','adimlar.adim_talimati',
    'icindekiler.icindekiler_id','icindekiler.icindekiler_adi','icindekiler.miktar'
    )
    .where('tarifler.tarif_id',tarif_id)
    if(tarifler.length === 0){
        return []
    }
    const tarifModel = {
        tarif_id: tarif_id,
        tarif_adi: tarifler[0].tarif_adi,
        kayit_tarihi: tarifler[0].kayit_tarihi,
        adimlar: []
    }
    tarifler.forEach(async tarif => {
        const adimModel = {
            adim_id: tarif.adim_id,
            adim_sirasi: tarif.adim_sirasi,
            adim_talimatlari: tarif.adim_talimatlari,
            icindekiler: []
        }
        const icindekiler = await icindekileriGetir(tarif.adim_id);
        adimModel.icindekiler = icindekiler;
        tarifModel.adimlar.push(adimModel);
    });
    return tarifModel;
};

module.exports = {
  idIleTarifGetir
};
