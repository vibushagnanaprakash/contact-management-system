const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// POST /contacts - Add a new contact
router.post("/", async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();

        res.status(201).json({
            message: "Contact created successfully",
            contact: savedContact
        });
    } catch (error) {
        res.status(400).json({
            message: "Error creating contact",
            error: error.message
        });
    }
});

// GET /contacts - Get all contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching contacts",
            error: error.message
        });
    }
});

// GET /contacts/:id - Get contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({
            message: "Invalid contact ID",
            error: error.message
        });
    }
});

// PUT /contacts/:id - Update contact
router.put("/:id", async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact updated successfully",
            contact: updatedContact
        });
    } catch (error) {
        res.status(400).json({
            message: "Error updating contact",
            error: error.message
        });
    }
});

// DELETE /contacts/:id - Delete contact
router.delete("/:id", async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(
            req.params.id
        );

        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact deleted successfully",
            contact: deletedContact
        });
    } catch (error) {
        res.status(400).json({
            message: "Error deleting contact",
            error: error.message
        });
    }
});

module.exports = router;