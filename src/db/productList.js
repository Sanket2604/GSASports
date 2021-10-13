const products  = [
    // {
    //     "sportCat": "Cricket",
    //     "prodCat": "Bat",
    //     "name": "SS Bat",
    //     "sizeAva": false,
    //     "size": [],
    //     "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
    //     "img": "show.jpg",
    //     "stock": 5,
    //     "CGST": 5,
    //     "SGST": 5,
    //     "price": 500
    // },
    // {
    //     "sportCat": "Cricket",
    //     "prodCat": "Bat",
    //     "name": "SG Bat",
    //     "sizeAva": false,
    //     "size": [],
    //     "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
    //     "img": "show.jpg",
    //     "stock": 5,
    //     "CGST": 5,
    //     "SGST": 5,
    //     "price": 700
    // },
    // {
    //     "sportCat": "Cricket",
    //     "prodCat": "Bat",
    //     "name": "GM Bat",
    //     "sizeAva": false,
    //     "size": [],
    //     "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
    //     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
    //     "img": "show.jpg",
    //     "stock": 5,
    //     "CGST": 5,
    //     "SGST": 5,
    //     "price": 800
    // },
    {
        id: "4",
        category: "Cricket",
        cat_name: "Bat",
        name: "Kookaburra Bat",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "5",
        category: "Cricket",
        cat_name: "Bat",
        name: "Spartan Bat",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "7",
        category: "Cricket",
        cat_name: "Ball",
        name: "White Ball",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "8",
        category: "Cricket",
        cat_name: "Ball",
        name: "Red Ball",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "9",
        category: "Cricket",
        cat_name: "Ball",
        name: "Pink Ball",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "10",
        category: "Cricket",
        cat_name: "Ball",
        name: "Tenis Ball",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "11",
        category: "Cricket",
        cat_name: "Shirt",
        name: "White Shirt",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "12",
        category: "Cricket",
        cat_name: "Shirt",
        name: "Blue Shirt",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "13",
        category: "Cricket",
        cat_name: "Shirt",
        name: "RCB Shirt",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "14",
        category: "Cricket",
        cat_name: "Shirt",
        name: "CSK Shirt",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "15",
        category: "Cricket",
        cat_name: "Trousers",
        name: "White Trousers",
        size_ava: true,
        size: ["28","30","32","34","36","38"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "16",
        category: "Cricket",
        cat_name: "Trousers",
        name: "Shots",
        size_ava: true,
        size: ["28","30","32","34","36","38"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "17",
        category: "Cricket",
        cat_name: "Trousers",
        name: "RCB Trousers",
        size_ava: true,
        size: ["28","30","32","34","36","38"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "18",
        category: "Cricket",
        cat_name: "Trousers",
        name: "CSK Trousers",
        size_ava: true,
        size: ["28","30","32","34","36","38"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "19",
        category: "Cricket",
        cat_name: "Jacket",
        name: "Black Jacket",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "20",
        category: "Cricket",
        cat_name: "Jacket",
        name: "Blue Jacket",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "20",
        category: "Cricket",
        cat_name: "Jacket",
        name: "Sweater Jacket",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "21",
        category: "Cricket",
        cat_name: "Cap",
        name: "Black Cap",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "22",
        category: "Cricket",
        cat_name: "Cap",
        name: "Team India Cap",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "23",
        category: "Cricket",
        cat_name: "Cap",
        name: "RCB Cap",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "24",
        category: "Cricket",
        cat_name: "Cap",
        name: "CSK Cap",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "25",
        category: "Cricket",
        cat_name: "Shoe",
        name: "Spike Shoe",
        size_ava: true,
        size: ["6","7","8","9","10","11"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "26",
        category: "Cricket",
        cat_name: "Shoe",
        name: "Sports Shoe",
        size_ava: true,
        size: ["6","7","8","9","10","11"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "27",
        category: "Cricket",
        cat_name: "Protection",
        name: "Groin Protection",
        size_ava: true,
        size: ["S","M","L"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "28",
        category: "Cricket",
        cat_name: "Protection",
        name: "Groin Protection Trunks",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "29",
        category: "Cricket",
        cat_name: "Protection",
        name: "Lower Body Protector",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "30",
        category: "Cricket",
        cat_name: "Protection",
        name: "Lower Body Protector",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "31",
        category: "Cricket",
        cat_name: "Protection",
        name: "Leg Pads",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "32",
        category: "Cricket",
        cat_name: "Protection",
        name: "Arm Pads",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg",
    },
    {
        id: "33",
        category: "Cricket",
        cat_name: "Protection",
        name: "Arm Pads",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "34",
        category: "Cricket",
        cat_name: "Stumps",
        name: "Spring Stumps",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "35",
        category: "Cricket",
        cat_name: "Stumps",
        name: "Wooden Stumps",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "36",
        category: "Cricket",
        cat_name: "Stumps",
        name: "Plastic Stumps",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "37",
        category: "Football",
        cat_name: "Cleats",
        name: "Plastic Cleats",
        size_ava: true,
        size: ["6","7","8","9","10","11"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "38",
        category: "Football",
        cat_name: "Cleats",
        name: "Metal Cleats",
        size_ava: true,
        size: ["6","7","8","9","10","11"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "37",
        category: "Football",
        cat_name: "Cleats",
        name: "Trainers",
        size_ava: true,
        size: ["6","7","8","9","10","11"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "38",
        category: "Football",
        cat_name: "Socks",
        name: "Red Socks",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "39",
        category: "Football",
        cat_name: "Socks",
        name: "Black Socks",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "40",
        category: "Football",
        cat_name: "Socks",
        name: "Blue Socks",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "41",
        category: "Football",
        cat_name: "Socks",
        name: "Pink Socks",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "42",
        category: "Football",
        cat_name: "Shin Gaurd",
        name: "Shin Gaurd 1",
        size_ava: true,
        size: ["S","M","L"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "43",
        category: "Football",
        cat_name: "Shin Gaurd",
        name: "Shin Gaurd 2",
        size_ava: true,
        size: ["S","M","L"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "44",
        category: "Football",
        cat_name: "Shin Gaurd",
        name: "Shin Gaurd 3",
        size_ava: true,
        size: ["S","M","L"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "45",
        category: "Football",
        cat_name: "Shin Gaurd",
        name: "Shin Gaurd 4",
        size_ava: true,
        size: ["S","M","L"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "46",
        category: "Football",
        cat_name: "Ball",
        name: "Ball 1",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "47",
        category: "Football",
        cat_name: "Ball",
        name: "Ball 2",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "48",
        category: "Football",
        cat_name: "Ball",
        name: "Ball 3",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "49",
        category: "Football",
        cat_name: "Ball",
        name: "Ball 4",
        size_ava: false,
        size: [""],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "50",
        category: "Football",
        cat_name: "Jersy",
        name: "Jersy 1",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "50",
        category: "Football",
        cat_name: "Jersy",
        name: "Jersy 2",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "50",
        category: "Football",
        cat_name: "Jersy",
        name: "Jersy 3",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    },
    {
        id: "50",
        category: "Football",
        cat_name: "Jersy",
        name: "Jersy 4",
        size_ava: true,
        size: ["S","M","L","XL","XXL"],
        short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis tempore at deleniti impedit iusto repellendus quidem recusandae, unde doloribus molestiae ipsa optio nam? Maxime quam enim molestiae quasi aliquid.",
        img: "show.jpg"
    }   
]
export default products;