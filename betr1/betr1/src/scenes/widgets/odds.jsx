import { Typography , useTheme} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import axios from "axios";
import { useState , useEffect } from "react";



const Odds = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const [games, setGames] = useState([]);

    // const click = () => {
    //     console.log('test')
    // }
    // const fetch = require('node-fetch');

    // const url = 'https://api-nba-v1.p.rapidapi.com/games?live=all';
    
    // const showGames = {
    //   headers: {
    //     'X-RapidAPI-Key': '8b82edbe8cmsh897fc11d9dc323dp109647jsn5e02d5535f43',
    //     'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //   }
    // };
    
    // fetch(url, showGames)
    //     .then(res => res.json(games))
    //     .then(json => console.log(json))
    //     .catch(err => console.error('error:' + err));

//     const handleShowGames = () => {
//         showGames();
//     }

//  useEffect(() => {
//     showGames();
//     }, []);


    
    return (
        <WidgetWrapper>
            
            <FlexBetween flex="column" flexWrap="wrap" alignItems="baseline" justifyContent="flex-start" flexDirection="column" >
                <Typography color={dark} variant="h5" fontWeight="500">
                    A look ahead
                    Filler
                    <ul>
                    <li>game: 1 </li> 
                    <li>game: 1 </li> 
                    <li>game: 1 </li> 
                    <li>game: 1 </li> 
                    <li>game: 1 </li>
                    </ul>
                </Typography>
                <Typography color={dark} variant="h5" fontWeight="500">
                <button variant='' sx={{color: palette.background.dark}}> 
                View todays odds
                </button>
               </Typography>
            </FlexBetween>
        
        </WidgetWrapper>

    )
}

export default Odds;