'use strict'
const fileHistory = require('../../file-history/mongo/model.js')
const mongoose = require('mongoose')
const { Schema } = mongoose
const schema = new mongoose.Schema({
	name: String,
	size: Number,
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	dateModified: {
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


schema.pre('save', function(next) {
	const now = new Date()
	this.updated_at = now
	if ( !this.dateCreated ) {
		this.dateCreated = now
	}
	next()
})

schema.post('update', function(doc) {
	fileHistory.create({
		type: 'update',
		fNodeId: doc._id,
	})
	.then(histObj => {
		return doc.update({ dateModified: histObj._id })
	})
	.catch(e => {throw e})
})
schema.post('remove', function(doc) {
	fileHistory.create({
		type: 'remove',
		fNodeId: doc._id,
	})
	.then(next)
	.catch(e => {throw e})
})
module.exports = mongoose.model('Fnode', schema)
