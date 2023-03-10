import React from 'react'
import { Box ,useMediaQuery, Divider } from "@mui/material";
import { useSelector} from "react-redux";
import NavBar from "../../scenes/navbar";
import UserWidget from '../widgets/userwidget';
import CreatePostWidget from '../widgets/createpostwidget';
import FlexBetween from "../../components/FlexBetween";
import Post from "../widgets/post";
import state from '../../state';
import GameTicker from "../widgets/games"
import Odds from "../widgets/odds";

const HomePage = () => {
  const isNonMobileScreens= useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);


  return (
    <Box> 
      <NavBar />
      <Box
      width="100%" padding="2rem 6%" display={isNonMobileScreens ? "flex" : "block"} gap="0.5rem" justifyContent = "space-between">
        <Box flexBasis={isNonMobileScreens ? "25%" : undefined }>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined } mt={isNonMobileScreens ? undefined: "2rem"}>
          <CreatePostWidget picturePath={picturePath} token={token} state={state} />
          <Post userId={_id} likes={{[_id]: []}} comments={[]} /> 
        </Box>
        {isNonMobileScreens && ( 
          <Box flexBasis="25%" mb="1.5rem">
            <GameTicker/>
            <br/>
            <br/>

            <Odds />
            <Box m="2rem 0" />

            </Box>
        )}
      </Box>
      
    </Box>
    
  )
}

export default HomePage