import { Box } from '@mui/system'
import { /* Button, */ Typography } from '@mui/material'
/* import { Button } from '@mui/material' */
import React from 'react'
import { Fade, } from 'react-reveal'
/* import { KeyboardDoubleArrowDown } from '@mui/icons-material' */
import { AiFillApi, AiFillGithub, AiFillHtml5, BiCookie, BsBootstrapFill, DiCss3, DiReact, DiSass, SiJavascript, SiMaterialUi, SiNextDotJs, SiRedux, SiStyledComponents, SiTypescript, SiWebpack, VscJson } from './icons/Logos'
import Title from './icons/Articles/Title'
import Experience from './icons/Articles/Experience'

const Main = (props) => {
    return (
        <Box sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center"
        }} >
            <Box sx={{
                width: "80%"
            }}>
                <Fade bottom>
                    <Title />
                </Fade>
                <Experience
                /* ref={myRef1} */
                />
                <Fade left
                >

                    <Typography
                        /* ref={myRef3} */
                        variant='h3'
                        sx={{
                            marginTop: "20rem"
                        }}>
                        Tech stack
                    </Typography>
                </Fade>
                <Fade left cascade>
                    <Box
                        sx={{
                            display: "flex",
                            marginBottom: "2rem",
                            gap: 20

                        }}
                    >
                        <Box
                        /* ref={myRef3} */
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiJavascript />
                                <Typography>

                                    JavaScript (ES5-ES6-ES7)
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiTypescript />
                                <Typography>
                                    Typescript
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <AiFillHtml5 />
                                <Typography>
                                    HTML
                                </Typography>

                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <DiCss3 />
                                <Typography>
                                    CSS3
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <DiSass />
                                <Typography>
                                    Препроцессоры (SCSS, SASS)
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <DiReact />
                                <Typography>
                                    React, React-router
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiRedux />
                                <Typography>
                                    Redux, Redux-Thunk
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiNextDotJs />
                                <Typography>
                                    Next.js
                                </Typography>
                            </Box>



                        </Box>

                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <AiFillGithub />
                                <Typography>
                                    Github
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiMaterialUi />
                                <Typography>
                                    Material-UI.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiStyledComponents />
                                <Typography>
                                    Styled components.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <BsBootstrapFill />
                                <Typography>
                                    Bootstrap 4/5.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <AiFillApi />
                                <Typography>
                                    REST API.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <VscJson />
                                <Typography>
                                    Axios
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <BiCookie />
                                <Typography>
                                    js-cookie, local storage, session storage
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 1
                                }}
                            >
                                <SiWebpack />
                                <Typography>
                                    Webpack
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
                <Fade>
                    <Box
                        sx={{
                            height: "100vh"
                        }}>
                        <Typography
                            variant="h3"
                            sx={{
                                marginTop: "20rem",
                            }}
                        >
                            Образование
                        </Typography>
                        <Typography
                        >
                            Российский государственный университет правосудия
                        </Typography>
                        <Typography
                            /* ref={myRef2} */>
                            2018-2022
                        </Typography>
                    </Box>
                </Fade>
            </Box>
        </Box >
    )
}

export default Main
