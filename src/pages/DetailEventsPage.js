import React from 'react';
import {GridList,GridListTile,GridListTileBar,IconButton,Card,CardContent} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import InfoIcon from '@material-ui/icons/Info';
import { motion } from "framer-motion";
import Moment from 'moment';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TopBar from '../components/TopBar';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        // height: 450,
        margin:"0 !important"
    },

    gridlistTile:{
        // display:"flex",
        // justifyContent:"center"
        cursor:"pointer",
    },

    imgGridList: {
        // width:"20vw",
        // height:"20vh"
    },

    gridListTileBar:{
        textAlign:"left"
    }

}));

const notFound = "notfound.png";

function DetailEventsPage() {
    const history = useHistory()
    const classes = useStyles();
    const eventsFilter = useSelector(state => state.eventsReducer.eventsFilter)


    return ( //6-desk - 4 mob
        <>
            <TopBar/>
        </>
    )
}

export default DetailEventsPage