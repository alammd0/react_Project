const tourData = [
    {
        id: "1",
        imageUrl: "https://images.pexels.com/photos/12446112/pexels-photo-12446112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Red Ford or Lal Qila",
        price: "4,599",
        desc: "The Red Fort, or Lal Qila, is a historic fort in Old Delhi, India, built by Mughal Emperor Shah Jahan in 1639. It served as the residence for Mughal emperors for nearly 200 years and is known for its massive red sandstone walls. The fort includes architectural highlights like the Diwan-i-Aam, Diwan-i-Khas, Moti Masjid, and charbagh gardens. Today, it symbolizes India's independence, with the Prime Minister hoisting the national flag there each Independence Day. Recognized as a UNESCO World Heritage Site, it draws millions of visitors yearly",
    },
    {
        id: "2",
        imageUrl: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Taj Mahal",
        price: "4,999",
        desc: "The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal. Completed in 1653, this UNESCO World Heritage Site is renowned for its symmetrical architecture, intricate inlay work, and beautiful gardens. The monument combines elements of Islamic, Persian, and Indian architectural styles, making it a masterpiece of Mughal design. Known as a symbol of love, the Taj Mahal attracts millions of visitors each year and is one of the most admired landmarks in the world."
    },
    {
        id: "3",
        imageUrl: "https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Taj Hotel",
        price: "8,999",
        desc: "The Taj Mahal Palace Hotel in Mumbai, India, is a luxurious and historic five-star hotel overlooking the Arabian Sea. Opened in 1903, it was the first in India to offer modern hospitality and has hosted numerous world leaders, celebrities, and dignitaries. Known for its Indo-Saracenic architecture, the hotel features grand arches, domes, and intricate detailing, blending Indian and Western styles. It gained global attention during the 2008 Mumbai attacks, symbolizing resilience and unity. Today, the Taj Mahal Palace remains an iconic landmark, celebrated for its elegance, heritage, and exceptional service."
    },
    {
        id: "4",
        imageUrl: "https://images.pexels.com/photos/27297071/pexels-photo-27297071/free-photo-of-ganga-aarti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Vanarasi",
        price: "2,599",
        desc: "Varanasi, also known as Banaras or Kashi, is one of the oldest continuously inhabited cities in the world, located on the banks of the Ganges River in northern India. Known as a spiritual center in Hinduism, it is revered as the city of Lord Shiva and attracts millions of pilgrims who come to bathe in the Ganges, seeking purification. The city is renowned for its vibrant ghats (steps leading to the river), with notable ones like Dashashwamedh and Manikarnika, where daily rituals and ceremonies are performed. Varanasi is also famous for its intricate silk weaving, especially the luxurious Banarasi sarees. Rich in art, music, and literature, it was the home of celebrated poets like Tulsidas and Kabir. The evening Ganga Aarti (prayer) on the ghats is a mesmerizing experience, drawing visitors from around the world. Varanasi also hosts significant Buddhist landmarks nearby, such as Sarnath, where Buddha gave his first sermon. The city embodies a blend of ancient traditions and vibrant spirituality, making it a unique and enduring symbol of Indian culture."
    },
    {
        id: "5",
        imageUrl: "https://images.pexels.com/photos/6723243/pexels-photo-6723243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sikkim",
        price: "15,999",
        desc: "Sikkim, a small Himalayan state in northeastern India, is known for its stunning landscapes, diverse flora and fauna, and vibrant culture. Nestled between Nepal, Bhutan, and Tibet, it boasts majestic views of Mount Kanchenjunga, the third-highest peak in the world. Sikkim is home to charming hill towns like Gangtok, its capital, which is famous for monasteries, Tibetan-style architecture, and serene vibes. Rich in biodiversity, it has lush valleys, alpine forests, and beautiful rhododendron-covered hills. The state is predominantly Buddhist, with revered monasteries like Rumtek and Pemayangtse reflecting its spiritual heritage. Adventure enthusiasts come for trekking, river rafting, and mountaineering. Sikkim is also known for its organic farming initiatives and pristine environment, being India's first fully organic state. With friendly locals, colorful festivals, and unspoiled beauty, Sikkim is a peaceful paradise for nature lovers and spiritual seekers alike."
    },
    {
        id: "6",
        imageUrl: "https://images.pexels.com/photos/25311368/pexels-photo-25311368/free-photo-of-scenic-view-of-hillside-houses-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Gangtok",
        price: "10,999",
        desc: "Gangtok, the capital of Sikkim, is a charming hill town nestled in the Himalayas, renowned for its scenic beauty and vibrant culture. Set at an altitude of around 1,650 meters, Gangtok offers stunning views of Mount Kanchenjunga, especially at sunrise. The town is known for its well-preserved Buddhist heritage, with famous monasteries like Rumtek, Enchey, and Pemayangtse nearby. MG Marg, the town’s main street, is a popular pedestrian-friendly area with shops, cafés, and local crafts. The Namgyal Institute of Tibetology, located here, is a notable research center on Tibetan culture and Buddhism. Gangtok also offers a gateway to various nature spots, such as Tsomgo Lake and Nathula Pass, which leads to the India-China border. With a mix of traditional and modern attractions, Gangtok attracts both nature lovers and cultural enthusiasts year-round​"
    },
    {
        id: "7",
        imageUrl: "https://images.pexels.com/photos/29116241/pexels-photo-29116241/free-photo-of-magnificent-dudhsagar-waterfall-in-summer-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Goa",
        price: "5,599",
        desc: "Goa, located on India’s western coast, is famous for its beautiful beaches, vibrant nightlife, rich cultural heritage, and Portuguese-influenced architecture. Popular spots include Baga and Anjuna beaches, where water sports and beach shacks are abundant. Goa also has historic sites like the Basilica of Bom Jesus and Se Cathedral, along with lush spice plantations and wildlife sanctuaries. Known for its lively festivals and music, Goa attracts both leisure travelers and adventure enthusiasts year-round."
    },
    {
        id: "8",
        imageUrl: "https://images.pexels.com/photos/8171698/pexels-photo-8171698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Haridwar",
        price: "4,999",
        desc: "Haridwar is a significant pilgrimage city located in Uttarakhand, India, situated on the banks of the Ganges River. Renowned for its spiritual ambiance, it attracts millions of devotees who come to partake in sacred rituals and ceremonies. The city is famous for its ghats, especially Har Ki Pauri, where pilgrims perform rituals and take holy dips believed to cleanse sins and bring spiritual merit. Key attractions include the Chandi Devi Temple and the Maya Devi Temple, both of which hold immense religious importance."
    },
    {
        id: "9",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipNPeN53NXnAg98raoI6Zio0k1a3DzqjPSEdQcwB=w540-h312-n-k-no",
        name: "Hyderabad",
        price: "4,500",
        desc: "Hyderabad, known as the City of Pearls, is a vibrant metropolis blending rich history and modernity. Famous for its iconic Charminar, the city offers a mix of cultural attractions, including the historic Golconda Fort and the beautiful Hussain Sagar Lake. Renowned for its delectable cuisine, particularly Hyderabadi biryani, visitors can explore bustling markets and indulge in local delicacies. The Ramoji Film City and various shopping destinations add to the allure of this dynamic city, making it a perfect travel destination for both history enthusiasts and food lovers."

    },
    {
        id: "10",
        imageUrl: "https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Jaipur",
        price: "5,000",
        desc: "Jaipur, known as the Pink City, is the capital of Rajasthan, India, famous for its stunning palaces, forts, and vibrant culture. Key attractions include the majestic Amer Fort, the City Palace, and the Hawa Mahal, showcasing exquisite Rajput architecture. Jaipur is also renowned for its colorful bazaars, where visitors can shop for traditional handicrafts, jewelry, and textiles. The city's rich history is complemented by its lively festivals and delicious local cuisine, making it a captivating destination for travelers seeking both adventure and cultural experiences."

    },
    {
        id: "11",
        imageUrl: "https://images.pexels.com/photos/29109527/pexels-photo-29109527/free-photo-of-scenic-pahalgam-mountain-landscape-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Kashmir",
        price: "10,000",
        desc: "Kashmir, often referred to as 'Paradise on Earth,' is renowned for its breathtaking landscapes, including snow-capped mountains, lush valleys, and pristine lakes. Key attractions include the picturesque Dal Lake, famous for its houseboats and shikaras, and the stunning gardens of Mughal architecture like Shalimar Bagh and Nishat Bagh. Visitors can enjoy adventure activities such as trekking, skiing, and river rafting in places like Gulmarg and Pahalgam. The region is also rich in culture, with traditional crafts, cuisine, and the warmth of its hospitality, making it a must-visit destination for nature lovers and cultural enthusiasts alike."

    }
]

export default tourData;