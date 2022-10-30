import React from 'react'
import { Box } from '@mui/system'
import { /* Button, */ Typography } from '@mui/material'
/* import { Button } from '@mui/material' */
/* import { Fade, } from 'react-reveal'
import { KeyboardDoubleArrowDown } from '@mui/icons-material' */
const Title = () => {
    return (
        <>
            <Box
                sx={{
                    height: "100vh"
                }}>
                <Typography
                    variant="h2"

                >
                    Хрустиков Андрей
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: "1rem",
                        fontWeight: 300
                    }} >
                    frontend разработчик
                </Typography>
                {/* <Button

                        sx={{
                            paddingLeft: 0,
                            color: "black",
                            fontWeight: 300,
                            fontSize: ""
                        }}
                    >
                        <Typography>
                            К опыту
                        </Typography>
                        <KeyboardDoubleArrowDown />
                    </Button> */}
            </Box>
        </>
    )
}

export default Title
