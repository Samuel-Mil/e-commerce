import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import routes from "./router";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ Error: err.message });
  }

  return res.status(500).json({
    status: 500,
    message: "Internal server error!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
