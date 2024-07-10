import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useMatch } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import triangleSvg from "../asset/triangle.svg";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 10px 50px;
  color: white;
  transition: background-color 0.2s ease-in-out;
`;

const Wrapper3 = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 65px;
  height: 50px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
  margin-right: 40px;
`;

const Circle = styled(motion.span)`
  background-color: ${(props) => props.theme.skyblue};
  border-radius: 50%;
  width: 5px;
  height: 5px;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Input = styled(motion.input)`
  width: 50vw;
  max-width: 300px;
  height: 30px;
  font-size: 14px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transform-origin: right center;
  position: absolute;
  left: -270px;
`;

const AvatarLabel = styled.label`
  width: 40px;
  overflow: hidden;
  height: 40px;
  border-radius: 20%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;
const AvatarImg = styled.img`
  width: 100%;
`;

const TriangleDiv = styled(motion.div)`
  width: 13px;
  overflow: hidden;
  height: 13px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Triangle = styled(motion.img)`
  width: 100%;
`;

const LogoVariant = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const parentVariants = {
  hover: {
    // This can be empty if only the child is animated
  },
};

const childVariants = {
  initial: {
    rotate: 180,
  },
  hover: {
    rotate: 360,
  },
};
interface IForm {
  keyword: string;
}

function Header() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const lectureNoteMatch = useMatch("/lecture-note");
  const loginMatch = useMatch("/login");
  const inputAnimation = useAnimation();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({ scaleX: 0 });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      keyword: "",
    },
  });

  const onValid = ({ keyword }: IForm) => {
    if (keyword !== "") {
      navigate(`/search?keyword=${keyword}`); // Use navigate for programmatic navigation
    }
  };

  const user = auth.currentUser;
  const [img, setImg] = useState(user?.photoURL);

  return (
    <Nav style={{ backgroundColor }}>
      <Col>
        <Logo
          variants={LogoVariant}
          initial="normal"
          whileHover="active"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <motion.path
            fill="#43A5FF"
            opacity="1.000000"
            stroke="none"
            d="
              M131.698135,57.100464 
              C120.527473,50.931755 109.356812,44.763042 97.604546,38.273151 
              C98.971169,37.201897 99.742371,36.434460 100.653061,35.908569 
              C110.299942,30.337877 119.909256,24.695696 129.694305,19.377495 
              C131.218109,18.549307 133.960876,18.530994 135.478607,19.355539 
              C145.849304,24.989719 156.095154,30.862177 166.232452,36.907345 
              C167.589554,37.716625 168.898224,39.926918 168.902496,41.492046 
              C169.011047,81.262978 168.986771,121.034645 168.758087,160.804871 
              C168.747910,162.577438 167.001541,165.007095 165.374496,165.992706 
              C156.276108,171.504272 146.965469,176.665466 137.151520,181.686401 
              C136.050949,179.623428 135.083282,177.823547 135.070511,176.016907 
              C134.952850,159.383774 135.031372,142.749329 134.953598,126.115723 
              C134.945557,124.399162 134.292801,122.685608 133.939209,120.970657 
              C133.913452,100.631264 133.887680,80.291870 134.156860,59.279602 
              C133.533936,58.104641 132.616028,57.602554 131.698135,57.100464 
            "
          />
          <motion.path
            fill="#44A6FE"
            opacity="1.000000"
            stroke="none"
            d="
              M77.373108,105.032257 
              C76.078369,103.663223 75.013870,101.900887 73.452698,100.986992 
              C60.254463,93.260963 46.965565,85.689827 32.981644,77.657288 
              C44.835514,70.845604 56.102108,64.301582 67.480919,57.958900 
              C68.440994,57.423740 70.370590,57.853523 71.482475,58.483395 
              C84.371956,65.785194 97.247467,73.117081 109.955307,80.727165 
              C111.519859,81.664101 112.951019,84.248436 112.982742,86.094460 
              C113.231621,100.580078 113.046600,115.072571 113.189728,129.561035 
              C113.219543,132.579132 112.353333,134.359985 109.620773,135.864334 
              C99.565636,141.399994 89.661621,147.210159 79.349609,152.493698 
              C78.998978,137.942734 79.049904,123.814674 78.928604,109.688103 
              C78.915245,108.131821 77.915421,106.584000 77.373108,105.032257 
            "
          />
        </Logo>
        <Items>
          <Item>
            <Link to="/">
              Home
              {homeMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/lecture-note">
              Lecture Note
              {lectureNoteMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -300 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </motion.svg>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            initial={{ scaleX: 0 }}
            animate={inputAnimation}
            transition={{ type: "linear" }}
            placeholder="Search..."
            type="text"
          />
        </Search>
        <Items>
          <Item>
            {user ? (
              <Wrapper3
                variants={parentVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "tween"}}
              >
                <AvatarLabel>
                  <AvatarImg src={img!} />
                </AvatarLabel>
                <TriangleDiv>
                  <Triangle src={triangleSvg} variants={childVariants} />
                </TriangleDiv>
              </Wrapper3>
            ) : (
              <Link to="/login">
                Login
                {loginMatch && <Circle layoutId="circle" />}
              </Link>
            )}
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Header;
