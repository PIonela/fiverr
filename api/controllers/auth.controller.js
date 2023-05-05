import User from "../modules/user.model.js";

export const register = async (req, res) => {
    try {
        const newUser = new User(req.body);

        await newUser.save();
        res.status(201).send("User has been created.")
    } catch {
        res.status(500).send("Something went wrong!");
    }
}

export const login = (req, res) => {
    res.send("controller");
}

export const logout = (req, res) => {
    res.send("controller");
}
