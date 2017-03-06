'use strict'
'use strict'
const fnodeHistory = require('../mongo/fnode-history')
const model = require('../mongo/model')
const createOne = require('../command/create-one.js')
module.exports = (req, res, next)=>{
	const { file } = req
	const { projectId } = req.query
	createOne({
		type: 'FILE',
		meta: file,
		projectId,
	})
	.then(newFileBlob => {
		res.json(newFileBlob)
	})
	.catch(next)
}

// const createOne = require('../command/create-one')
// const findById = require('../query/find-by-id')

// module.exports = (req, res, next) => {
// 	createOne(req.body)
// .then(createdProject => findById(createdProject._id))
// .then(project => res.json(project))
// .catch(next)
// }



// module.exports = (req, res, next) => {
// 	const { projectId } = req.query
// 	findByProjId(projectId)
// 		.then(project => res.json(project))
// 		.catch(next)
// }


