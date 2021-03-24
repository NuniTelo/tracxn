const mongoose = require('mongoose')

const {get_all_companies} = require('./scripts/all_companies')
const {get_all_people} = require('./scripts/all_people')
const {get_all_aquisition} = require('./scripts/aquisition')
const {get_all_angles} = require('./scripts/angels')
const {get_all_board_members} = require('./scripts/board_members')
const {get_all_founders} = require('./scripts/founders')
const {get_all_minicorn} = require('./scripts/minicorn')
const {get_all_soonicorn} = require('./scripts/soonicorn')
const {get_all_transaction} = require('./scripts/transaction')
const {get_all_unicorn} = require('./scripts/unicorn')

connect_to_mongo = async () => {
    await mongoose.connect('mongodb://localhost:27017/tracxn', {useNewUrlParser: true ,useUnifiedTopology: true })
}

(async () => {
    await connect_to_mongo()

    await get_all_companies()
    // await get_all_people()
    // await get_all_aquisition()
    // await get_all_angles()
    // await get_all_board_members()
    // await get_all_founders()
    // await get_all_minicorn()
    // await get_all_soonicorn()
    // await get_all_transaction()
    // await get_all_unicorn()

})();
