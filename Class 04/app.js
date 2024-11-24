// Q1


// let mathMarks = +prompt("Enter math marks");
// let englishMarks = +prompt("Enter english marks");
// let scienceMarks = +prompt("Enter science marks");
// let computerMarks = +prompt("Enter computer marks");

// const obtainedMarks = mathMarks + englishMarks + scienceMarks + computerMarks;
// const totalMarks = 400;
// const percentage = obtainedMarks / totalMarks * 100;
// let grade = percentage < 40? 'Failed' : percentage >=40 && percentage <50 ? 'D' : percentage >=50 && percentage <60 ? 'C' : percentage >=60 && percentage <70 ? 'B' : percentage >=70 && percentage <80 ? 'A' : percentage >=80 && percentage <=100 ? 'A+' : 'Invalid percentage';

// document.write(`
//     <h1>Mark Sheet</h1>
//     <strong>Math Marks:</strong> ${mathMarks}<br>
//     <strong>English Marks:</strong> ${englishMarks}<br>
//     <strong>Science Marks:</strong> ${scienceMarks}<br>
//     <strong>Computer Marks:</strong> ${computerMarks}<br>
//     <strong>Obtained Marks:</strong> ${obtainedMarks}<br>
//     <strong>Total Marks:</strong> ${totalMarks}<br>
//     <strong>Percentage:</strong> ${percentage}%<br>
//     <strong>Grade:</strong> ${grade}`);


// Q2


// var mobiles = {
//   iphone: {
//       iphone7: {
//           processor: "Snapdragon 8 Gen 2",
//           memory: {
//               ram: 12,
//               storage: 512,
//           },
//           camera: {
//               rear: {
//                   main: 200,
//                   ultrawide: 12,
//                   telephoto: 10,
//                   telephotoPeriscope: 10,
//               },
//               front: 10,
//           },
//           brand: "iphone",
//           battery: 5000,
//           operatingSystem: "Android 13",
//           specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
//       },
//       iphone8: {
//           processor: "Snapdragon 12 Gen 5",
//           memory: {
//               ram: 8,
//               storage: 256,
//           },
//           brand: "iphone",
//           camera: {
//               rear: {
//                   main: 180,
//                   ultrawide: 15,
//                   telephoto: 10,
//                   telephotoPeriscope: 20,
//               },
//               front: 12,
//           },
//           battery: 8000,
//           operatingSystem: "iphone 8",
//           specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
//       },
//       iphone8plus: {
//           processor: "Snapdragon 5 Gen 6",
//           memory: {
//               ram: 8,
//               storage: 128,
//           },
//           brand: "iphone",

//           camera: {
//               rear: {
//                   main: 160,
//                   ultrawide: 18,
//                   telephoto: 10,
//                   telephotoPeriscope: 8,
//               },
//               front: 16,
//           },
//           battery: 5000,
//           operatingSystem: "iphone 8",
//           specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
//       },
//       iphoneX: {
//           processor: "Snapdragon 5 Gen 4",
//           memory: {
//               ram: 8,
//               storage: 256,
//           },
//           brand: "iphone",

//           camera: {
//               rear: {
//                   main: 130,
//                   ultrawide: 16,
//                   telephoto: 10,
//                   telephotoPeriscope: 18,
//               },
//               front: 14,
//           },
//           battery: 6000,
//           operatingSystem: "iphone X",
//           specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
//       },
//       iphone11: {
//           processor: "Snapdragon 7 Gen 9",
//           memory: {
//               ram: 16,
//               storage: 512,
//           },
//           camera: {
//               rear: {
//                   main: 150,
//                   ultrawide: 24,
//                   telephoto: 16,
//                   telephotoPeriscope: 10,
//               },
//               front: 20,
//           },
//           brand: "iphone",

//           battery: 10000,
//           operatingSystem: "iphone 11",
//           specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
//       },
//   },
//   xiomi: {
//       redmiA2: {
//           modelName: "Mi 12 Pro",
//           display: {
//               size: 6.73,
//               resolution: "3200 x 1440",
//               panelType: "AMOLED",
//               refreshRate: 120,
//           },
//           brand: "xiomi",

//           processor: "Snapdragon 8 Gen 1",
//           memory: {
//               ram: 8,
//               storage: 256,
//           },
//           camera: {
//               rear: {
//                   main: "50MP",
//                   ultrawide: "50MP",
//                   telephoto: "48MP",
//               },
//               front: "32MP",
//           },
//           battery: 4600,
//           operatingSystem: "Android 12",
//           specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
//       },
//       redmi10: {
//           modelName: "Mi 8 Pro",
//           display: {
//               size: 5.73,
//               resolution: "3000 x 1320",
//               panelType: "AMOLED",
//               refreshRate: 100,
//           },
//           brand: "xiomi",
//           processor: "Snapdragon 7 Gen 5",
//           memory: {
//               ram: 12,
//               storage: 256,
//           },
//           camera: {
//               rear: {
//                   main: "50MP",
//                   ultrawide: "50MP",
//                   telephoto: "48MP",
//               },
//               front: "32MP",
//           },
//           brand: "xiomi",

//           battery: 5000,
//           operatingSystem: "Android 11",
//           specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
//       },

//       redmi11: {
//           modelName: "Mi 14 Pro",
//           display: {
//               size: 6.0,
//               resolution: "3000 x 1240",
//               panelType: "AMOLED",
//               refreshRate: 150,
//           },
//           brand: "xiomi",

//           processor: "Snapdragon 8 Gen 4",
//           memory: {
//               ram: 12,
//               storage: 512,
//           },
//           camera: {
//               rear: {
//                   main: "50MP",
//                   ultrawide: "50MP",
//                   telephoto: "48MP",
//               },
//               front: "32MP",
//           },
//           battery: 8000,
//           operatingSystem: "Android 12",
//           specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
//       },

//       redmi12: {
//           modelName: "Mi 12 Pro",
//           display: {
//               size: 7.4,
//               resolution: "3200 x 1440",
//               panelType: "AMOLED",
//               refreshRate: 180,
//           },
//           brand: "xiomi",

//           processor: "Snapdragon 12 Gen 1",
//           memory: {
//               ram: 12,
//               storage: 512,
//           },
//           camera: {
//               rear: {
//                   main: "50MP",
//                   ultrawide: "50MP",
//                   telephoto: "48MP",
//               },
//               front: "32MP",
//           },
//           battery: 8000,
//           operatingSystem: "Android 13",
//           specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
//       },

//       redmi13: {
//           modelName: "Mi 14 Pro",
//           display: {
//               size: 8.03,
//               resolution: "4200 x 1540",
//               panelType: "AMOLED",
//               refreshRate: 100,
//           },
//           brand: "xiomi",

//           processor: "Snapdragon 8 Gen 6",
//           memory: {
//               ram: 12,
//               storage: 256,
//           },
//           camera: {
//               rear: {
//                   main: "50MP",
//                   ultrawide: "50MP",
//                   telephoto: "48MP",
//               },
//               front: "32MP",
//           },
//           battery: 10000,
//           operatingSystem: "Android 13",
//           specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
//       },

//       redmi13C: {
//           modelName: "Mi 14 Pro",
//           display: {
//               size: 8.43,
//               resolution: "4200 x 1340",
//               panelType: "AMOLED",
//               refreshRate: 100,
//           },
//           processor: "Snapdragon 9 Gen 5",
//           memory: {
//               ram: 12,
//               storage: 512,
//           },
//           brand: "xiomi",

//           camera: {
//               rear: {
//                   main: "50MP",
//                   ultrawide: "50MP",
//                   telephoto: "48MP",
//               },
//               front: "32MP",
//           },
//           battery: 10000,
//           operatingSystem: "Android 13",
//           specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
//       },
//   },
//   realme: {
//       realmiNote50: {
//           brand: "Realme",
//           model: " hypothetical model ", // Replace with specific model name
//           display: {
//               size: "6.5 inches",
//               resolution: "FHD+ (1080 x 2400 pixels)",
//               type: "AMOLED",
//           },
//           brand: "xiomi",

//           processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
//           memory: {
//               ram: "8GB",
//               storage: "128GB",
//           },
//           camera: {
//               rear: {
//                   resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
//               },
//               front: {
//                   resolution: "16MP",
//               },
//           },
//           battery: {
//               capacity: "5000mAh",
//               fastCharging: "65W",
//           },
//           operatingSystem: "Android 12",
//           specialFeatures: [
//               "In-display fingerprint sensor",
//               "3.5mm headphone jack",
//           ],
//       },
//       realmiC67: {
//           brand: "Realme",
//           model: " hypothetical model ", // Replace with specific model name
//           display: {
//               size: "6.7 inches",
//               resolution: "FHD+ (1280 x 2100 pixels)",
//               type: "AMOLED",
//           },
//           processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
//           memory: {
//               ram: "8GB",
//               storage: "256GB",
//           },
//           brand: "xiomi",

//           camera: {
//               rear: {
//                   resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
//               },
//               front: {
//                   resolution: "14MP",
//               },
//           },
//           battery: {
//               capacity: "5000mAh",
//               fastCharging: "65W",
//           },
//           operatingSystem: "Android 11",
//           specialFeatures: [
//               "In-display fingerprint sensor",
//               "3.5mm headphone jack",
//           ],
//       },
//       realmiC53: {
//           brand: "Realme",
//           model: " hypothetical model ", // Replace with specific model name
//           display: {
//               size: "7. 1inches",
//               resolution: "FHD+ (1180 x 2500 pixels)",
//               type: "AMOLED",
//           },
//           processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
//           memory: {
//               ram: "12GB",
//               storage: "128GB",
//           },
//           brand: "xiomi",

//           camera: {
//               rear: {
//                   resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
//               },
//               front: {
//                   resolution: "18MP",
//               },
//           },
//           battery: {
//               capacity: "8000mAh",
//               fastCharging: "65W",
//           },
//           operatingSystem: "Android 12",
//           specialFeatures: [
//               "In-display fingerprint sensor",
//               "3.5mm headphone jack",
//           ],
//       },
//       realmi9: {
//           brand: "Realme",
//           model: " hypothetical model ", // Replace with specific model name
//           display: {
//               size: "7.2 inches",
//               resolution: "FHD+ (1180 x 2200 pixels)",
//               type: "AMOLED",
//           },
//           processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
//           memory: {
//               ram: "12GB",
//               storage: "256GB",
//           },
//           brand: "xiomi",

//           camera: {
//               rear: {
//                   resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
//               },
//               front: {
//                   resolution: "24MP",
//               },
//           },
//           battery: {
//               capacity: "10000mAh",
//               fastCharging: "75W",
//           },
//           operatingSystem: "Android 12",
//           specialFeatures: [
//               "In-display fingerprint sensor",
//               "3.5mm headphone jack",
//           ],
//       },
//       realmi9i: {
//           brand: "Realme",
//           model: " hypothetical model ", // Replace with specific model name
//           display: {
//               size: "6.9 inches",
//               resolution: "FHD+ (1480 x 2400 pixels)",
//               type: "AMOLED",
//           },
//           brand: "xiomi",

//           processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
//           memory: {
//               ram: "12GB",
//               storage: "512GB",
//           },
//           camera: {
//               rear: {
//                   resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
//               },
//               front: {
//                   resolution: "16MP",
//               },
//           },
//           battery: {
//               capacity: "2000mAh",
//               fastCharging: "70W",
//           },
//           operatingSystem: "Android 13",
//           specialFeatures: [
//               "In-display fingerprint sensor",
//               "3.5mm headphone jack",
//           ],
//       },
//   },
//   samsung: {
//       samsung_Galaxy_S24: {
//           brand: "Samsung",
//           model: "Galaxy S24 Ultra", // Replace with specific model

//           // Display
//           displaySize: 6.8, // Inches
//           displayResolution: "3088x1440",
//           displayType: "AMOLED",

//           // Processor & Memory
//           processor: "Snapdragon 8 Gen 2", // Replace with actual processor
//           memory: {
//               ram: 12,
//               storage: 512,
//           },

//           // Cameras
//           rearCamera: {
//               megapixel: 108,
//               features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
//           },
//           frontCamera: {
//               megapixel: 40,
//           },

//           // Battery
//           batteryCapacity: 5000, // mAh
//           fastCharging: "45W Super Fast Charging",

//           // Operating System
//           operatingSystem: "Android 14",

//           // Additional Specs (Optional)
//           fingerprintSensor: true,
//           waterResistance: "IP68",
//           expandableStorage: false,
//       },
//       samsung_Galaxy_S51: {
//           brand: "Samsung",
//           model: "Galaxy S51 Pro", // Replace with specific model

//           // Display
//           displaySize: 7.2, // Inches
//           displayResolution: "3088x1440",
//           displayType: "AMOLED",

//           // Processor & Memory
//           processor: "Snapdragon 9 Gen 4", // Replace with actual processor
//           memory: {
//               ram: 8,
//               storage: 128,
//           },

//           // Cameras
//           rearCamera: {
//               megapixel: 112,
//               features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
//           },
//           frontCamera: {
//               megapixel: 40,
//           },

//           // Battery
//           batteryCapacity: 8000, // mAh
//           fastCharging: "45W Super Fast Charging",

//           // Operating System
//           operatingSystem: "Android 11",

//           // Additional Specs (Optional)
//           fingerprintSensor: true,
//           waterResistance: "IP68",
//           expandableStorage: false,
//       },
//       samsung_Galaxy_Prime: {
//           brand: "Samsung",
//           model: "Galaxy Prime Ultra", // Replace with specific model

//           // Display
//           displaySize: 7.4, // Inches
//           displayResolution: "3088x1440",
//           displayType: "AMOLED",

//           // Processor & Memory
//           processor: "Snapdragon 8 Gen 10", // Replace with actual processor
//           memory: {
//               ram: 4,
//               storage: 64,
//           },

//           // Cameras
//           rearCamera: {
//               megapixel: 108,
//               features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
//           },
//           frontCamera: {
//               megapixel: 40,
//           },

//           // Battery
//           batteryCapacity: 5000, // mAh
//           fastCharging: "45W Super Fast Charging",

//           // Operating System
//           operatingSystem: "Android 13",

//           // Additional Specs (Optional)
//           fingerprintSensor: true,
//           waterResistance: "IP68",
//           expandableStorage: false,
//       },
//       samsung_Galaxy_S46: {
//           brand: "Samsung",
//           model: "Galaxy S46 Ultra", // Replace with specific model

//           // Display
//           displaySize: 5.11, // Inches
//           displayResolution: "3088x1440",
//           displayType: "AMOLED",

//           // Processor & Memory
//           processor: "Snapdragon 8 Gen 2", // Replace with actual processor
//           memory: {
//               ram: 6,
//               storage: 64,
//           },

//           // Cameras
//           rearCamera: {
//               megapixel: 108,
//               features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
//           },
//           frontCamera: {
//               megapixel: 40,
//           },

//           // Battery
//           batteryCapacity: 20000, // mAh
//           fastCharging: "65W Super Fast Charging",

//           // Operating System
//           operatingSystem: "Android 14",

//           // Additional Specs (Optional)
//           fingerprintSensor: true,
//           waterResistance: "IP68",
//           expandableStorage: false,
//       },
//       samsung_Galaxy_S77: {
//           brand: "Samsung",
//           model: "Galaxy S77 Ultra", // Replace with specific model

//           // Display
//           displaySize: 8.5, // Inches
//           displayResolution: "3088x1440",
//           displayType: "AMOLED",

//           // Processor & Memory
//           processor: "Snapdragon 12 Gen 24", // Replace with actual processor
//           memory: {
//               ram: 12,
//               storage: 512,
//           },

//           // Cameras
//           rearCamera: {
//               megapixel: 158,
//               features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
//           },
//           frontCamera: {
//               megapixel: 40,
//           },

//           // Battery
//           batteryCapacity: 20000, // mAh
//           fastCharging: "85W Super Fast Charging",

//           // Operating System
//           operatingSystem: "Android 14",

//           // Additional Specs (Optional)
//           fingerprintSensor: true,
//           waterResistance: "IP68",
//           expandableStorage: true,
//       },
//   },
// };

// let brand = document.getElementById("brand");
// let model = document.getElementById("model");
// let allBrands = Object.keys(mobiles);

// for(let i=0; i<allBrands.length; i++){
//     brand.innerHTML += `<option value= '${allBrands[i]}'>${allBrands[i]}</option> `
// }


// function selectBrand(){
//     let selectedBrand = brand.value;
//     let allModels = Object.keys(mobiles[selectedBrand]);
//     model.innerHTML = "";
//     for(let i=0; i<allModels.length; i++){
//         model.innerHTML += `<option value='${allModels[i]}'>${allModels[i]}</option>`
//     }

// }


// function getModelData(){
//     let modelValue = model.value;
//     let brandValue = brand.value;
//     let cardDiv = document.getElementById('card-section')
//     let getData = mobiles[brandValue][modelValue]
//     cardDiv.innerHTML += `<div class="card text-bg-light mb-3 mt-2" style="max-width: 18rem;">
//   <div class="card-header">${brandValue}</div>
//   <div class="card-body">
//     <h5 class="card-title">${modelValue}</h5>
//     <p class="card-text">${getData.processor} <br> ${getData.operatingSystem}</p>
//   </div>
// </div>`
// }

/* <div class="card text-bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */



let obj1 = {
    name: "abc",
    city: "Karachi",
    eductaion: {
        class: "WAM",
        semester: "5th",
        university:{
            students: 50,
            year:"3rd"
        }
    },
    environment:{
        girls: 50,
        cute: "average"
    }
};

// let obj2 = {
//     class: "WAM",
//     Semester: "5th"
// }

let obj2 = {...obj1,
    environment:{...obj1.environment},
eductaion:{ ...obj1.eductaion,
        university:{...obj1.eductaion.university}
    }
};
obj2.environment.girls = 60;

console.log(obj1);
console.log(obj2);


