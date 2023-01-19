import { ChatBubbleOutlineOutlined, FavoriteBorderOutlines, FavoriteOUtlined, ShareOutlined, Sports, } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme} from "@mui/material";

import FlexBetween from "../../components/FlexBetween";
import Follower from "../../components/follower";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../state";


const Post = ({ 
   
                postId,
                postUserId,
                name,
                description,
                location,
                picturePat,
                likes,
                comments,
                Sports,
                comfort,
                hit,
}) => { 
    const { palette } =useTheme();
    const primaryLight = palette.primary.light;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    const primaryDark = palette.primary.dark;
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const [isComments, setIsComments] = useState(false);



}

export default Post 