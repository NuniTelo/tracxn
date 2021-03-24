const mongoose = require('mongoose');

const board_members = new mongoose.Schema({}, { strict: false });
const founders = new mongoose.Schema({}, { strict: false });
const angels = new mongoose.Schema({}, { strict: false });
const all_people = new mongoose.Schema({}, { strict: false });
const all_companies = new mongoose.Schema({}, { strict: false });
const unicorn = new mongoose.Schema({}, { strict: false });
const soonicorn = new mongoose.Schema({}, { strict: false });
const minicorn = new mongoose.Schema({}, { strict: false });
const transaction = new mongoose.Schema({}, { strict: false });
const aquisition = new mongoose.Schema({}, { strict: false });


module.exports = {
    board_members: mongoose.model('board_members', board_members),
    founders: mongoose.model('founders', founders),
    angels: mongoose.model('angels', angels),
    all_people: mongoose.model('all_people', all_people),
    all_companies: mongoose.model('all_companies', all_companies),
    unicorn: mongoose.model('unicorn', unicorn),
    soonicorn: mongoose.model('soonicorn',soonicorn),
    minicorn: mongoose.model('minicorn',minicorn),
    transaction: mongoose.model('transaction',transaction),
    aquisition: mongoose.model('aquisition',aquisition)
}