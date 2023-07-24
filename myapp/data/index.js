import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),

];


export const users = [

  {
    "username": "alice",
    "email": "alice@example.com",
    "password": "9a8f31f96f56f9c8e4df572c23949c0c" // Hashed password for "alicepassword"
  },
  {
    "username": "bobsmith",
    "email": "bob.smith@example.com",
    "password": "8427f07c57c6e2e80d755ac79a27687e" // Hashed password for "bobsmithpassword"
  },
  {
    "username": "charliebrown",
    "email": "charlie.brown@example.com",
    "password": "c1c07c4cd431de33b3a447ee0f4b421d" // Hashed password for "charliepassword"
  },
  {
    "username": "davemiller",
    "email": "dave.miller@example.com",
    "password": "e873bf49e47b914b17a6e5873b4dfca8" // Hashed password for "davemillerpassword"
  },
  {
    "username": "emilyjones",
    "email": "emily.jones@example.com",
    "password": "f20d67f8af06d4d11e94e3c68ec3af2f" // Hashed password for "emilypassword"
  },
  {
    "username": "george88",
    "email": "george88@example.com",
    "password": "3d229320f5a9db4c00a456f8c2b4ec63" // Hashed password for "georgepassword"
  },
  {
    "username": "hannah29",
    "email": "hannah29@example.com",
    "password": "2ac11e57e09699968a8eeb707f8a5a7a" // Hashed password for "hannahpassword"
  },
  {
    "username": "isabella_w",
    "email": "isabella@example.com",
    "password": "4977e9b9a36c723133f50093a9c7a96d" // Hashed password for "isabellapassword"
  },
  {
    "username": "jack_r",
    "email": "jack@example.com",
    "password": "0b388ea7bf67027654b8a3b77b3e1b13" // Hashed password for "jackpassword"
  },
  {
    "username": "kate_s",
    "email": "kate@example.com",
    "password": "d5d87bb0d49c7a1d8d49eaf4397b4efb" // Hashed password for "katepassword"
  },
  {
    "username": "liam_h",
    "email": "liam@example.com",
    "password": "bde183a79ee8d1a7b83f970e874e87cd" // Hashed password for "liampassword"
  },
  {
    "username": "megan_rose",
    "email": "megan@example.com",
    "password": "e87d2df03e9aa69da20c38ecb8aa238c" // Hashed password for "meganpassword"
  },
  {
    "username": "nathan123",
    "email": "nathan123@example.com",
    "password": "adfc87b6e3b1bfe2b46a94c54bce1244" // Hashed password for "nathanpassword"
  },
  {
    "username": "olivia_m",
    "email": "olivia@example.com",
    "password": "c75a56e11c775e9192286008e03e7db6" // Hashed password for "oliviapassword"
  }
]


export const donuts = [

      {
        "title": "Strawberry Frosted Donut",
        "desc": "Freshly baked strawberry frosted donut.",
        "imageUrl": "https://images.pexels.com/photos/7034527/pexels-photo-7034527.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc708",
        "likes": ["64be79d15553edcc57bbc709", "64be79d15553edcc57bbc70a"],
        "_id": "64be79d15553edcc57bbc706"
      },
      {
        "title": "Blueberry Bliss Donut",
        "desc": "A blissful donut infused with blueberries.",
        "imageUrl": "https://images.pexels.com/photos/1982485/pexels-photo-1982485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc70d",
        "likes": ["64be79d15553edcc57bbc70e", "64be79d15553edcc57bbc70f"],
        "_id": "64be79d15553edcc57bbc707"
      },
      {
        "title": "Caramel Crunch Donut",
        "desc": "Crunchy caramel-coated donut with a heavenly taste.",
        "imageUrl": "https://images.pexels.com/photos/7034525/pexels-photo-7034525.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc711",
        "likes": ["64be79d15553edcc57bbc712"],
        "_id": "64be79d15553edcc57bbc708"
      },
      {
        "title": "Vanilla Glazed Donut",
        "desc": "Classic vanilla glazed donut.",
        "imageUrl": "https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc709",
        "likes": ["64be79d15553edcc57bbc70a", "64be79d15553edcc57bbc70b"],
        "_id": "64be79d15553edcc57bbc709"
      },
      {
        "title": "Lemon Poppy Seed Donut",
        "desc": "Zesty lemon-flavored donut with poppy seeds.",
        "imageUrl": "https://images.pexels.com/photos/7034523/pexels-photo-7034523.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc70a",
        "likes": ["64be79d15553edcc57bbc70b", "64be79d15553edcc57bbc70c"],
        "_id": "64be79d15553edcc57bbc70a"
      },
      {
        "title": "Powdered Sugar Donut",
        "desc": "Soft and fluffy powdered sugar donut.",
        "imageUrl": "https://images.pexels.com/photos/12844764/pexels-photo-12844764.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc70b",
        "likes": ["64be79d15553edcc57bbc70c", "64be79d15553edcc57bbc70d", "64be79d15553edcc57bbc70a", "64be79d15553edcc57bbc70b"],
        "_id": "64be79d15553edcc57bbc70b"
      },
      {
        "title": "Raspberry Jelly Donut",
        "desc": "Filled with sweet raspberry jelly.",
        "imageUrl": "https://images.pexels.com/photos/7034521/pexels-photo-7034521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc70c",
        "likes": ["64be79d15553edcc57bbc70d", "64be79d15553edcc57bbc70e"],
        "_id": "64be79d15553edcc57bbc70c"
      },
      {
        "title": "Apple Fritter Donut",
        "desc": "Tasty donut with apple chunks and cinnamon.",
        "imageUrl": "https://images.pexels.com/photos/3023687/pexels-photo-3023687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc70d",
        "likes": ["64be79d15553edcc57bbc70e", "64be79d15553edcc57bbc70f"],
        "_id": "64be79d15553edcc57bbc70d"
      },
      {
        "title": "Glazed Twist Donut",
        "desc": "Twisted donut with a sweet glaze.",
        "imageUrl": "https://images.pexels.com/photos/9157322/pexels-photo-9157322.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "authorId": "64be79d15553edcc57bbc70e",
        "likes": ["64be79d15553edcc57bbc70f", "64be79d15553edcc57bbc710"],
        "_id": "64be79d15553edcc57bbc70e"
      },
      {
        "title": "Maple Bacon Donut",
        "desc": "Savory-sweet donut with maple glaze and bacon bits.",
        "imageUrl": "https://images.pexels.com/photos/3656119/pexels-photo-3656119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc70f",
        "likes": ["64be79d15553edcc57bbc710", "64be79d15553edcc57bbc711"],
        "_id": "64be79d15553edcc57bbc70f"
      },
      {
        "title": "Pumpkin Spice Donut",
        "desc": "Perfect fall treat with pumpkin spice flavor.",
        "imageUrl": "https://images.pexels.com/photos/1346215/pexels-photo-1346215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc710",
        "likes": ["64be79d15553edcc57bbc711", "64be79d15553edcc57bbc712"],
        "_id": "64be79d15553edcc57bbc710"
      },
      {
        "title": "Coconut Cream Donut",
        "desc": "Creamy donut topped with shredded coconut.",
        "imageUrl": "https://images.pexels.com/photos/2801980/pexels-photo-2801980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc711",
        "likes": ["64be79d15553edcc57bbc712"],
        "_id": "64be79d15553edcc57bbc711"
      },
      {
        "title": "Double Chocolate Donut",
        "desc": "Rich and indulgent double chocolate donut.",
        "imageUrl": "https://images.pexels.com/photos/1865333/pexels-photo-1865333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc712",
        "likes": ["64be79d15553edcc57bbc705"],
        "_id": "64be79d15553edcc57bbc712"
      },
      {
        "title": "Mango Tango Donut",
        "desc": "Exotic mango-flavored donut with a twist.",
        "imageUrl": "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc705",
        "likes": ["64be79d15553edcc57bbc706", "64be79d15553edcc57bbc707"],
        "_id": "64be79d15553edcc57bbc713"
      },
      {
        "title": "Cookies and Cream Donut",
        "desc": "Dreamy donut with cookies and cream topping.",
        "imageUrl": "https://images.pexels.com/photos/179907/pexels-photo-179907.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc706",
        "likes": ["64be79d15553edcc57bbc707", "64be79d15553edcc57bbc708"],
        "_id": "64be79d15553edcc57bbc714"
      },
      {
        "title": "Cherry Delight Donut",
        "desc": "Cherry-flavored donut with a delightful glaze.",
        "imageUrl": "https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc707",
        "likes": ["64be79d15553edcc57bbc708", "64be79d15553edcc57bbc709"],
        "_id": "64be79d15553edcc57bbc715"
      },
      {
        "title": "Matcha Madness Donut",
        "desc": "Green tea-infused donut for matcha lovers.",
        "imageUrl": "https://images.pexels.com/photos/2064449/pexels-photo-2064449.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc708",
        "likes": ["64be79d15553edcc57bbc709", "64be79d15553edcc57bbc70a"],
        "_id": "64be79d15553edcc57bbc716"
      },
      {
        "title": "Peanut Butter Paradise Donut",
        "desc": "Peanut butter heaven in a donut form.",
        "imageUrl": "https://images.pexels.com/photos/1395321/pexels-photo-1395321.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc709",
        "likes": ["64be79d15553edcc57bbc70a", "64be79d15553edcc57bbc70b"],
        "_id": "64be79d15553edcc57bbc717"
      },
      {
        "title": "Raspberry Lemonade Donut",
        "desc": "Refreshing donut with raspberry and lemon flavors.",
        "imageUrl": "https://images.pexels.com/photos/4664463/pexels-photo-4664463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "authorId": "64be79d15553edcc57bbc70a",
        "likes": ["64be79d15553edcc57bbc70b", "64be79d15553edcc57bbc70c"],
        "_id": "64be79d15553edcc57bbc718"
      },
      {
        "title": "Mint Chocolate Chip Donut",
        "desc": "Minty donut with chocolate chips on top.",
        "imageUrl": "https://images.pexels.com/photos/1822105/pexels-photo-1822105.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc70b",
        "likes": ["64be79d15553edcc57bbc70c", "64be79d15553edcc57bbc70d"],
        "_id": "64be79d15553edcc57bbc719"
      },
      {
        "title": "Salted Caramel Donut",
        "desc": "A perfect balance of sweet and salty.",
        "imageUrl": "https://images.pexels.com/photos/2064662/pexels-photo-2064662.jpeg?auto=compress&cs=tinysrgb&w=600 ",
        "authorId": "64be79d15553edcc57bbc70c",
        "likes": ["64be79d15553edcc57bbc70d", "64be79d15553edcc57bbc70e"],
        "_id": "64be79d15553edcc57bbc71a"
      },
      {
        "title": "Red Velvet Love Donut",
        "desc": "Velvety red donut with a whole lot of love.",
        "imageUrl": "https://images.pexels.com/photos/4686962/pexels-photo-4686962.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc70d",
        "likes": ["64be79d15553edcc57bbc70e", "64be79d15553edcc57bbc70f"],
        "_id": "64be79d15553edcc57bbc71b"
      },
      {
        "title": "Cinnamon Sugar Twist Donut",
        "desc": "Twisted donut coated with cinnamon sugar.",
        "imageUrl": "https://images.pexels.com/photos/1200655/pexels-photo-1200655.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc70e",
        "likes": ["64be79d15553edcc57bbc70f", "64be79d15553edcc57bbc710"],
        "_id": "64be79d15553edcc57bbc71c"
      },
      {
        "title": "Gingerbread Joy Donut",
        "desc": "Spiced donut perfect for the holiday season.",
        "imageUrl": "https://images.pexels.com/photos/3628508/pexels-photo-3628508.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc70f",
        "likes": ["64be79d15553edcc57bbc710", "64be79d15553edcc57bbc711"],
        "_id": "64be79d15553edcc57bbc71d"
      },
      {
        "title": "Blueberry Cheesecake Donut",
        "desc": "Donut with a blueberry cheesecake twist.",
        "imageUrl": "https://images.pexels.com/photos/4686959/pexels-photo-4686959.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc710",
        "likes": ["64be79d15553edcc57bbc711", "64be79d15553edcc57bbc712"],
        "_id": "64be79d15553edcc57bbc71e"
      },
      {
        "title": "Pistachio Passion Donut",
        "desc": "Pistachio-flavored donut with a passionate taste.",
        "imageUrl": "https://images.pexels.com/photos/6823449/pexels-photo-6823449.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc711",
        "likes": ["64be79d15553edcc57bbc712"],
        "_id": "64be79d15553edcc57bbc71f"
      },
      {
        "title": "Hazelnut Heaven Donut",
        "desc": "Heavenly hazelnut donut with a nutty twist.",
        "imageUrl": "https://images.pexels.com/photos/7034523/pexels-photo-7034523.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc712",
        "likes": ["64be79d15553edcc57bbc705"],
        "_id": "64be79d15553edcc57bbc720"
      },
      {
        "title": "Triple Berry Blast Donut",
        "desc": "Bursting with the flavors of mixed berries.",
        "imageUrl": "https://images.pexels.com/photos/7034524/pexels-photo-7034524.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc705",
        "likes": ["64be79d15553edcc57bbc706", "64be79d15553edcc57bbc707"],
        "_id": "64be79d15553edcc57bbc721"
      },
      {
        "title": "Toffee Temptation Donut",
        "desc": "Irresistible toffee-flavored temptation.",
        "imageUrl": "https://images.pexels.com/photos/10273551/pexels-photo-10273551.jpeg?auto=compress&cs=tinysrgb&w=600",
        "authorId": "64be79d15553edcc57bbc706",
        "likes": ["64be79d15553edcc57bbc707", "64be79d15553edcc57bbc708"],
        "_id": "64be79d15553edcc57bbc722"
      },

  
  ]


  export const comments = [
    {
      "donutId": "64be79d15553edcc57bbc705",
      "authorId": "64be79d15553edcc57bbc70a",
      "text": "This donut looks amazing!"
    },
    {
      "donutId": "64be79d15553edcc57bbc706",
      "authorId": "64be79d15553edcc57bbc70b",
      "text": "I love strawberry donuts!"
    },
    {
      "donutId": "64be79d15553edcc57bbc707",
      "authorId": "64be79d15553edcc57bbc70c",
      "text": "The blueberry flavor is divine!"
    },
    {
      "donutId": "64be79d15553edcc57bbc708",
      "authorId": "64be79d15553edcc57bbc70d",
      "text": "The caramel is so addictive!"
    },
    {
      "donutId": "64be79d15553edcc57bbc70a",
      "authorId": "64be79d15553edcc57bbc70f",
      "text": "I can never resist a chocolate glazed donut!"
    },
    {
      "donutId": "64be79d15553edcc57bbc709",
      "authorId": "64be79d15553edcc57bbc711",
      "text": "Soft and fluffy powdered sugar donut."
    },
    {
      "donutId": "64be79d15553edcc57bbc70b",
      "authorId": "64be79d15553edcc57bbc712",
      "text": "Peanut butter heaven in a donut form."
    },
    {
      "donutId": "64be79d15553edcc57bbc70c",
      "authorId": "64be79d15553edcc57bbc70e",
      "text": "Cherry-flavored donut with a delightful glaze."
    },
    {
      "donutId": "64be79d15553edcc57bbc70d",
      "authorId": "64be79d15553edcc57bbc70f",
      "text": "Velvety red donut with a whole lot of love."
    },
    {
      "donutId": "64be79d15553edcc57bbc70e",
      "authorId": "64be79d15553edcc57bbc710",
      "text": "Minty donut with chocolate chips on top."
    },
    {
      "donutId": "64be79d15553edcc57bbc70f",
      "authorId": "64be79d15553edcc57bbc711",
      "text": "Irresistible toffee-flavored temptation."
    },
    {
      "donutId": "64be79d15553edcc57bbc710",
      "authorId": "64be79d15553edcc57bbc714",
      "text": "Dreamy donut with cookies and cream topping."
    },
    {
      "donutId": "64be79d15553edcc57bbc711",
      "authorId": "64be79d15553edcc57bbc715",
      "text": "Bursting with the flavors of mixed berries."
    },
    {
      "donutId": "64be79d15553edcc57bbc712",
      "authorId": "64be79d15553edcc57bbc716",
      "text": "Green tea-infused donut for matcha lovers."
    },
    {
      "donutId": "64be79d15553edcc57bbc714",
      "authorId": "64be79d15553edcc57bbc71b",
      "text": "Triple berry blast donut. So delicious!"
    },
    {
      "donutId": "64be79d15553edcc57bbc715",
      "authorId": "64be79d15553edcc57bbc71d",
      "text": "Heavenly hazelnut donut with a nutty twist."
    }


  ]