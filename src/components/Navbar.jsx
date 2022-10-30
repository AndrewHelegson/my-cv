import { AppBar, Toolbar, Typography, ButtonGroup, Button, /* Menu, */ MenuItem, Popper, Grow, ClickAwayListener, MenuList, /*  Drawer, styled */ } from '@mui/material'
import React/* , { useState } */ from 'react'
import Paper from '@mui/material/Paper';
/* import Stack from '@mui/material/Stack'; */

/* const DrawerButton = styled(Button)(({ theme }) =>
({
    color: "#888"
}) */


/* ) */

const Navbar = ({ myRef1, myRef2, myRef3 }) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    /* const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    }; */

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>

            <AppBar position="sticky" >
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography>
                        My CV
                    </Typography>
                    <ButtonGroup
                        variant="string"
                        aria-label="outlined primary button group"
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex"
                            }
                        }}
                    >
                        <Button>About me</Button>
                        <Button
                            onClick={() => myRef2.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })}
                        >Degree
                        </Button>
                        <Button
                            onClick={() => myRef3.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })}
                        >Tech stack</Button>
                        <Button
                            onClick={() => myRef1.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" })}
                        >Experience</Button>
                    </ButtonGroup>

                </Toolbar>
            </AppBar>
            <div>
                {/* <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Dashboard
                </Button> */}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem
                                            onClick={() => {

                                                myRef2.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
                                                handleClose()
                                            }}
                                        >degree</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>

        </>
    )
}

export default Navbar
