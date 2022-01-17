import { useState } from "react";
import OnBoardingForm from "./OnboardingForm";
import { ProgressBar } from "react-bootstrap";

export default function OnboardingWrapper() {
  const [progress, setProgress] = useState(20);
  return (
    <>
      {progress <= 100 && (
        <ProgressBar animated now={progress} className="mb-4" />
      )}
      <OnBoardingForm setProgress={setProgress} progress={progress} />
    </>
  );
}
