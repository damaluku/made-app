import styled from "@emotion/styled";
import { motion } from "framer-motion";
import NavBar from "layouts/Navbar";

type Props = {
  children: React.ReactNode;
  mode: string;
  setMode: (mode: string) => void;
};

const BaseLayout: React.FC<Props> = ({ children, mode, setMode }) => {
  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <MainContainer>
          <NavBar mode={mode} setMode={setMode}>
            {children}
          </NavBar>
        </MainContainer>
      </motion.div>
    </>
  );
};

export default BaseLayout;

const MainContainer = styled.main({
  width: "100vw",
  minHeight: "100Vh",

  header: {
    width: "100%",
    zIndex: "5",
  },
});
