// import { useState } from "react";
// import { Form } from "react-final-form";

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

// import firebaseConfig from "../../firebase";

// import GeneralQuestions from "./components/GeneralQuestions";
// import IdentityQuestions from "./components/IdentityQuestions";
// import MenteeOrMentor from "../MentorshipStatus";
// import DiscussionQuestions from "./components/DiscussionQuestions";
// import Contact from "./components/Contact";

// export default function FormContainer() {
//   const [isMentor, mentorStatus] = useState(true);

//   // Firebase
//   const app = initializeApp(firebaseConfig);
//   // Get a reference to the database service
//   const database = getDatabase(app);

  

//   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   const onSubmit = async (values) => {
//     await sleep(300);
//     writeUserData(values, isMentor);
//   };

//   const required = (value) => (value ? undefined : "Required");

//   return (
//     <div>
//       <MenteeOrMentor mentorStatus={mentorStatus} />
//       <Form
//         onSubmit={onSubmit}
//         render={({ handleSubmit, form, submitting, pristine }) => (
//           <form onSubmit={handleSubmit}>
//             <GeneralQuestions required={required} />
//             <IdentityQuestions required={required} />
//             <DiscussionQuestions required={required} isMentor={isMentor} />
//             <Contact required={required} isMentor={isMentor} />
//             <div className="btn-ctn">
//               <button type="submit" disabled={submitting || pristine}>
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 onClick={form.reset}
//                 disabled={submitting || pristine}
//               >
//                 Reset
//               </button>
//             </div>
//           </form>
//         )}
//       ></Form>
//     </div>
//   );
// }
