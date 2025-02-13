import {Router} from "express";
import { deleteCompanies, getOneCompany, getCompanies, postCompanies, updateCompany } from "../controllers/comp.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const companyRouter = new Router();

companyRouter.route("/companies").get(getCompanies);
companyRouter.route("/company/:id").get(isAuth, getOneCompany);
companyRouter.route("/company").post(isAuth, postCompanies);
companyRouter.route("/company/:id").delete(isAuth, deleteCompanies);
companyRouter.route("/company/:id").put(isAuth, updateCompany);


export default companyRouter;
