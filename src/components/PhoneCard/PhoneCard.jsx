// import React from 'react';
// import { Link } from 'react-router-dom';

// import { HeartIcon, RedHeartIcon } from '../../assets';
// import { usePhoneStore } from '../../store';

// export const PhoneCard = ({ phone, isShowDiscount }) => {
//   const {
//     addToCart,
//     removeFromCart,
//     isInCart,
//     isFavorite,
//     addFavorite,
//     removeFavorite,
//   } = usePhoneStore();

//   const handleToggleFavorite = () => {
//     if (isFavorite(phone.id)) {
//       removeFavorite(phone.id);
//     } else {
//       addFavorite(phone);
//     }
//   };

//   const handleCartClick = () => {
//     if (isInCart(phone.id)) {
//       removeFromCart(phone.id); // Remove from cart if already added
//     } else {
//       addToCart(phone); // Add to cart if not already added
//     }
//   };

//   const isAddedToCart = isInCart(phone.id);

//   return (
//     <Link to={`/phones/${phone.id}`} className="no-underline">
//       <div className="bg-white border-solid border-colorLightGrey p-8 flex flex-col max-w-[272px]">
//         <div>
//           <div className="flex justify-center mb-5">
//             <img
//               src={`/${phone.images[0]}`}
//               alt={phone.name}
//               className="w-[150px] h-[200px] object-contain transform transition-transform duration-300 hover:scale-110"
//             />
//           </div>
//           <div className="text-14 font-semibold text-left text-black whitespace-normal overflow-hidden text-ellipsis min-h-[42px]">
//             {phone.name}
//           </div>
//           <div className="flex items-center gap-2 mb-1">
//             <p className="font-bold text-xl text-black">
//               ${isShowDiscount ? phone.priceDiscount : phone.priceRegular}
//             </p>
//             {isShowDiscount && (
//               <p className="text-gray-500 line-through">
//                 ${phone.priceRegular}
//               </p>
//             )}
//           </div>
//           <div className="flex items-center mb-5">
//             <div className="flex-grow bg-gray-300 h-[1px]"></div>
//           </div>

//           <div className="flex flex-col gap-2 text-12 font-semibold mb-3">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Screen</span>
//               <span className="text-black text-right overflow-hidden truncate w-[120px]">
//                 {phone.screen}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Capacity</span>
//               <span className="text-black">{phone.capacity}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">RAM</span>
//               <span className="text-black">{phone.ram}</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2.5">
//           <button
//             className={`w-full px-4 py-2 border ${
//               isAddedToCart
//                 ? 'bg-white text-green-500 border-colorLightGrey border-solid'
//                 : 'bg-black text-white'
//             }`}
//             onClick={(e) => {
//               e.preventDefault();
//               handleCartClick(); // Toggle add/remove from cart
//             }}
//           >
//             {isAddedToCart ? 'Added to cart' : 'Add to cart'}
//           </button>
//           <button
//             className="w-11 h-10 flex justify-center items-center border-solid border-colorLightGrey border"
//             onClick={(e) => {
//               e.preventDefault();
//               handleToggleFavorite(); // Toggle favorite
//             }}
//           >
//             {isFavorite(phone.id) ? <RedHeartIcon /> : <HeartIcon />}
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };
