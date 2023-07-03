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
      "https://i.pinimg.com/originals/44/59/8f/44598f0b489e869c0941e12873f1f4c2.gif",
    likes: {
      likeCount: 1,
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
      likeCount: 4,
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
        username: "taani234",
        text: "Even I am excited to watch it!"
      }
    ],
    fullname: "Barry Allen",
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

  {
    _id: uuid(),
    content: "Oppenheimer is going to be the film of the year",
    image: "https://64.media.tumblr.com/e5286ae5c12987113e3b867ae9a8f5f1/2ef0f36104e872a1-ba/s540x810/e3e84cb527c2821b9141d7e969f68011571033c6.gif",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "Taani Singh",
    username: "taani234",
    createdAt: "2023-06-27T13:40:12+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "City of God is a cinematic gem that left me in awe! The mesmerizing storytelling, brilliant performances, and stunning cinematography make it an unforgettable experience. A powerful exploration of crime, poverty, and hope against all odds. Truly a masterpiece that demands your attention!",
    image: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "John Doe",
    username: "johndoe",
    createdAt: "2023-06-28T12:30:12+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "What a dull day it has been",
    image: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullname: "Cine Prism",
    username: "cineprism",
    createdAt: "2023-06-30T16:04:12+05:30",
    updatedAt: formatDate(),
  },
];
