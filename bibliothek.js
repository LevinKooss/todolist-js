let buch = [
    {
        title: "One Piece",
        author: "Oda",
        year: 1993,
        isAvailable: true
    },
    {
        title: "Solo Leveling",
        author: "Thomas",
        year: 2015,
        isAvailable: true
    },
    {
        title: "Naruto",
        author: "Masashi Kishimoto",
        year: 1999,
        isAvailable: false
    }
]

console.log(buch[1].title);

buch[2].isAvailable = false;

console.log(buch.title);