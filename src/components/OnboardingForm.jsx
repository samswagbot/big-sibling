import React, { useState } from "react";
import ExperienceQuestions from "./ExperienceQuestions";
import MentorshipStatus from "./MentorshipStatus";
import UserDetails from "./UserDetails";
import Contact from "./Contact";
import Review from "./Review";
import { Button } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function OnBoardingForm() {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [mentor, setMentor] = useState(false);
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    city: "",
    pronouns: "",
    genderIdentity: "",
    sexualIdentity: "",
    yearsBeingTrans: "",
    discussionTopics: [],
    gainExperience: "",
    benefiticalPart: "",
    proximity: "",
    preferredMethod: "",
    productLike: "",
  });

  async function writeUserData(
    {
      fullName,
      age,
      city,
      pronouns,
      genderIdentity,
      sexualIdentity,
      yearsBeingTrans,
      discussionTopics,
      gainExperience,
      benefiticalPart,
      proximity,
      preferredMethod,
      productLike,
    },
    mentor
  ) {
    try {
      await setDoc(doc(db, "users", currentUser.uid), {
        mentor: mentor ? "true" : "false",
        userDetails: {
          fullName: fullName,
          age: age,
          city: city,
          pronouns: pronouns,
          genderIdentity: genderIdentity,
          sexualIdentity: sexualIdentity,
          yearsBeingTrans: yearsBeingTrans,
          discussionTopics: discussionTopics,
          gainExperience: gainExperience,
          benefiticalPart: benefiticalPart,
          proximity: proximity,
          preferredMethod: preferredMethod,
          productLike: productLike,
          email: currentUser.email,
          userId: currentUser.uid,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async () => {
    await sleep(300);
    writeUserData(formData, mentor);
    console.log('trigger')
  };

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputState = (prevState, e, input) => {
    const { value } = e.target;
    if (input === "discussionTopics") {
      return [...prevState.discussionTopics, value];
    }

    return value;
  };

  const handleInputData = (input, e) => {
    setFormData((prevState) => ({
      ...prevState,
      [input]: handleInputState(prevState, e, input),
    }));
  };

  const handleOnSubmit = () => {
    onSubmit();
    setShowModal(true);
  };

  const handleOnHide = () => {
    setShowModal(false);
    navigate("/");
  };

  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    case 2:
      return (
        <MentorshipStatus
          setMentor={setMentor}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <ExperienceQuestions
          handleFormData={handleInputData}
          values={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Contact
          handleFormData={handleInputData}
          values={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          mentor={mentor}
        />
      );
    case 5:
      return (
        <>
          <Review values={formData} mentor={mentor} />
          <div
            className="mt-3"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Button variant="primary" onClick={prevStep}>
              Previous
            </Button>
            <ConfirmationModal
              show={showModal}
              onHide={() => handleOnHide()}
              mentor={mentor}
            />
            <Button variant="primary" onClick={handleOnSubmit} type="submit">
              Submit
            </Button>
          </div>
        </>
      );

    default:
      break;
  }
}
