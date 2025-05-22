// import usePasswordStore from "../store";

// function PasswordGenerater() {
//   const {
//     length,
//     includeNumbers,
//     includeSymbols,
//     includeUppercase,
//     includeLowercase,
//     generatedPassword,
//     setLength,
//     toggleNumbers,
//     toggleSymbols,
//     toggleUppercase,
//     toggleLowercase,
//     generatePassword,
//   } = usePasswordStore();

//   const handleGeneratePassword = () => {
//     generatePassword();
//     alert(`Generated Password: ${generatedPassword}`);
//   };

//   return (
//     <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
//       <div className="flex flex-col gap-4">
//         <div>
//           <label
//             htmlFor="length"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password Length
//           </label>
//           <input
//             type="number"
//             id="length"
//             value={length}
//             onChange={(e) => setLength(Number(e.target.value))}
//             min="4"
//             max="64"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={includeNumbers}
//             onChange={toggleNumbers}
//           />
//           <label className="ml-2 text-sm">Include Numbers</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={includeSymbols}
//             onChange={toggleSymbols}
//           />
//           <label className="ml-2 text-sm">Include Symbols</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={includeUppercase}
//             onChange={toggleUppercase}
//           />
//           <label className="ml-2 text-sm">Include Uppercase Letters</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={includeLowercase}
//             onChange={toggleLowercase}
//           />
//           <label className="ml-2 text-sm">Include Lowercase Letters</label>
//         </div>

//         <button
//           onClick={handleGeneratePassword}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
//         >
//           Generate Password
//         </button>

//         {generatedPassword && (
//           <div className="mt-4">
//             <h2 className="text-lg font-semibold">Generated Password:</h2>
//             <p className="text-gray-700">{generatedPassword}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PasswordGenerater;
