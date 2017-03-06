'use strict'
const model = require('../mongo/model')
const createOne = require('../command/create-one.js')
module.exports = (req, res, next)=>{
	const { file } = req
	const { projectId } = req.query
	createOne({
		type: 'FILE',
		meta: file,
		name: file.originalname,
		size: file.size,
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


// const foo = { fieldname: 'file',
//   originalname: 'ramdaplay.js',
//   encoding: '7bit',
//   mimetype: 'application/javascript',
//   size: 7860,
//   bucket: 'coding-challenges',
//   key: '/projects/58bdb5b49d0c811c80d6c111/1488836267998/ramdaplay.js',
//   acl: 'private',
//   contentType: 'application/octet-stream',
//   contentDisposition: null,
//   storageClass: 'STANDARD',
//   metadata: null,
//   location: 'https://coding-challenges.s3.amazonaws.com//projects/58bdb5b49d0c811c80d6c111/1488836267998/ramdaplay.js',
//   etag: '"a4f53840d8912e645372b78c097285b7"' }
