'usestrict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	transactionType: { // Download/upload
		required: true,
		type: String,
	},
	folders: {
		type: Schema.Types.ObjectId,
		ref: 'Fnode',
	},
})

module.exports = mongoose.model('FNodeHistory', schema)
