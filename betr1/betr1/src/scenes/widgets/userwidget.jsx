import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, LocalAtmOutlined } from '@mui/icons-material';


import { Box, Typography, Divider, useTheme } from '@mui/material'
import UserImage from "../../components/userimage";
import FlexBetween from "../../components/FlexBetween"
import WidgetWrapper from "../../components/WidgetWrapper"

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const UserWidget = ({userId, picturePath }) => {
    const [ user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;


    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
        {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        setUser(data);
     };

     useEffect(() => {
        getUser();
     }, []);  // eslint-disable-line react-hooks/exhaustive-deps

     if(!user) {
        return null;
     }

     const {  firstName, lastName, location, record, followers, unit} = user;

     return(
        <WidgetWrapper>
            <FlexBetween
            gap="0.5rem"
            pb="1.1rem"
            onClick={() => navigate(`/profile/${userId}`)}>
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography variant='h4' color={dark} fontWeight="500" sx={{ "&:hover": { color: palette.primary.light, cursor: "pointer" }}}>{firstName} { lastName}</Typography>
                        <Typography color={medium}> {followers.length} Followers </Typography>
                    </Box>
                    <ManageAccountsOutlined />
                </FlexBetween>
                <Divider />
            </FlexBetween>
                <Box padding="1rem 0">
                    <Box display="flex" alignitems="center" gap="1rem" mb="0.5rem">
                        <LocationOnOutlined fontSize="Large" sx={{ color: main}} />
                        <Typography color={medium}>{location}</Typography>
                    </Box>
                    <Box display="flex" alignitems="center" gap="1rem">
                        <LocalAtmOutlined fontSize="Large" sx={{ color: main}} />
                        <Typography color={medium}>{unit}</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box p="1rem 0">
                    <FlexBetween mb="0.5">
                        <Typography color={medium}>Stats</Typography>
                        <Typography color={main} fontWeight="500">
                            {record}
                        </Typography>
                    </FlexBetween>
            
                </Box>
                <Divider />
                <Box p="1rem 0">
                    <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem" align="center">
                        Connect
                    </Typography>
                    <FlexBetween gap="1rem" mb="0.5rem">
                        <FlexBetween gap="1rem">
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-outline-3/60/Social-02-Twitter-Outline-512.png" alt="twitter" width="10%" height="15%" />
                            <Box>
                                <Typography color ={main} fontWeight="500">
                                    Twitter
                                </Typography>
                            </Box>
                        </FlexBetween>
                        <EditOutlined sx={{color:main}} />
                        </FlexBetween>
                </Box>
            
        </WidgetWrapper>
     )
};

export default UserWidget;