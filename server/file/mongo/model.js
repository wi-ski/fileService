'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	s3Key: {
		required: true,
		type: String,
	},
	meta: {
		fileType: String,
		fileSize: Number,
	},
	name: {
		required: true,
		type: String,
	},
	parent: { type: String, ref: 'DataType' },
})

module.exports = mongoose.model('Fnode', schema)
