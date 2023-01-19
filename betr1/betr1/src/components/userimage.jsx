import { Box }from "@mui/material";


const UserImage = ({ image, size ="60px"}) => {
    return(
        <Box width={size} height={size}> 
        <img
        style={{ objectFit: "cover", borderRadius: "50%"}}
        // Need to work on a source and image dropzone to allow users from multiple file sources to upload 
        width={size} height={size} alt="user"
        />
        </Box>
    )
}

export default UserImage;