const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log(err));

const products = [
    // Clothing
    {
        name: "Urban Oversized Tee",
        description: "Premium cotton oversized t-shirt in matte black.",
        price: 3599,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Vintage Denim Jacket",
        description: "Classic blue denim jacket with distressed details.",
        price: 6799,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Slim Fit Chinos",
        description: "Beige chinos perfect for casual and formal wear.",
        price: 4399,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.2
    },
    {
        name: "Streetwear Hoodie",
        description: "Heavyweight hoodie with embroidered logo.",
        price: 5599,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Summer Floral Dress",
        description: "Lightweight and breathable fabric with floral print.",
        price: 4799,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Tech Fleece Joggers",
        description: "Modern athletic cut for ultimate comfort.",
        price: 3999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4
    },
    {
        name: "Classic White Button Up",
        description: "Essential crisp white shirt for any wardrobe.",
        price: 3199,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Leather Biker Jacket",
        description: "Real leather biker jacket with silver hardware.",
        price: 11999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9
    },
    {
        name: "High-Waist Jeans",
        description: "Flattering cut with durable denim fabric.",
        price: 5199,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Cropped Knit Sweater",
        description: "Soft wool blend sweater in pastel pink.",
        price: 4399,
        category: "clothing",
        image: "/knit_sweater.png",
        rating: 4.7
    },

    // Accessories
    {
        name: "Minimalist Watch",
        description: "Sleek black face with leather strap.",
        price: 9599,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Leather Totebag",
        description: "Spacious tote handmade from full-grain leather.",
        price: 7599,
        category: "accessories",
        image: "/leather_totebag.png",
        rating: 4.6
    },
    {
        name: "Aviator Sunglasses",
        description: "Classic gold frames with polarized lenses.",
        price: 8799,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Silver Chain Necklace",
        description: "Sterling silver cuban link chain.",
        price: 3599,
        category: "accessories",
        image: "/silver_chain.png",
        rating: 4.4
    },
    {
        name: "Canvas Backpack",
        description: "Durable backpack for travel and daily use.",
        price: 4799,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Wool Beanie",
        description: "Warm knitted beanie in charcoal grey.",
        price: 1999,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Leather Belt",
        description: "Full grain leather belt with brass buckle.",
        price: 2799,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Silk Scarf",
        description: "Luxurious silk scarf with abstract patterns.",
        price: 4399,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Gold Hoop Earrings",
        description: "14k gold plated lightweight hoops.",
        price: 2399,
        category: "accessories",
        image: "/gold_hoops.png",
        rating: 4.5
    },
    {
        name: "Baseball Cap",
        description: "Classic fit distressed cap.",
        price: 2249,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4
    },
    // New Clothing Items (40)
    {
        name: "Oversized Graphic Hoodie",
        description: "Streetwear essential with bold back print.",
        price: 4999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Cargo Utility Pants",
        description: "Functional cargo pants with multiple pockets.",
        price: 5499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Puffer Winter Jacket",
        description: "Insulated jacket for extreme cold weather.",
        price: 8999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Ribbed Turtleneck",
        description: "Slim fit turtleneck sweater in cream.",
        price: 3299,
        category: "clothing",
        image: "/knit_sweater.png",
        rating: 4.4
    },
    {
        name: "Distressed Denim Shorts",
        description: "Summer staple with raw hem detailing.",
        price: 2899,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Casual Check Shirt",
        description: "Soft flannel shirt in red and black check.",
        price: 2999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Navy Slim Blazer",
        description: "Sharp tailoring for smart-casual looks.",
        price: 7999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Grey Melange Sweatpants",
        description: "Premium cotton joggers for lounging.",
        price: 3499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Classic Beige Trench",
        description: "Timeless outer layer for transitional weather.",
        price: 10999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9
    },
    {
        name: "Boho Maxi Dress",
        description: "Flowy printed dress with tiered skirt.",
        price: 6499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Pleated Midi Skirt",
        description: "Elegant satin skirt in champagne gold.",
        price: 4599,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Basic Ribbed Tank",
        description: "Essential layering piece in white.",
        price: 1299,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.2
    },
    {
        name: "Chunky Knit Cardigan",
        description: "Cozy oversized cardigan with buttons.",
        price: 5299,
        category: "clothing",
        image: "/knit_sweater.png",
        rating: 4.8
    },
    {
        name: "Olive Bomber Jacket",
        description: "Classic military style flight jacket.",
        price: 6599,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Performance Leggings",
        description: "High-waist leggings for high-impact workouts.",
        price: 3699,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Retro Track Jacket",
        description: "Color-blocked jacket inspired by the 90s.",
        price: 4899,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Quilted Puffer Vest",
        description: "Sleeveless warmth for layering.",
        price: 4299,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4
    },
    {
        name: "Tailored Grey Trousers",
        description: "Wool blend trousers for office wear.",
        price: 5699,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Silk Blouse",
        description: "Luxurious pure silk button-up.",
        price: 8499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Pique Polo Shirt",
        description: "Breathable cotton polo in navy.",
        price: 2499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Teddy Fleece Coat",
        description: "Ultra-soft texture coat in camel.",
        price: 7499,
        category: "clothing",
        image: "/knit_sweater.png",
        rating: 4.7
    },
    {
        name: "Striped Mariner Tee",
        description: "Blue and white horizontal stripes.",
        price: 2199,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4
    },
    {
        name: "Velvet Evening Blazer",
        description: "Rich burgundy velvet for special occasions.",
        price: 9999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9
    },
    {
        name: "Linen Drawstring Pants",
        description: "Lightweight summer trousers.",
        price: 4199,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Workout Tank",
        description: "Moisture-wicking athletic top.",
        price: 1899,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Denim Sherpa Jacket",
        description: "Lined denim jacket for winter.",
        price: 7299,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Patterned Resort Shirt",
        description: "Bold print short sleeve shirt.",
        price: 3199,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Black Skinny  Jeans",
        description: "Stretch denim with stay-black technology.",
        price: 4999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Athletic Shorts",
        description: "Quick-dry shorts with liner.",
        price: 2699,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Wrap Dress",
        description: "Flattering silhouette suitable for work.",
        price: 5899,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Faux Fur Jacket",
        description: "Statement piece in emerald green.",
        price: 8499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Zip-Up Hoodie",
        description: "Convenient layer for gym or casual.",
        price: 4499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Wide Leg Trousers",
        description: "High fashion silhouette in black.",
        price: 6299,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Cropped Tee",
        description: "Boxy fit cropped t-shirt.",
        price: 1599,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Corduroy Jacket",
        description: "Vintage inspired brown corduroy.",
        price: 6899,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Oxford Shirt",
        description: "Heavy cotton button down.",
        price: 3699,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Pencil Skirt",
        description: "Structured skirt for professional look.",
        price: 3999,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4
    },
    {
        name: "Running Gilet",
        description: "Windproof vest for runners.",
        price: 3499,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Cashmere Sweater",
        description: "Pure luxury warmth in charcoal.",
        price: 14999,
        category: "clothing",
        image: "/knit_sweater.png",
        rating: 4.9
    },
    {
        name: "Floral Blouse",
        description: "Delicate print with sheer sleeves.",
        price: 4299,
        category: "clothing",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },

    // New Accessories Items (20)
    {
        name: "Classic Leather Wallet",
        description: "Bi-fold wallet in aged brown leather.",
        price: 3499,
        category: "accessories",
        image: "/leather_totebag.png",
        rating: 4.7
    },
    {
        name: "Sport Chronograph",
        description: "Water resistant watch with silicone strap.",
        price: 12599,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8
    },
    {
        name: "Cat Eye Sunglasses",
        description: "Retro shape with tortoise shell frame.",
        price: 6599,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Canvas Messenger Bag",
        description: "Rugged bag for students and commuters.",
        price: 5999,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Pearl Necklace",
        description: "Freshwater pearls with silver clasp.",
        price: 8999,
        category: "accessories",
        image: "/silver_chain.png",
        rating: 4.8
    },
    {
        name: "Leather Gloves",
        description: "Lined leather gloves (touchscreen compatible).",
        price: 4599,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Fedora Hat",
        description: "Wide brim wool felt hat.",
        price: 3899,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.4
    },
    {
        name: "Statement Earrings",
        description: "Bold geometric shapes in gold tone.",
        price: 2699,
        category: "accessories",
        image: "/gold_hoops.png",
        rating: 4.5
    },
    {
        name: "Silk Pocket Square",
        description: "Patterned handkerchief for suits.",
        price: 1499,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Laptop Sleeve",
        description: "Padded case for 13-inch devices.",
        price: 2299,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Braided Leather Bracelet",
        description: "Casual wrist accessory for men.",
        price: 1899,
        category: "accessories",
        image: "/silver_chain.png",
        rating: 4.4
    },
    {
        name: "Travel Toiletry Bag",
        description: "Waterproof bag for hygiene essentials.",
        price: 2999,
        category: "accessories",
        image: "/leather_totebag.png",
        rating: 4.5
    },
    {
        name: "Round Wire Glasses",
        description: "Clear lens fashion glasses.",
        price: 4299,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Bucket Hat",
        description: "Trendy street style hat in black.",
        price: 1999,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.3
    },
    {
        name: "Yoga Mat Strap",
        description: "Adjustable carrier for yoga mats.",
        price: 999,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6
    },
    {
        name: "Crossbody Phone Bag",
        description: "Mini bag just for phone and cards.",
        price: 3699,
        category: "accessories",
        image: "/leather_totebag.png",
        rating: 4.4
    },
    {
        name: "Velvet Choker",
        description: "90s inspired black velvet neckband.",
        price: 1199,
        category: "accessories",
        image: "/silver_chain.png",
        rating: 4.2
    },
    {
        name: "Digital Casio Watch",
        description: "Retro silver digital timepiece.",
        price: 4599,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7
    },
    {
        name: "Key Organizer",
        description: "Compact leather holder for keys.",
        price: 2499,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5
    },
    {
        name: "Hair Claw Clip",
        description: "Durable oversize clip in tortoise.",
        price: 899,
        category: "accessories",
        image: "/gold_hoops.png",
        rating: 4.4
    }
];

const seedDB = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Database Seeded");
    } catch (error) {
        console.error("Error Seeding Database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
