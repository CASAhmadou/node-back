/**
 * 
 */
const notFound = (req, res) => {
    res.status(404)
    .json({ error: 'Request not found' })
}

export { notFound }