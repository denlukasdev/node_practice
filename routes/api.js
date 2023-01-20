import {Router} from "express";
import taskController from "../controller/task.js";
import trimRequest from "trim-request";

const router = Router();

/**
 * Get list of tasks from database
 */
router.get(
    '/task/list',
    trimRequest.all,
    taskController.getList
);

/**
 * Get task by id from database
 */
router.get(
    '/task/get/:id',
    trimRequest.all,
    taskController.getById
);

/**
 * Create task
 * post body example {"time": "Morning", "task": "Take a breakfast"}
 */
router.post(
    '/task/create',
    trimRequest.all,
    taskController.create
);

/**
 * Edit task by id
 * post body example {"time": "Morning", "task": "Take a breakfast"} 
 */
router.post(
    '/task/edit/:id',
    trimRequest.all,
    taskController.editById
);

/**
 * Delete task by id
 */
router.delete(
    '/task/delete/:id',
    trimRequest.all,
    taskController.deleteById
);

export default router;
