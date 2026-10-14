const dashboard = (req, res) => {
    res.status(200).json({ message: "Welcome to the dashboard!", user: req.user });
}


export default dashboard