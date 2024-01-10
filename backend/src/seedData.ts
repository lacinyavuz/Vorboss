import { Chamber } from "./models/chamberModel";
import { Customer } from "./models/customerModel";

export const seedData = async () => {
  await Chamber.deleteMany();
  await Customer.deleteMany();

  const chamberX8734 = await Chamber.create({
    _id: "VORB-X8734",
    capacity: 100,
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    network: "East",
  });
  await chamberX8734.save();

  const X8734cust1 = new Customer({
    name: "Raven",
    address: "1 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust1.save();

  const X8734cust2 = new Customer({
    name: "Tyler",
    address: "2 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust2.save();

  const X8734cust3 = new Customer({
    name: "Cecil",
    address: "3 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust3.save();

  const X8734cust4 = new Customer({
    name: "Robin",
    address: "4 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust4.save();

  const X8734cust5 = new Customer({
    name: "Bowie",
    address: "5 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust5.save();

  const X8734cust6 = new Customer({
    name: "Nolan",
    address: "6 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust6.save();

  const X8734cust7 = new Customer({
    name: "Neale",
    address: "7 X8734 str",
    postcode: "X873 4VB",
    latitude: 51.52466903333144,
    longitude: -0.08320212364196779,
    chambers: [chamberX8734._id],
  });
  await X8734cust7.save();

  const chamberZ4784 = await Chamber.create({
    _id: "VORB-Z4784",
    capacity: 100,
    latitude: 51.523641015718525,
    longitude: -0.08601307868957521,
    network: "West",
  });
  await chamberZ4784.save();
  const Z4784cust1 = new Customer({
    name: "Aiden",
    address: "1 Z4784 str",
    postcode: "Z478 4VB",
    latitude: 51.523641015718525,
    longitude: -0.08601307868957521,
    chambers: [chamberZ4784._id],
  });
  await Z4784cust1.save();

  const chamberN2837 = await Chamber.create({
    _id: "VORB-N2837",
    capacity: 100,
    latitude: 51.523434943212514,
    longitude: -0.08114755153656007,
    network: "East",
  });
  await chamberN2837.save();

  const N2837cust1 = new Customer({
    name: "River",
    address: "1 N2837 str",
    postcode: "N283 7VB",
    latitude: 51.523434943212514,
    longitude: -0.08114755153656007,
    chambers: [chamberN2837._id],
  });
  await N2837cust1.save();

  const N2837cust2 = new Customer({
    name: "Kenya",
    address: "2 N2837 str",
    postcode: "N283 7VB",
    latitude: 51.523434943212514,
    longitude: -0.08114755153656007,
    chambers: [chamberN2837._id],
  });
  await N2837cust2.save();

  const N2837cust3 = new Customer({
    name: "Lilac",
    address: "3 N2837 str",
    postcode: "N283 7VB",
    latitude: 51.523434943212514,
    longitude: -0.08114755153656007,
    chambers: [chamberN2837._id],
  });
  await N2837cust3.save();

  const N2837cust4 = new Customer({
    name: "Tawny",
    address: "4 N2837 str",
    postcode: "N283 7VB",
    latitude: 51.523434943212514,
    longitude: -0.08114755153656007,
    chambers: [chamberN2837._id],
  });
  await N2837cust4.save();

  const chamberV9345 = await Chamber.create({
    _id: "VORB-V9345",
    capacity: 100,
    latitude: 51.52211691871454,
    longitude: -0.0851869583129883,
    network: "West",
  });
  await chamberV9345.save();

  const V9345cust1 = new Customer({
    name: "Kacie",
    address: "1 V9345 str",
    postcode: "V934 5VB",
    latitude: 51.52211691871454,
    longitude: -0.0851869583129883,
    chambers: [chamberV9345._id],
  });
  await V9345cust1.save();

  const V9345cust2 = new Customer({
    name: "Keana",
    address: "2 V9345 str",
    postcode: "V934 5VB",
    latitude: 51.52211691871454,
    longitude: -0.0851869583129883,
    chambers: [chamberV9345._id],
  });
  await V9345cust2.save();

  const V9345cust3 = new Customer({
    name: "Bella",
    address: "3 V9345 str",
    postcode: "V934 5VB",
    latitude: 51.52211691871454,
    longitude: -0.0851869583129883,
    chambers: [chamberV9345._id],
  });
  await V9345cust3.save();

  const chamberQ9547 = await Chamber.create({
    _id: "VORB-Q9547",
    capacity: 100,
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    network: "East",
  });
  await chamberQ9547.save();

  const Q9547cust1 = new Customer({
    name: "Ciera",
    address: "1 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust1.save();

  const Q9547cust2 = new Customer({
    name: "Delta",
    address: "2 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust2.save();

  const Q9547cust3 = new Customer({
    name: "Clara",
    address: "3 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust3.save();

  const Q9547cust4 = new Customer({
    name: "Akiko",
    address: "4 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust4.save();

  const Q9547cust5 = new Customer({
    name: "Daiyu",
    address: "5 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust5.save();

  const Q9547cust6 = new Customer({
    name: "Brock",
    address: "6 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust6.save();

  const Q9547cust7 = new Customer({
    name: "David",
    address: "7 Q9547 str",
    postcode: "Q954 7VB",
    latitude: 51.523304662537235,
    longitude: -0.08331477642059326,
    chambers: [chamberQ9547._id],
  });
  await Q9547cust7.save();
};
