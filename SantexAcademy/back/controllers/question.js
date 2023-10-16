const { questionService } = require("../services");

const createQuestion = async (req, res) => {
  const question = req.body;
  try {
    const newQuestion = await questionService.createQuestion(question);
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ action: "createQuestion", error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const questionsFound = await questionService.getAll();
    if (!questionsFound || questionsFound.length == 0) {
      res.status(404).json({ action: "getAll", error: "Questions Not Found" });
    } else {
      res.json(questionsFound);
    }
  } catch (err) {
    res.status(500).json({ action: "getAll", error: err.message });
  }
};

const getQuestion = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const questionFound = await questionService.getQuestion(questionId);
    if (!questionFound) {
      res
        .status(404)
        .json({ action: "getQuestion", error: "Question Not Found" });
    } else {
      res.json(questionFound);
    }
  } catch (err) {
    res.status(500).json({ action: "getQuestion", error: err.message });
  }
};

const putQuestion = async (req, res) => {
  const questionId = req.params.questionId;
  const question = req.body;

  try {
    if (!questionId) {
      res
        .status(404)
        .json({ action: "updateQuestion", error: "Question Not Found" });
    } else {
      const updatedQuestion = await questionService.putQuestion(
        questionId,
        question
      );
      res.json(updatedQuestion);
    }
  } catch (err) {
    res.status(500).json({ action: "putQuestion", error: err.message });
  }
};

const deleteQuestion = async (req, res) => {
  const questionId = req.params.questionId;
  try {
    const question = await questionService.deleteQuestion(questionId);
    if (!question) {
      res
        .status(404)
        .json({ action: "deleteQuestion", error: "Question Not Found" });
    } else {
      res.json(question);
    }
  } catch (err) {
    res.status(500).json({ action: "deleteQuestion", error: err.message });
  }
};

module.exports = {
  createQuestion,
  getAll,
  /* getAllQuestions, getAllAnswers, */ getQuestion,
  putQuestion,
  deleteQuestion,
};
