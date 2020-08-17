import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {useDispatch, useSelector} from 'react-redux';
import {filterEventAction} from "../actions";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker, d} from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {ptBR} from "@material-ui/core/locale";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'white'
    },
    inputInput: {
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        color:'white !important'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

TopBar.defaultProps = {
    hideEventFilter: true
}


export default function TopBar(props) {
    const dispatch = useDispatch()
    const classes = useStyles();

    const [eventFilter, setEventFilter] = React.useState('');
    const [eventDate, setEventDate] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            {props.hideEventFilter}
            <AppBar position="static">
                <Toolbar>

                    {props.hideEventFilter ? "" : <div style={{padding:"5px",margin:"5px"}}>
                        <div className={classes.search} style={{padding:"5px",margin:"5px", width:"100%"}}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Pesquisar por evento"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                value={eventFilter}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={event => setEventFilter(event.target.value)}

                            />

                            <IconButton
                                // style={{ padding: 0 }}
                                edge="end"
                                size="small"
                                disabled={eventFilter === ''}
                                onClick={() => event => setEventFilter('')}
                            >
                                <ClearIcon />
                            </IconButton>
                        </div>
                        <div className={classes.search} style={{padding:"5px", margin:"5px", width:"100%"}}>
                            <div className={classes.searchIcon}>
                                <CalendarTodayIcon />
                            </div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} style={{padding:"0 !important"}} >
                                <DatePicker
                                    placeholder="Data do evento"
                                    format="dd/MM/yyyy"
                                    views={["year", "month", "date"]}
                                    value={eventDate}
                                    onChange={e => setEventDate(e)}
                                    animateYearScrolling
                                    InputProps={{ className: classes.inputInput, disableUnderline:true }}
                                />
                                <IconButton
                                    // style={{ padding: 0 }}
                                    edge="end"
                                    size="small"
                                    disabled={!eventDate}
                                    onClick={() => setEventDate(null)}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div style={{padding:"5px", margin:"5px", width:"100%"}}>
                            <Button variant="contained" style={{width:"100%"}} color="primary" onClick={e=>{dispatch(filterEventAction(eventFilter,eventDate))}}>
                                Filtrar
                            </Button>
                        </div>
                    </div>}
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit" >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}