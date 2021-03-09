import { v4 as uuidv4 } from "uuid";

const chillHop = function () {
  return [
    {
      name: "Beaver Creek",
      artists: "Aso, Middle School, Aviino",
      cover: "https://i.scdn.co/image/ab67616d0000b27392ea33b2d11348d692352a33",
      id: uuidv4(),
      active: true,
      color: ["#23796E", "#FDBA77"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
    },
    {
      name: "Daylight",
      artists: "Alguille",
      cover: "https://i.scdn.co/image/ab67616d0000b273797b1f1ca8576715f8708f65",
      id: uuidv4(),
      active: false,
      color: ["#635596", "#F39FA9"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    },
    {
      name: "Reflection",
      artists: "Sworn",
      cover: "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
      id: uuidv4(),
      active: false,
      color: ["#C5507C", "#632C65"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
    },
    {
      name: "Nightfall",
      artists: "Alguille",
      cover: "https://i.scdn.co/image/ab67616d0000b273797b1f1ca8576715f8708f65",
      id: uuidv4(),
      active: false,
      color: ["#635596", "#F39FA9"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    },
    {
      name: "RUNAWAY",
      artists: "BLUE WEDNESDAY, MAGNUS KLAUSEN",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/380ce32bb4477e4c20035ce481a0a57e88043278-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#AD3E42", "#F3B086"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12136",
    },
    {
      name: "Home Court",
      artists: "Blue Wednesday, Shopan",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#6B3826", "#FBBC7B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
    },
    {
      name: "Golden",
      artists: "Arigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A2BE6A", "#424D21"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
    },
  ];
};

export default chillHop;
