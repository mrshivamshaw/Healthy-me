import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token || !token.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization header is missing or incorrectly formatted" });
        }

        const extractedToken = token.replace("Bearer ", "");

        try {
            const decodedToken = jwt.verify(extractedToken, process.env.SECRET_KEY);
            req.user = decodedToken; // Attach the decoded token to the request object
            return next(); // Move to the next middleware or route handler
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({ message: "Token has expired" });
            }
            console.log(error);
            return res.status(401).json({ message: "Invalid token" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", error: error });
    }
};
