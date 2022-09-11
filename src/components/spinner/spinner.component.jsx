import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => {
  console.log("Spinner rendered.")
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
