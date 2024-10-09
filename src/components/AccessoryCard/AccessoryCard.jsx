// import React from 'react';
// import { Link } from 'react-router-dom';

// import { HeartIcon, RedHeartIcon } from '../../assets';
// import { usePhoneStore } from '../../store';

// export const AccessoryCard = ({ accessory, isShowDiscount }) => {
//   const {
//     addFavorite,
//     removeFavorite,
//     isFavorite,
//     addToCart,
//     removeFromCart,
//     isInCart,
//   } = usePhoneStore();

//   const handleToggleFavorite = () => {
//     if (isFavorite(accessory.id)) {
//       removeFavorite(accessory.id);
//     } else {
//       addFavorite(accessory);
//     }
//   };

//   const handleCartClick = () => {
//     if (isInCart(accessory.id)) {
//       removeFromCart(accessory.id); // Remove from cart if already added
//     } else {
//       addToCart(accessory); // Add to cart if not already added
//     }
//   };

//   const isAddedToCart = isInCart(accessory.id);

//   return (
//     <Link to={`/accessories/${accessory.id}`} className="no-underline">
//       <div className="bg-white border-solid border-colorLightGrey p-4 flex flex-col max-w-[272px] hover:shadow-lg transition-shadow duration-200">
//         <div>
//           <div className="flex justify-center mb-4">
//             <img
//               src={`/${accessory.images[0]}`}
//               alt={accessory.name}
//               className="w-[150px] h-[150px] object-contain transform transition-transform duration-300 hover:scale-110"
//             />
//           </div>
//           <h3 className="font-bold text-lg text-black whitespace-normal overflow-hidden text-ellipsis min-h-[56px]">
//             {accessory.name}
//           </h3>
//           <div className="mt-2 flex items-center gap-2">
//             <p className="font-bold text-xl text-black">
//               $
//               {isShowDiscount
//                 ? accessory.priceDiscount
//                 : accessory.priceRegular}
//             </p>
//             {isShowDiscount && (
//               <p className="text-gray-500 line-through">
//                 ${accessory.priceRegular}
//               </p>
//             )}
//           </div>
//           <div className="flex items-center my-2">
//             <div className="flex-grow bg-gray-300 h-[1px]"></div>
//           </div>

//           <div className="mb-3">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Category</span>
//               <span className="text-black text-right overflow-hidden truncate w-[120px]">
//                 {accessory.category}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Color</span>
//               <span className="text-black">{accessory.color}</span>
//             </div>
//           </div>
//         </div>
//         <div className="mt-0 flex gap-2">
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
//             className="w-10 h-10 flex justify-center items-center border-solid border-colorLightGrey"
//             onClick={(e) => {
//               e.preventDefault();
//               handleToggleFavorite();
//             }}
//           >
//             {isFavorite(accessory.id) ? <RedHeartIcon /> : <HeartIcon />}
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };
