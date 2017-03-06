'use strict'
const model = require('../mongo/model')
const createOne = require('../command/create-one.js')
module.exports = (req, res, next)=>{
	const { file } = req
	const { projectId, parentId } = req.query
	createOne({
		type: 'FILE',
		meta: file,
		name: file.originalname,
		size: file.size,
		projectId,
		parentId,
	})
	.then(newFileBlob => {
		res.json(newFileBlob)
	})
	.catch(next)
}

