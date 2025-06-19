/**
 * @module routes/api/comments
 * @description Express router for managing comments.
 *
 * Endpoints:
 * - GET    /           : Get all comments.
 * - POST   /           : Create a new comment.
 * - GET    /           : Health check endpoint (returns a simple string).
 * - GET    /:id        : Get a comment by its ID.
 * - PUT    /:id        : Update a comment by its ID.
 * - DELETE /:id        : Delete a comment by its ID.
 * - GET    /health     : Health check endpoint (returns JSON status).
 * - GET    /status     : Status endpoint (returns JSON status).
 * - GET    /info       : Info endpoint (returns API information).
 * - GET    /ping       : Ping endpoint (returns "Pong").
 * - GET    /test       : Test endpoint (returns test message).
 *
 * @requires express
 * @requires mongoose
 * @requires Comment (Mongoose model)
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: "Failed to create comment" });
    }
});

router.get("/",(req, res) => {
    res.send("Comments API is working");
});     

router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(comment);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comment" });
    }
}); 

router.put("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: "Failed to update comment" });
    }
}); 

router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
}); 

router.get("/health", (req, res) => {       
    res.status(200).json({ status: "Comments API is healthy" });
});     
router.get("/status", (req, res) => {
    res.status(200).json({ status: "Comments API is running" });
});         

router.get("/info", (req, res) => {
    res.status(200).json({ info: "Comments API provides endpoints to manage comments" });
}
);      


router.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong" });
}); 
router.get("/test", (req, res) => {
    res.status(200).json({ message: "Test endpoint is working" });
}); 