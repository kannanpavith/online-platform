const express = require('express');
const router = express.Router();
const Enrollment = require('../models/enrollment');
const authenticateToken = require('../middleware/auth');

// Enroll in a course
router.post('/', authenticateToken, async (req, res) => {
  const { course_id } = req.body;
  try {
    const newEnrollment = await Enrollment.create({
      user_id: req.user.id,
      course_id
    });
    res.status(201).json(newEnrollment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all enrollments for a user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll({ where: { user_id: req.user.id } });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an enrollment
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);
    if (!enrollment) return res.status(404).json({ message: 'Enrollment not found' });

    if (enrollment.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    await enrollment.destroy();
    res.json({ message: 'Enrollment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
