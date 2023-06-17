import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "user001",
    firstName: "The",
    lastName: "Cinefanatic",
    username: "cinefanatic",
    email: "cinefanatic@gmail.com",
    password: "cineman123",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Cinema is the most beautiful fraud",
    link: "gettingthere.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "user002",
    firstName: "Rahul",
    lastName: "Pandey",
    username: "moviebuffrahul",
    email: "rahulpandey@gmail.com",
    password: "heythere234",
    followers: [
      {
        _id: "user003",
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        email: "johndoe@gmail.com",
        password: "johndoe123",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        bio: "Dreamer, Believer",
        link: "johndoe.vercel.app",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },

      {
        _id: "user004",
        firstName: "Micheal",
        lastName: "Smith",
        username: "dazzlingsmiths",
        email: "smithy@gmail.com",
        password: "smithy123",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
        bio: "Not just another guy",
        link: "smithy.netlify.app",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    following: [
      {
        _id: "user004",
        firstName: "Micheal",
        lastName: "Smith",
        username: "dazzlingsmiths",
        email: "smithy@gmail.com",
        password: "smithy123",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
        bio: "Not just another guy",
        link: "smithy.netlify.app",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },

      {
        _id: "user001",
        firstName: "The",
        lastName: "Cinefanatic",
        username: "cinefanatic",
        email: "cinefanatic@gmail.com",
        password: "cineman123",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Cinema is the most beautiful fraud",
        link: "gettingthere.netlify.app",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    avatar:
      "https://media.licdn.com/dms/image/D4D03AQH0Yh8t7arEfA/profile-displayphoto-shrink_400_400/0/1682543183081?e=1692230400&v=beta&t=JMbY-pYK8mDItC1oT0Uqc9MhHHdT9y_8NPcyzAza19o",
    bio: "Learner",
    link: "rahulpandeyprotfolio.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "user003",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "johndoe123",
    following: [
      {
        _id: "user002",
        firstName: "Rahul",
        lastName: "Pandey",
        username: "moviebuffrahul",
        email: "rahulpandey@gmail.com",
        avatar:
          "https://media.licdn.com/dms/image/D4D03AQH0Yh8t7arEfA/profile-displayphoto-shrink_400_400/0/1682543183081?e=1692230400&v=beta&t=JMbY-pYK8mDItC1oT0Uqc9MhHHdT9y_8NPcyzAza19o",
      },
    ],

    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Dreamer, Believer",
    link: "johndoe.vercel.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "user004",
    firstName: "Micheal",
    lastName: "Smith",
    username: "dazzlingsmiths",
    email: "smithy@gmail.com",
    password: "smithy123",
    following: [
      {
        _id: uuid(),
        firstName: "Rahul",
        lastName: "Pandey",
        username: "moviebuffrahul",
        email: "rahulpandey@gmail.com",
        avatar:
          "https://media.licdn.com/dms/image/D4D03AQH0Yh8t7arEfA/profile-displayphoto-shrink_400_400/0/1682543183081?e=1692230400&v=beta&t=JMbY-pYK8mDItC1oT0Uqc9MhHHdT9y_8NPcyzAza19o",
      },
    ],

    followers: [
      {
        _id: "user002",
        firstName: "Rahul",
        lastName: "Pandey",
        username: "moviebuffrahul",
        email: "rahulpandey@gmail.com",
        avatar:
          "https://media.licdn.com/dms/image/D4D03AQH0Yh8t7arEfA/profile-displayphoto-shrink_400_400/0/1682543183081?e=1692230400&v=beta&t=JMbY-pYK8mDItC1oT0Uqc9MhHHdT9y_8NPcyzAza19o",
      },
    ],
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    bio: "Not just another guy",
    link: "smithy.netlify.app",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "user005",
    firstName: "Barry",
    lastName: "Cooper",
    username: "theflash",
    email: "theflash@gmail.com",
    password: "hello123",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Flashy, Dashy",
    link: "theflash.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "user006",
    firstName: "Cine",
    lastName: "Prism",
    username: "cineprism",
    email: "cineprism@gmail.com",
    password: "randomaccount",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    bio: "Movie Buff",
    link: "cineprism.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "user007",
    firstName: "Harry",
    lastName: "Singh",
    username: "harrypaaji",
    email: "harrypaaji@gmail.com",
    password: "balleballe",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    bio: "Jolly",
    link: "paaji.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
