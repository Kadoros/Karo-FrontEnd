import { useState } from "react";
import { Wrapper } from "../components/auth-components";
import { Container } from "../components/basic-components";
import ToggleSwitch from "../components/ToggleSwitch";


function LectureNote() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Container>
      <Wrapper>
        <ToggleSwitch checked={isChecked} onChange={handleChange} />
      </Wrapper>
    </Container>
  );
}

export default LectureNote;
