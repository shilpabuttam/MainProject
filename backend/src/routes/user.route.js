import {Router} from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const UserRouter = new Router();

UserRouter.route("/users").get( isAuth, getUsers);
UserRouter.route("/user/:id").get( isAuth, getOneUser);
UserRouter.route("/user").post( isAuth, postUsers);
UserRouter.route("/user/:id").delete( isAuth, deleteUsers);
UserRouter.route("/user/:id").put( isAuth, updateUser);


export default UserRouter;
