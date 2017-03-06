'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose
const schema = new mongoose.Schema({
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	type: {
		require: true,
		type: String,
	},
	meta: Schema.Types.Mixed,
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
	},
	parent: { type: String, ref: 'DataType' },
})

module.exports = mongoose.model('Fnode', schema)
