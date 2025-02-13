import {Router} from "express";
import { deletePerformances, getOnePerformance, getPerformances, postPerformances, updatePerformance } from "../controllers/perform.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const performanceRouter = new Router();

performanceRouter.get("/performances", getPerformances);
performanceRouter.get("/performance/:id",isAuth, getOnePerformance);
performanceRouter.post("/performance",isAuth, postPerformances);
performanceRouter.delete("/performance/:id",isAuth, deletePerformances);
performanceRouter.put("/performance/:id",isAuth, updatePerformance);


export default performanceRouter;
