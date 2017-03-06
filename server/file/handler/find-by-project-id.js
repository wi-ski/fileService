'use strict'
const findByProjId = require('../query/find-by-project-id.js')
const model = require('../mongo/model')

module.exports = (req, res, next) => {
	const { projectId } = req.query
	findByProjId(projectId)
		.then(project => res.json(project))
		.catch(next)
}

