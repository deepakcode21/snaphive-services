import booking_img from "./booking_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";

import barber from "./barber.svg";
import plumber from "./plumber.svg";
import technicion from "./technicion.svg";
import chef from "./chef.svg";
import carpenter from "./carpenter.svg";
import painter from "./painter.svg";
import machanic from "./machanic.svg";

import barber1 from "./pro1.jpeg";
import barber2 from "./pro2.jpeg";
import barber3 from "./pro3.jpeg";
import barber4 from "./pro4.jpeg";
import barber5 from "./pro5.jpeg";
import chef1 from "./pro6.jpeg";
import chef2 from "./pro7.jpeg";
import chef3 from "./pro8.jpeg";
import chef4 from "./pro9.jpeg";
import chef5 from "./pro10.jpeg";
import painter1 from "./pro11.jpeg";
import painter2 from "./pro12.jpeg";
import painter3 from "./pro13.jpeg";
import painter4 from "./pro14.jpeg";
import painter5 from "./pro15.jpeg";
import plumber1 from "./pro16.jpeg";
import plumber2 from "./pro17.jpeg";
import plumber3 from "./pro18.jpeg";
import plumber4 from "./pro19.jpeg";
import plumber5 from "./pro20.jpeg";
import carpenter1 from "./pro21.jpeg";
import carpenter2 from "./pro22.jpeg";
import carpenter3 from "./pro23.jpeg";
import carpenter4 from "./pro24.jpeg";
import carpenter5 from "./pro25.jpeg";
import technician1 from "./pro26.jpeg";
import technician2 from "./pro27.jpeg";
import technician3 from "./pro28.jpeg";
import technician4 from "./pro29.jpeg";
import technician5 from "./pro30.jpeg";
import machanic1 from "./pro31.jpeg";
import machanic2 from "./pro32.jpeg";
import machanic3 from "./pro33.jpeg";
import machanic4 from "./pro34.jpeg";
import machanic5 from "./pro35.jpeg";

import pics1 from "../assets/pics1.jpeg";
import pics2 from "../assets/pics2.png";
import pics3 from "../assets/pics3.png";
import pics4 from "../assets/pics4.png";
import pics5 from "../assets/pics5.jpeg";

export const assets = {
  booking_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const categoryData = [
  {
    _id: "technician",
    speciality: "Technician",
    image: technicion,
  },
  {
    _id: "plumber",
    speciality: "Plumber",
    image: plumber,
  },
  {
    _id: "chef",
    speciality: "Chef",
    image: chef,
  },
  {
    _id: "barber",
    speciality: "Barber",
    image: barber,
  },
  {
    _id: "carpenter",
    speciality: "Carpenter",
    image: carpenter,
  },
  {
    _id: "machanic",
    speciality: "Machanic",
    image: machanic,
  },
  {
    _id: "painter",
    speciality: "Painter",
    image: painter,
  },
];

export const Professionals = [
  {
    _id: "pro1",
    name: "Richard James",
    image: barber1,
    speciality: "Barber",
    degree: "Bachelor of Fashion Design",
    experience: "4 Years",
    about:
      "Richard James is dedicated to delivering top-quality grooming services, specializing in precision haircuts, stylish trims, and expert beard care. With a focus on detail and customer satisfaction, Richard ensures every client leaves looking and feeling their best.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "pro2",
    name: "Michael Brown",
    image: plumber1,
    speciality: "Plumber",
    degree: "Diploma in Plumbing Technology",
    experience: "6 Years",
    about:
      "Michael Brown is a skilled plumber with extensive experience in residential and commercial plumbing systems. He specializes in pipe installation, leak repairs, and water heater maintenance, ensuring efficient and reliable service.",
    fees: 70,
    address: {
      line1: "22nd Avenue, Downtown",
      line2: "Main Street, Manchester",
    },
  },
  {
    _id: "pro3",
    name: "David Wilson",
    image: chef3,
    speciality: "Chef",
    degree: "Culinary Arts Degree",
    experience: "8 Years",
    about:
      "David Wilson is a passionate chef with expertise in international cuisines. He creates delicious and visually appealing dishes, focusing on fresh ingredients and innovative techniques to delight every palate.",
    fees: 90,
    address: {
      line1: "5th Lane, Food District",
      line2: "Gourmet Road, Paris",
    },
  },
  {
    _id: "pro4",
    name: "John Smith",
    image: painter1,
    speciality: "Painter",
    degree: "Bachelor of Fine Arts",
    experience: "5 Years",
    about:
      "John Smith is a talented painter specializing in interior and exterior home painting. He provides high-quality finishes, color consultations, and meticulous attention to detail for every project.",
    fees: 60,
    address: {
      line1: "10th Street, Art Ville",
      line2: "Canvas Road, New York",
    },
  },
  {
    _id: "pro5",
    name: "Robert Johnson",
    image: technician1,
    speciality: "Technician",
    degree: "Associate Degree in Electronics",
    experience: "7 Years",
    about:
      "Robert Johnson is an experienced technician specializing in repairing and maintaining electronic devices. He offers reliable solutions for smartphones, laptops, and home appliances.",
    fees: 55,
    address: {
      line1: "Tech Park, Silicon Valley",
      line2: "Gadget Lane, San Francisco",
    },
  },
  {
    _id: "pro6",
    name: "William Davis",
    image: carpenter2,
    speciality: "Carpenter",
    degree: "Diploma in Woodworking",
    experience: "9 Years",
    about:
      "William Davis is a master carpenter with expertise in custom furniture, cabinetry, and home renovations. He combines traditional craftsmanship with modern techniques to deliver exceptional results.",
    fees: 80,
    address: {
      line1: "Carpentry Lane, Woodville",
      line2: "Furniture Road, Chicago",
    },
  },
  {
    _id: "pro7",
    name: "James Miller",
    image: machanic1,
    speciality: "Mechanic",
    degree: "Automotive Technology Certificate",
    experience: "10 Years",
    about:
      "James Miller is a skilled mechanic specializing in car repairs, engine diagnostics, and routine maintenance. He ensures vehicles run smoothly and safely with his expert knowledge and attention to detail.",
    fees: 75,
    address: {
      line1: "Auto Street, Motor Town",
      line2: "Garage Road, Detroit",
    },
  },
  {
    _id: "pro8",
    name: "Charles Wilson",
    image: barber2,
    speciality: "Barber",
    degree: "Bachelor of Fashion Design",
    experience: "3 Years",
    about:
      "Charles Wilson is a dedicated barber with a passion for modern hairstyles and grooming techniques. He provides personalized services to help clients achieve their desired look.",
    fees: 45,
    address: {
      line1: "Haircut Lane, Style City",
      line2: "Grooming Road, Los Angeles",
    },
  },
  {
    _id: "pro9",
    name: "Thomas Moore",
    image: plumber2,
    speciality: "Plumber",
    degree: "Diploma in Plumbing Technology",
    experience: "5 Years",
    about:
      "Thomas Moore is a reliable plumber with expertise in fixing leaks, installing fixtures, and maintaining plumbing systems. He ensures prompt and efficient service for every client.",
    fees: 65,
    address: {
      line1: "Pipe Street, Water Ville",
      line2: "Plumbing Road, Houston",
    },
  },
  {
    _id: "pro10",
    name: "Christopher Taylor",
    image: chef5,
    speciality: "Chef",
    degree: "Culinary Arts Degree",
    experience: "7 Years",
    about:
      "Christopher Taylor is a creative chef specializing in fusion cuisine. He combines flavors from around the world to create unique and memorable dining experiences.",
    fees: 85,
    address: {
      line1: "Flavor Lane, Taste Town",
      line2: "Culinary Road, Miami",
    },
  },
  {
    _id: "pro11",
    name: "Daniel Anderson",
    image: painter2,
    speciality: "Painter",
    degree: "Bachelor of Fine Arts",
    experience: "4 Years",
    about:
      "Daniel Anderson is a skilled painter with a focus on residential projects. He provides high-quality finishes and personalized color schemes to transform spaces.",
    fees: 55,
    address: {
      line1: "Brush Street, Color Ville",
      line2: "Paint Road, Seattle",
    },
  },
  {
    _id: "pro12",
    name: "Matthew Thomas",
    image: technician2,
    speciality: "Technician",
    degree: "Associate Degree in Electronics",
    experience: "6 Years",
    about:
      "Matthew Thomas is an expert technician specializing in repairing smartphones and laptops. He offers fast and reliable solutions to keep your devices running smoothly.",
    fees: 50,
    address: {
      line1: "Tech Lane, Gadget Ville",
      line2: "Repair Road, Austin",
    },
  },
  {
    _id: "pro13",
    name: "Anthony Jackson",
    image: carpenter3,
    speciality: "Carpenter",
    degree: "Diploma in Woodworking",
    experience: "8 Years",
    about:
      "Anthony Jackson is a skilled carpenter specializing in custom furniture and home renovations. He combines traditional techniques with modern designs to create beautiful and functional pieces.",
    fees: 75,
    address: {
      line1: "Woodcraft Lane, Furniture Ville",
      line2: "Carpentry Road, Denver",
    },
  },
  {
    _id: "pro14",
    name: "Mark White",
    image: machanic2,
    speciality: "Mechanic",
    degree: "Automotive Technology Certificate",
    experience: "9 Years",
    about:
      "Mark White is a professional mechanic with expertise in car diagnostics and repairs. He ensures your vehicle is in top condition with his thorough and reliable service.",
    fees: 70,
    address: {
      line1: "Auto Lane, Motor Ville",
      line2: "Garage Road, Phoenix",
    },
  },
  {
    _id: "pro15",
    name: "Donald Harris",
    image: barber3,
    speciality: "Barber",
    degree: "Bachelor of Fashion Design",
    experience: "5 Years",
    about:
      "Donald Harris is a talented barber specializing in modern haircuts and grooming services. He provides a relaxing and enjoyable experience for every client.",
    fees: 50,
    address: {
      line1: "Style Street, Grooming Ville",
      line2: "Haircut Road, San Diego",
    },
  },
  {
    _id: "pro16",
    name: "Steven Martin",
    image: plumber3,
    speciality: "Plumber",
    degree: "Diploma in Plumbing Technology",
    experience: "7 Years",
    about:
      "Steven Martin is a skilled plumber with expertise in residential plumbing systems. He offers reliable and efficient solutions for all your plumbing needs.",
    fees: 60,
    address: {
      line1: "Pipe Lane, Water Ville",
      line2: "Plumbing Road, Dallas",
    },
  },
  {
    _id: "pro17",
    name: "Paul Thompson",
    image: chef1,
    speciality: "Chef",
    degree: "Culinary Arts Degree",
    experience: "6 Years",
    about:
      "Paul Thompson is a passionate chef specializing in Italian cuisine. He creates authentic and delicious dishes using fresh and high-quality ingredients.",
    fees: 80,
    address: {
      line1: "Pasta Lane, Taste Ville",
      line2: "Culinary Road, Boston",
    },
  },
  {
    _id: "pro18",
    name: "Andrew Garcia",
    image: painter3,
    speciality: "Painter",
    degree: "Bachelor of Fine Arts",
    experience: "5 Years",
    about:
      "Andrew Garcia is a talented painter with a focus on exterior home painting. He provides durable and visually appealing finishes for every project.",
    fees: 55,
    address: {
      line1: "Brush Lane, Color Ville",
      line2: "Paint Road, Atlanta",
    },
  },
  {
    _id: "pro19",
    name: "Joshua Martinez",
    image: technician3,
    speciality: "Technician",
    degree: "Associate Degree in Electronics",
    experience: "4 Years",
    about:
      "Joshua Martinez is an experienced technician specializing in home appliance repairs. He offers fast and reliable solutions to keep your household running smoothly.",
    fees: 50,
    address: {
      line1: "Tech Lane, Gadget Ville",
      line2: "Repair Road, Orlando",
    },
  },
  {
    _id: "pro20",
    name: "Kevin Robinson",
    image: carpenter4,
    speciality: "Carpenter",
    degree: "Diploma in Woodworking",
    experience: "7 Years",
    about:
      "Kevin Robinson is a skilled carpenter specializing in custom cabinetry and home renovations. He combines functionality with aesthetics to create beautiful spaces.",
    fees: 70,
    address: {
      line1: "Woodcraft Lane, Furniture Ville",
      line2: "Carpentry Road, San Antonio",
    },
  },
  {
    _id: "pro21",
    name: "Brian Clark",
    image: machanic3,
    speciality: "Mechanic",
    degree: "Automotive Technology Certificate",
    experience: "8 Years",
    about:
      "Brian Clark is a professional mechanic specializing in car maintenance and repairs. He ensures your vehicle is safe and reliable with his expert service.",
    fees: 65,
    address: {
      line1: "Auto Lane, Motor Ville",
      line2: "Garage Road, Las Vegas",
    },
  },
  {
    _id: "pro22",
    name: "Edward Rodriguez",
    image: barber4,
    speciality: "Barber",
    degree: "Bachelor of Fashion Design",
    experience: "4 Years",
    about:
      "Edward Rodriguez is a dedicated barber with a passion for modern hairstyles. He provides personalized grooming services to help clients look their best.",
    fees: 50,
    address: {
      line1: "Style Lane, Grooming Ville",
      line2: "Haircut Road, Portland",
    },
  },
  {
    _id: "pro23",
    name: "Ronald Lewis",
    image: plumber4,
    speciality: "Plumber",
    degree: "Diploma in Plumbing Technology",
    experience: "6 Years",
    about:
      "Ronald Lewis is a skilled plumber with expertise in fixing leaks and installing fixtures. He provides reliable and efficient service for every client.",
    fees: 60,
    address: {
      line1: "Pipe Lane, Water Ville",
      line2: "Plumbing Road, Nashville",
    },
  },
  {
    _id: "pro24",
    name: "Jason Lee",
    image: chef4,
    speciality: "Chef",
    degree: "Culinary Arts Degree",
    experience: "5 Years",
    about:
      "Jason Lee is a creative chef specializing in Asian cuisine. He combines traditional flavors with modern techniques to create delicious and unique dishes.",
    fees: 75,
    address: {
      line1: "Flavor Lane, Taste Ville",
      line2: "Culinary Road, Minneapolis",
    },
  },
  {
    _id: "pro25",
    name: "Jeffrey Walker",
    image: painter4,
    speciality: "Painter",
    degree: "Bachelor of Fine Arts",
    experience: "4 Years",
    about:
      "Jeffrey Walker is a skilled painter with a focus on interior home painting. He provides high-quality finishes and personalized color consultations.",
    fees: 55,
    address: {
      line1: "Brush Lane, Color Ville",
      line2: "Paint Road, Charlotte",
    },
  },
  {
    _id: "pro26",
    name: "Ryan Hall",
    image: technician4,
    speciality: "Technician",
    degree: "Associate Degree in Electronics",
    experience: "5 Years",
    about:
      "Ryan Hall is an experienced technician specializing in smartphone and laptop repairs. He offers fast and reliable solutions to keep your devices in top condition.",
    fees: 50,
    address: {
      line1: "Tech Lane, Gadget Ville",
      line2: "Repair Road, Tampa",
    },
  },
  {
    _id: "pro27",
    name: "Gary Allen",
    image: carpenter5,
    speciality: "Carpenter",
    degree: "Diploma in Woodworking",
    experience: "6 Years",
    about:
      "Gary Allen is a skilled carpenter specializing in custom furniture and home renovations. He combines traditional craftsmanship with modern designs to create beautiful spaces.",
    fees: 70,
    address: {
      line1: "Woodcraft Lane, Furniture Ville",
      line2: "Carpentry Road, Indianapolis",
    },
  },
  {
    _id: "pro28",
    name: "Timothy Young",
    image: machanic4,
    speciality: "Mechanic",
    degree: "Automotive Technology Certificate",
    experience: "7 Years",
    about:
      "Timothy Young is a professional mechanic specializing in car diagnostics and repairs. He ensures your vehicle is safe and reliable with his expert service.",
    fees: 65,
    address: {
      line1: "Auto Lane, Motor Ville",
      line2: "Garage Road, Columbus",
    },
  },
  {
    _id: "pro29",
    name: "Jose Hernandez",
    image: barber5,
    speciality: "Barber",
    degree: "Bachelor of Fashion Design",
    experience: "3 Years",
    about:
      "Jose Hernandez is a talented barber with a passion for modern hairstyles. He provides personalized grooming services to help clients achieve their desired look.",
    fees: 45,
    address: {
      line1: "Style Lane, Grooming Ville",
      line2: "Haircut Road, San Jose",
    },
  },
  {
    _id: "pro30",
    name: "Larry King",
    image: plumber5,
    speciality: "Plumber",
    degree: "Diploma in Plumbing Technology",
    experience: "5 Years",
    about:
      "Larry King is a reliable plumber with expertise in fixing leaks and installing fixtures. He ensures prompt and efficient service for every client.",
    fees: 60,
    address: {
      line1: "Pipe Lane, Water Ville",
      line2: "Plumbing Road, San Francisco",
    },
  },
  {
    _id: "pro31",
    name: "Scott Wright",
    image: chef2,
    speciality: "Chef",
    degree: "Culinary Arts Degree",
    experience: "6 Years",
    about:
      "Scott Wright is a passionate chef specializing in French cuisine. He creates delicious and visually appealing dishes using fresh and high-quality ingredients.",
    fees: 80,
    address: {
      line1: "Flavor Lane, Taste Ville",
      line2: "Culinary Road, Philadelphia",
    },
  },
  {
    _id: "pro32",
    name: "Eric Lopez",
    image: painter5,
    speciality: "Painter",
    degree: "Bachelor of Fine Arts",
    experience: "4 Years",
    about:
      "Eric Lopez is a skilled painter with a focus on residential projects. He provides high-quality finishes and personalized color schemes to transform spaces.",
    fees: 55,
    address: {
      line1: "Brush Lane, Color Ville",
      line2: "Paint Road, Phoenix",
    },
  },
  {
    _id: "pro33",
    name: "Stephen Hill",
    image: technician5,
    speciality: "Technician",
    degree: "Associate Degree in Electronics",
    experience: "5 Years",
    about:
      "Stephen Hill is an expert technician specializing in repairing smartphones and laptops. He offers fast and reliable solutions to keep your devices running smoothly.",
    fees: 50,
    address: {
      line1: "Tech Lane, Gadget Ville",
      line2: "Repair Road, San Diego",
    },
  },
  {
    _id: "pro34",
    name: "Adam Green",
    image: carpenter1,
    speciality: "Carpenter",
    degree: "Diploma in Woodworking",
    experience: "7 Years",
    about:
      "Adam Green is a skilled carpenter specializing in custom furniture and home renovations. He combines traditional techniques with modern designs to create beautiful and functional pieces.",
    fees: 75,
    address: {
      line1: "Woodcraft Lane, Furniture Ville",
      line2: "Carpentry Road, Dallas",
    },
  },
  {
    _id: "pro35",
    name: "William Brown",
    image: machanic5,
    speciality: "Mechanic",
    degree: "Diploma in Fine Arts",
    experience: "5 Years",
    about:
      "William Brown is an expert in residential and commercial painting, delivering quality finishes with artistic precision.",
    fees: 70,
    address: {
      line1: "Elm Street, Green Park",
      line2: "Near Metro Station, Chicago",
    },
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Homeowner",
    comment:
      "SnapHive made finding a plumber so easy! The professional was punctual, skilled, and fixed my issue in no time. Highly recommend!",
    image: pics3,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Owner",
    comment:
      "I booked an electrician through SnapHive, and the service was exceptional. The platform is user-friendly, and the professionals are top-notch.",
    image: pics1,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Fitness Enthusiast",
    comment:
      "I found the perfect fitness trainer on SnapHive. The trainer was knowledgeable and helped me achieve my fitness goals. Thank you!",
    image: pics2,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Homeowner",
    comment:
      "SnapHive is a lifesaver! I found a great painter who transformed my home. The process was seamless, and the results were amazing.",
    image: pics4,
  },
  {
    id: 5,
    name: "Sarah Lee",
    role: "Event Planner",
    comment:
      "I used SnapHive to find a caterer for my event, and it was a fantastic experience. The caterer was professional and delivered delicious food!",
    image: pics1,
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Software Engineer",
    comment:
      "SnapHive helped me find a reliable handyman. The service was quick, and the handyman did an excellent job fixing my shelves.",
    image: pics5,
  },
  {
    id: 7,
    name: "Emily Davis",
    role: "Teacher",
    comment:
      "I booked a tutor for my son through SnapHive, and it was a great decision. The tutor was patient and helped him improve his grades significantly.",
    image: pics2,
  },
  {
    id: 8,
    name: "Chris Evans",
    role: "Photographer",
    comment:
      "SnapHive connected me with a fantastic model for my photoshoot. The platform is easy to use, and the results were outstanding.",
    image: pics3,
  },
  {
    id: 9,
    name: "Laura Martinez",
    role: "Interior Designer",
    comment:
      "I found a skilled carpenter on SnapHive who helped me with a custom furniture project. The craftsmanship was impeccable!",
    image: pics1,
  },
  {
    id: 10,
    name: "Daniel Garcia",
    role: "Chef",
    comment:
      "SnapHive helped me find a sous chef for my restaurant. The process was smooth, and the chef was highly skilled and professional.",
    image: pics4,
  },
  {
    id: 11,
    name: "Olivia Taylor",
    role: "Yoga Instructor",
    comment:
      "I used SnapHive to find a studio space for my yoga classes. The platform made it easy to find the perfect location quickly.",
    image: pics2,
  },
  {
    id: 12,
    name: "James Anderson",
    role: "Real Estate Agent",
    comment:
      "SnapHive helped me find a reliable cleaning service for my properties. The cleaners were thorough and efficient.",
    image: pics5,
  },
  {
    id: 13,
    name: "Sophia Clark",
    role: "Graphic Designer",
    comment:
      "I found a great web developer on SnapHive who helped me redesign my portfolio. The results were beyond my expectations!",
    image: pics1,
  },
  {
    id: 14,
    name: "William Rodriguez",
    role: "Musician",
    comment:
      "SnapHive connected me with a sound engineer for my recording sessions. The engineer was professional and delivered high-quality work.",
    image: pics3,
  },
  {
    id: 15,
    name: "Ava Hernandez",
    role: "Marketing Specialist",
    comment:
      "I used SnapHive to find a social media manager for my campaign. The manager was creative and helped me achieve my marketing goals.",
    image: pics2,
  },
  {
    id: 16,
    name: "Ethan Moore",
    role: "Student",
    comment:
      "SnapHive helped me find a great math tutor. The tutor was patient and explained concepts clearly, which improved my grades.",
    image: pics4,
  },
  {
    id: 17,
    name: "Mia Lewis",
    role: "Freelancer",
    comment:
      "I found a reliable virtual assistant on SnapHive who helped me manage my workload. The assistant was efficient and professional.",
    image: pics1,
  },
  {
    id: 18,
    name: "Noah Walker",
    role: "Entrepreneur",
    comment:
      "SnapHive helped me find a business consultant who provided valuable insights for my startup. The experience was excellent.",
    image: pics5,
  },
  {
    id: 19,
    name: "Charlotte Hall",
    role: "Artist",
    comment:
      "I used SnapHive to find a gallery space for my art exhibition. The platform made it easy to find the perfect venue.",
    image: pics3,
  },
  {
    id: 20,
    name: "Liam Young",
    role: "Writer",
    comment:
      "SnapHive connected me with an editor for my book. The editor was thorough and helped me refine my manuscript.",
    image: pics4,
  },
];
