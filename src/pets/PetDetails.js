// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import PetfinderApi from "../api/api";
// import { Card, CardBody } from "reactstrap";

// function PetDetails() {
//   const { pet_id } = useParams();
//   const [pet, setPet] = useState(null);

//   const petInfo = async () => {
//     const p = await PetfinderApi.getPet(pet_id);
//     setPet(p);
//   };

//   useEffect(() => {
//     petInfo();
//   });

//   if (!pet) return <div>Loading...</div>;

//   return (
//     <Card>
//       <CardBody>
//         <div>
//           <h3>Get to know {pet.name}</h3>
//           <div>
//             {pet.gender && (
//               <div>
//                 <p>Gender: {pet.gender}</p>
//               </div>
//             )}
//             {pet.description && (
//               <div>
//                 <p>{pet.description}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </CardBody>
//     </Card>
//   );
// }

// export default PetDetails;
