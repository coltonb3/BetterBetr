import { PersonAddOutlined, PersonRemoveOutlined, StarRateOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFollowers } from "../../state"
import FlexBetween from "./FlexBetween";
import UserImage from "./userimage"


const Follower= ({followerId, name, subtitle, userPicturePath }) => { 
    const { palette } =useTheme();
    const primaryLight = palette.primary.light;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    const primaryDark = palette.primary.dark;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const followers = useSelector((state) => state.user.followers);



    const isFollower = followers.find((follower) => follower._id === followerId);

    const patchFollower = async () => {
        const response = await fetch ( `http://localhost:3001/users/${_id}/${followerId}`,
        {
            method: "PATCH",
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
        });

        const data = await response.json();
        dispatch(setFollowers({ followers: data }));
    };

    return( 
        <FlexBetween> 
            <FlexBetween gap="1rem">
            <UserImage image={userPicturePath} size="55px" />
            <Box onClick={() => { navigate(`/profile/${followerId}`);  navigate(0);}} > 
            <Typography color={main} variant="h5" fontWeight="500" sx={{ "&:hover": { color: palette.primary.light, cursor: "pointer"}}} > 
            {name}
            </Typography>
            <Typography color={medium} fontSize="0.75rem"> 
            {subtitle}
            </Typography>
            </Box>
            </FlexBetween>
            <IconButton onClick={() => patchFollower()} sx={{backgroundColor: primaryLight, p: "0.5rem"}}>
                {isFollower ? ( <PersonRemoveOutlined sx={{ color: primaryDark}} /> 
                ) : ( <PersonAddOutlined sx={{ color: primaryDark}}  /> ) }
           
            </IconButton>
        </FlexBetween>
    )
}
export default Follower; 