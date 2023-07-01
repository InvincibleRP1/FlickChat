import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "One of the standout aspects of Drive is its visual aesthetic. Refn creates a visually stunning world, using bold and vibrant colors to enhance the film's gritty atmosphere. The cinematography by Newton Thomas Sigel is exceptional, capturing both the stillness and the chaos with precision. The use of lighting and shadows adds depth and suspense to the scenes, creating a distinct neo-noir ambiance.",
    image:
      "https://ik.imagekit.io/qsdtqu5hp/FlickChat/Post-one.png?updatedAt=1686297581882",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "moviebuffrahul",
        text: "Ryan and other actors were outstanding in it!"
      },
      {
        _id: uuid(),
        username: "cineprism",
        text: "Top notch cinematography!"
      }
    ],
    fullname: "The Cinefanatic",
    username: "cinefanatic",
    createdAt: "2023-05-22T10:38:12+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "The powerhouse performance by Al Pacino is the defining aspect of the film Scarface. He fully embodies the larger-than-life character of Tony Montana, delivering an intense and charismatic portrayal. Pacino's energy and presence on screen are magnetic, capturing the ambition, arrogance, and ultimately, the tragic downfall of Tony Montana.",
    image:
      "https://ik.imagekit.io/qsdtqu5hp/FlickChat/post-two-real.jpg?updatedAt=1686297746620",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "Rahul Pandey",
    username: "moviebuffrahul",
    createdAt: "2023-06-12T10:38:12+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "We have to start thinking for ourselves, Setsuko, instead of letting others think for us. - Seita",
    image:
      "https://ik.imagekit.io/qsdtqu5hp/FlickChat/post-three.jpg?updatedAt=1686298071992",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "The Cineprism",
    username: "cineprism",
    createdAt: "2022-07-29T10:38:12+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Eagerly waiting for the second season of HOTD!",
    image: "",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "harrypaaji",
        text: "Even I am excited to watch it!"
      }
    ],
    fullname: "Barry Cooper",
    username: "theflash",
    createdAt: "2023-04-05T10:38:12+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "The visual effects and creature designs in Tumbbad are top-notch. The film incorporates elements of Indian mythology and folklore, creating truly mesmerizing and terrifying supernatural creatures. The seamless integration of practical and digital effects adds to the immersive and unsettling nature of the film.",

    image:
      "https://ik.imagekit.io/qsdtqu5hp/FlickChat/post-four.jpg?updatedAt=1686298258393",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "cineprism",
        text: "One of the greatest films of Indian Cinema"
      },
      {
        _id: uuid(),
        username: "moviebuffrahul",
        text: "I agree with Cineprism"
      }
    ],
    fullname: "Micheal Smith",
    username: "dazzlingsmiths",
    createdAt: "2023-07-02T10:38:12+05:30",
    updatedAt: formatDate(),
  },
];
