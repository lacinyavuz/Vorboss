import { Request, Response } from "express";
import { Customer } from "../models/customerModel";
import { Chamber } from "../models/chamberModel";

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const processCustomer = async (req: Request, res: Response) => {
  const { id: customerId } = req.params;
  let customer: InstanceType<typeof Customer>;

  if (customerId) {
    try {
      // upgrade journey
      const retrievedCustomer = await Customer.findById(customerId);
      if (!retrievedCustomer) throw new Error("Customer cannot be found");
      else customer = retrievedCustomer;
      customer.diverse = true;
    } catch (error: any) {
      res.status(400).json({ message: error.message });
      return;
    }
  } else {
    customer = new Customer(req.body);
  }

  const chambers = await Chamber.find();

  const aggregateUsedCapacity = await Customer.aggregate([
    { $unwind: "$chambers" },
    { $group: { _id: "$chambers", sum: { $sum: 10 } } },
  ]);

  const usedCapacity = aggregateUsedCapacity.reduce((agg, item) => {
    agg[item._id] = item.sum;
    return agg;
  }, {});

  chambers.sort((a, b) => {
    const distanceA = Math.hypot(
      a.latitude - customer.latitude,
      a.longitude - customer.longitude
    );
    const distanceB = Math.hypot(
      b.latitude - customer.latitude,
      b.longitude - customer.longitude
    );
    if (distanceA > distanceB) return 1;
    else return -1;
  });

  let nearestChamberFull = false;
  let chamberNowFull = [];
  let lastChamberNetwork = chambers.find(
    ({ _id }) => _id === customer.chambers[0]
  )?.network;
  customer.chambers = customer.chambers || [];

  for (let i = 0; i < chambers.length; i++) {
    const chamber = chambers[i];

    if (chamber.capacity - usedCapacity[chamber._id] >= 10) {
      if (!customer.chambers.length || chamber.network !== lastChamberNetwork) {
        customer.chambers.push(chamber._id);
        lastChamberNetwork = chamber.network;
        if (usedCapacity[chamber._id] === 90) chamberNowFull.push(chamber._id);
      }

      if (customer.diverse && customer.chambers.length < 2) {
        continue;
      } else {
        break;
      }
    }

    if (i === 0) nearestChamberFull = true;
  }

  if (!customer.chambers.length) {
    res.status(400).json({ message: "No capacity available" });
    return;
  }

  if (customer.diverse && customer.chambers.length === 1) {
    res.status(400).json({
      message: `No capacity in ${
        lastChamberNetwork === "East" ? "West" : "East"
      } network.`,
    });
    return;
  }

  try {
    const newCustomer = await customer.save();
    res.status(201).json({ newCustomer, nearestChamberFull, chamberNowFull });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Customer.findByIdAndDelete(id);
    res.json({ message: "Customer deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
