const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/bookController")

const router = require("express").Router()

router.route("/").get(fetchBooks).post(addBook)
router.route("/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)

//router.get("/books",fetchBook)
//router.post("/books",addBook)  / yesari garna milxa

module.exports = router



