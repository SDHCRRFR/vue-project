const index = (req, res) => {
    const data = ["my very", "first", "message"];
    res.send(data);
}

export { index };