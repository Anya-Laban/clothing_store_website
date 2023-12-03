
export class Card {
    constructor(name, photos, price, colors, size, reviews, details, type, collection) {
        this.name = name;
        this.photos = photos;
        this.price = price;
        this.colors = colors;
        this.size = size;
        this.reviews = reviews;
        this.details = details;
        this.type = type;
        this.collection = collection;
    }
    addCard() {
        let card = document.createElement('div');
        card.className = "card";
        card.dataset.nameGoods = this.name;
        const stars = this.drawRating();

        card.innerHTML = `<div class="card-img"><img src="${this.photos[0]}" alt="PHOTO"></div>
        <h2 class="card-header">${this.name}</h2>
        <div class="card-reviev"> 
        ${stars}
        </div>
        <p class="card-price"><span>$</span>${this.price}</p>
        <input class="card-btn" type="button" value="ADD TO CART">`;
        return card;
    }
    addCardToCataloge() {
        let card = document.createElement('div');
        card.className = "card card-cataloge";
        card.dataset.nameGoods = this.name;
        const stars = this.drawRating();

        card.innerHTML = `<div class="card-img"><img src="${this.photos[0]}" alt="PHOTO"></div>
        <h2 class="card-header">${this.name}</h2>
        <div class="card-reviev"> 
        ${stars}
        </div>
        <p class="card-price"><span>$</span>${this.price}</p>
        <div class="card-colors"> ${this.drawColors()}</div>
        <div class="card-size"> ${this.drawSizes()}</div>
        <input class="card-btn" type="button" value="ADD TO CART">`;
        return card;
    }
    drawSizes(){
        let string = ``;
        this.size.forEach((elem)=>{
            string +=`<div data-card-size = "${elem}" class="card-sizes-size">${elem}</div>`
        })
        return string;
    }
    drawColors(){
        let string = ``;
        this.colors.forEach((elem)=>{
            string +=`<div data-card-color = "${elem.toLowerCase()}" class="card-colors-color">${elem}</div>`
        })
        return string;
    }
    drawRating() {
        const rating = Math.round(this.rating());
        let stars = ``;
        for (let i = 0; i < 5; i++) {
            if (i <= rating) {
                stars += `<div class="card-star card-star-yellow"></div>`
            }
            else {
                stars += `<div class="card-star card-star-grey"></div>`
            }
        }
        return stars;
    }
    rating() {
        return ((this.reviews.oneStar * 1) + (this.reviews.twoStar * 2)
            + (this.reviews.treeStar * 3) + (this.reviews.fourStar * 4)
            + (this.reviews.fiveStar * 5)) / (this.reviews.oneStar + this.reviews.twoStar + this.reviews.treeStar +
                this.reviews.fourStar + this.reviews.fiveStar);
    }
    allReviews(){
        return this.reviews.oneStar+this.reviews.twoStar+this.reviews.treeStar+this.reviews.fourStar+this.reviews.fiveStar;
    }
}

const allCards = [
    new Card(
        'Academy Shorts Junior Boys',
        ['../img/shorts/img1_1.webp', '../img/shorts/img1_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10, 11, 12, 13],
        { oneStar: 1, twoStar: 0, treeStar: 0, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["ACD21"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN DRI-FIT AIR DIAMOND BLACK',
        ['../img/shorts/img2_1.webp', '../img/shorts/img2_2.webp' , '../img/shorts/img2_3.webp'],
        '15',
        ['Black', 'White'],
        [11,13,15],
        { oneStar: 1, twoStar: 8, treeStar: 2, fourStar: 5, fiveStar: 1 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DH9075-010"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN ESSENTIALS GREY',
        ['../img/shorts/img3_1.webp', '../img/shorts/img3_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10],
        { oneStar: 1, twoStar: 0, treeStar: 22, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DA9826-091"]
    ),
    new Card(
        'Academy Shorts Junior Boys',
        ['../img/shorts/img1_1.webp', '../img/shorts/img1_2.webp'],
        '15',
        ['Black', 'White'],
        [5, 6, 7, 8, 9, 10, 11, 12, 13],
        { oneStar: 1, twoStar: 0, treeStar: 0, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["ACD21"]
    ),
    new Card(
        'ШТАНИ NIKE DRI-FIT TAPE TRAINING PANTS BLACK',
        ['../img/pants/img1_1.webp', '../img/pants/img1_2.webp', '../img/pants/img1_3.webp','../img/pants/img1_4.webp'],
        '15',
        ['Black', 'White'],
        [5, 6, 7, 8, 12, 13],
        { oneStar: 1, twoStar: 0, treeStar:44, fourStar: 5, fiveStar: 1 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["pants"],
        ["CZ6379-010"]
    ),
    new Card(
        'ШТАНИ NIKE TECH FLEECE RED CU4495-657',
        ['../img/pants/img2_1.webp', '../img/pants/img2_2.webp'],
        '15',
        ['Red', 'White'],
        [5, 6, 7, 8, 12, 13],
        { oneStar: 100, twoStar: 0, treeStar: 3, fourStar: 0, fiveStar: 0 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["pants"],
        ["CU4495-657"]
    ),
    new Card(
        'Academy Shorts Junior Boys',
        ['../img/shorts/img1_1.webp', '../img/shorts/img1_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10, 11, 12, 13],
        { oneStar: 1, twoStar: 0, treeStar: 0, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["ACD21"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN DRI-FIT AIR DIAMOND BLACK',
        ['../img/shorts/img2_1.webp', '../img/shorts/img2_2.webp' , '../img/shorts/img2_3.webp'],
        '15',
        ['Black', 'White'],
        [11,13,15],
        { oneStar: 1, twoStar: 8, treeStar: 2, fourStar: 5, fiveStar: 1 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DH9075-010"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN ESSENTIALS GREY',
        ['../img/shorts/img3_1.webp', '../img/shorts/img3_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10],
        { oneStar: 1, twoStar: 0, treeStar: 22, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DA9826-091"]
    ),
    new Card(
        'Academy Shorts Junior Boys',
        ['../img/shorts/img1_1.webp', '../img/shorts/img1_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10, 11, 12, 13],
        { oneStar: 1, twoStar: 0, treeStar: 0, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["ACD21"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN DRI-FIT AIR DIAMOND BLACK',
        ['../img/shorts/img2_1.webp', '../img/shorts/img2_2.webp' , '../img/shorts/img2_3.webp'],
        '15',
        ['Black', 'White'],
        [11,13,15],
        { oneStar: 1, twoStar: 8, treeStar: 2, fourStar: 5, fiveStar: 1 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DH9075-010"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN ESSENTIALS GREY',
        ['../img/shorts/img3_1.webp', '../img/shorts/img3_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10],
        { oneStar: 1, twoStar: 0, treeStar: 22, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DA9826-091"]
    ),
    new Card(
        'Academy Shorts Junior Boys',
        ['../img/shorts/img1_1.webp', '../img/shorts/img1_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10, 11, 12, 13],
        { oneStar: 1, twoStar: 0, treeStar: 0, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["ACD21"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN DRI-FIT AIR DIAMOND BLACK',
        ['../img/shorts/img2_1.webp', '../img/shorts/img2_2.webp' , '../img/shorts/img2_3.webp'],
        '15',
        ['Black', 'White'],
        [11,13,15],
        { oneStar: 1, twoStar: 8, treeStar: 2, fourStar: 5, fiveStar: 1 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DH9075-010"]
    ),
    new Card(
        'ШОРТИ AIR JORDAN ESSENTIALS GREY',
        ['../img/shorts/img3_1.webp', '../img/shorts/img3_2.webp'],
        '15',
        ['Black', 'Navy', 'White'],
        [5, 6, 7, 8, 9, 10],
        { oneStar: 1, twoStar: 0, treeStar: 22, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shorts"],
        ["DA9826-091"]
    ),
    new Card(
        'Nike Dri-FIT Primary',
        ['../img/shirts/img1_1.webp', '../img/shirts/img1_2.webp', '../img/shirts/img1_3.webp'],
        '25',
        ['Coral', 'Green', 'White'],
        [5, 6, 7, 8, 9],
        { oneStar: 1, twoStar: 0, treeStar: 10, fourStar: 5, fiveStar: 9 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shirts"],
        ["ACasD21"]
    ),
    new Card(
        'Nike Dri-FIT',
        ['../img/shirts/img2_1.webp', '../img/shirts/img2_2.webp', '../img/shirts/img2_3.jpg'],
        '15',
        ['Black', 'White'],
        [11,13,15],
        { oneStar: 1, twoStar: 8, treeStar: 2, fourStar: 5, fiveStar: 1 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["shirts"],
        ["DHdd10"]
    ),
    new Card(
        'Nike Dri-FIT Legacy91',
        ['../img/accessories/img1_1.webp','../img/accessories/img1_2.jpg','../img/accessories/img1_3.webp'],
        '22',
        ['Black', 'Coral', 'White'],
        [5, 6, 7, 8, 9, 10],
        { oneStar: 1, twoStar: 0, treeStar: 22, fourStar: 5, fiveStar: 19 },
        'Product code: 463007 Switch up your performance shorts with the Nike Academy Woven Pants. These soft football shorts have been crafted in a regular fit with an elasticiated waistband and an adjustable drawstring, to provide a more personalised, secure fit. These shorts are equipped with Dri Fit technology, helping wick sweat away from the skin, enabling you to keep dry, comfortable and focused on the task at hand. The look is completed with the iconic Nike swoosh, delivering instant brand recognition.',
        ["accessories"],
        ["Golf Hat"]
    ),
    new Card(
        'Nike Everyday Plus',
        ['../img/accessories/img2_1.webp','../img/accessories/img2_2.webp'],
        '18',
        ['Black', 'Beige', 'White'],
        [5, 6, 7, 8, 9, 10],
        { oneStar: 1, twoStar: 0, treeStar: 22, fourStar: 5, fiveStar: 19 },
        'A true hybrid of style and comfort, the Nike Everyday Plus Crew Socks are cushioned in key areas to keep you comfortable throughout the day. Dri-FIT technology and breathable mesh at the top of your foot help keep your feet feeling cool and dry while an arch band provides a snug fit.',
        ["accessories"],
        ["Socks"]
    )
]

export default allCards