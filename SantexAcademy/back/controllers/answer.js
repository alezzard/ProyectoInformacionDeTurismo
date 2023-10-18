const { answerService } = require("../services");

const createAnswer = async (req, res) => {
  const body = req.body;
  try {
    const newAnswer = await answerService.createAnswer(body);
    res.status(201).json(newAnswer);
  } catch (err) {
    res.status(500).json({ action: "createAnswer", error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const answersFound = await answerService.getAll();
    if (!answersFound || answersFound.length == 0) {
      res.status(404).json({ action: "getAll", error: "Answers Not Found" });
    } else {
      res.json(answersFound);
    }
  } catch (err) {
    res.status(500).json({ action: "getAll", error: err.message });
  }
};

const getAnswer = async (req, res) => {
  try {
    const answerId = req.params;
    const answerFound = await answerService.getAnswer(answerId);
    if (!answerFound) {
      res.status(404).json({ action: "getAnswer", error: "Answer Not Found" });
    } else {
      res.json(answerFound);
    }
  } catch (err) {
    res.status(500).json({ action: "getAnswer", error: err.message });
  }
};

const deleteAnswer = async (req, res) => {
  const answerId = req.params.answerId;
  try {
    const answer = await answerService.deleteAnswer(answerId);
    if (!answer) {
      res
        .status(404)
        .json({ action: "deleteAnswer", error: "Answer Not Found" });
    } else {
      res.json(answer);
    }
  } catch (err) {
    res.status(500).json({ action: "deleteAnswer", error: err.message });
  }
};

module.exports = { createAnswer, getAll, getAnswer, deleteAnswer };
