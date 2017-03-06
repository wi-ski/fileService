'use strict'
const model = require('../mongo/model')
const Archiver = require('archiver')
const find = require('../command/find.js')
const {curry} = require('ramda');

const appendToArchive = curry((archive,stream,fileName)=>{
  archive.append(stream,{name:fileName}) //FILE NAME CAN BE A FODLER!!!!! /something/like/this
});
const newArchive = () => Archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});


module.exports = (req, res, next)=>{
	const { projectId } = req.query
	find({
		projectId,
	})
	.then(fileList => {

		const archive            = newArchive()
		const appendToCurArchive = appendToArchive(archive)
		archive.pipe(response)
		archive.on('error', (err)=>{throw err})
		archive.on('end', function() {})
		response.attachment('something.zip')// res.setHeader('Content-disposition', `attachment; filename=${fileId}`);
		response.setHeader('Content-Type', 'application/octet-stream')
		response.on('close', function() {



		res.json(fileList)
	})
	.catch(next)
}

