const express = require('express')
const router = express.Router()
const Project = require('../models/Projects')

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find()
    res.status(200).json({ data: projects })
  } catch (error) {
    console.error('The Project get methods is not working.', error.message)
  }
})
router.post('/add-project', async (req, res) => {
  const projectData = req.body
  console.log(projectData)
  try {
    const project = new Project(projectData)
    await project.save()
    console.log('Project added!')
    res.status(201).json('Project Created!')
  } catch (error) {
    console.error('Add Project Error: ', error.message)
  }
})

module.exports = router
