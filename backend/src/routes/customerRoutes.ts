import express from "express";
import {
  getCustomers,
  processCustomer,
  deleteCustomer,
} from "../controllers/customerController";

const router = express.Router();

router.get("/", getCustomers);
router.post("/", processCustomer);
router.put("/:id", processCustomer);
router.delete("/:id", deleteCustomer);

export default router;
