import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "The",
    lastName: "Cinefanatic",
    username: "cinefanatic",
    email: "cinefanatic@gmail.com",
    password: "cineman123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rahul",
    lastName: "Pandey",
    username: "moviebuffrahul",
    email: "rahulpandey@gmail.com",
    password: "heythere234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "johndoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Micheal",
    lastName: "Smith",
    username: "dazzlingsmiths",
    email: "smithy@gmail.com",
    password: "smithy123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Barry",
    lastName: "Cooper",
    username: "theflash",
    email: "theflash@gmail.com",
    password: "hello123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cine",
    lastName: "Prism",
    username: "cineprism",
    email: "cineprism@gmail.com",
    password: "randomaccount",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Harry",
    lastName: "Singh",
    username: "harrypaaji",
    email: "harrypaaji@gmail.com",
    password: "balleballe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
