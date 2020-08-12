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

function ListEventsPage() {
    const classes = useStyles();
    const eventsFilter = useSelector(state => state.eventsReducer.eventsFilter)

    return ( //6-desk - 4 mob
        <>
            <TopBar/>

            <GridList cellHeight={200} spacing={30} className={classes.gridList} cols={4}>
                {eventsFilter.map((event) => (
                    <GridListTile className={classes.gridlistTile} key={event.id} cols={2} onClick={ e => {alert("#bahs")}}>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <img className={classes.imgGridList} src={event.img || notFound} alt={event.title} />
                        </motion.div>
                        <GridListTileBar
                            className={classes.gridListTileBar}
                            title={event.title}
                            subtitle={<span>Criado por: {event.author}</span>}
                            actionIcon={
                                <IconButton aria-label={event.title} className={classes.icon} onClick={ e => {alert("#bahs")}}>
                                    <div style={{display:"flex", flexDirection:"column", color:"white", fontSize:"10px", alignItems:"center"}} >
                                        <div>
                                            <InfoIcon style={{color:"white"}} />
                                        </div>
                                        <div>
                                            <AssignmentIcon style={{color:"white", fontSize:"15px"}}/> {Moment(event.created_at).format('DD/MM/YYYY')}
                                        </div>
                                        <div>
                                            <MotorcycleIcon style={{color:"white", fontSize:"15px"}}/> {Moment(event.due_at).format('DD/MM/YYYY')}
                                        </div>
                                    </div>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </>
    )
}

export default ListEventsPage