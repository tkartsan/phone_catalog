// import React, { useEffect, useState } from 'react';

// import { PhoneSlider } from './PhoneSlider';

// export const RecentPhones = ({ phonesJson, productsJson }) => {
//   const [latestPhones, setLatestPhones] = useState([]);

//   useEffect(() => {
//     if (phonesJson && productsJson) {
//       const latestPhonesData = getLatestPhones(phonesJson, productsJson);

//       setLatestPhones(latestPhonesData);
//     }
//   }, [phonesJson, productsJson]);

//   const getLatestPhones = (phones, products) => {
//     const phoneProducts = products.filter(
//       (product) => product.category === 'phones',
//     );

//     const combinedPhones = phoneProducts
//       .map((product) => {
//         const phoneDetails = phones.find(
//           (phone) => phone.id === product.itemId,
//         );

//         if (!phoneDetails) {
//           return null; // Skip if phone details are missing
//         }

//         return {
//           ...product,
//           ...phoneDetails,
//         };
//       })
//       .filter(Boolean); // Remove null values

//     combinedPhones.sort((a, b) => b.year - a.year);

//     return combinedPhones.slice(0, 10);
//   };

//   return latestPhones.length > 0 ? (
//     <PhoneSlider phones={latestPhones} />
//   ) : (
//     <p>No phones found...</p>
//   );
// };
