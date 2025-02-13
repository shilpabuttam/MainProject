import {Router} from "express";
import { getLastMonthNotifications, sendEmployeeNotification, sendTaskNotification, sendThirdPartyNotification } from "../controllers/notify.controller.js";

const userNotifyRouter = new Router();

userNotifyRouter.route("/employee-notify").post(sendEmployeeNotification)
userNotifyRouter.route("/thirdparty-notify").post(sendThirdPartyNotification)
userNotifyRouter.route("/employee-task-notfiy").post(sendTaskNotification)
userNotifyRouter.route("/notify-history").get(getLastMonthNotifications)

export default userNotifyRouter;
