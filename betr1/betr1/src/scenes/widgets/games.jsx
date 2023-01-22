import { Typography , useTheme} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import axios from "axios";
import { useState , useEffect } from "react";



const GameTicker = () => {
    const { palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const axios = require("axios");
    const [games, setGames] = useState([])


    // const todaysgames() = {
    //   method: 'GET',
    //   url: 'https://api-nba-v1.p.rapidapi.com/games',
    //   params: {date: '2023-01-21'},
    //   headers: {
    //     'X-RapidAPI-Key': '8b82edbe8cmsh897fc11d9dc323dp109647jsn5e02d5535f43',
    //     'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //   }
    // };

    
    return (
        <WidgetWrapper>
            {/* console.log(todaysgames())
            console.log(games); */}
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Todays Games
                </Typography>
                <Typography color={dark} variant="h5" fontWeight="500">
                {games}
               </Typography>
            </FlexBetween>
        
        </WidgetWrapper>

    )
}

export default GameTicker;