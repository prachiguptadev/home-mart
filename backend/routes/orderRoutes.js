import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliverd,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:_id").get(protect, getOrderById);
router.route("/:_id/pay").put(protect, updateOrderToPaid);
router.route("/:_id/deliver").put(protect, admin, updateOrderToDeliverd);

export default router;
