import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import { Fade, } from 'react-reveal'


const Experience = () => {
    return (
        <>
            <Box>
                <Fade cascade bottom >

                    <Typography

                        variant="h3"
                        sx={{
                            /* marginTop: "20rem", */
                        }}
                    >
                        Опыт работы
                    </Typography>

                    <Typography

                        variant="h5"
                        sx={{
                            marginTop: "1rem",
                            fontWeight: 300,
                        }}>
                        Recordati LLC (ООО "РУСФИК")
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: 300,
                        }}
                    >
                        октябрь 2020 - август 2022
                    </Typography>
                    <Typography
                        variant='h5'
                        sx={{
                            marginTop: "2rem",
                            fontWeight: 300,
                        }}
                    >
                        Ассистент коммерческого отдела
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "1rem"
                        }}>
                        Разработка макета и верстка сайтов для учебных и рабочих задач по повышению квалификации сотрудников (использование Figma, React JS, библиотек materail UI, axios, redux )
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "1rem"
                        }}>
                        Разработка сайтов для отдела дистрибьюции: статистика по ценам оптовиков и аптечных сетей, формирование единой справочной базы для менеджеров( <strong>использование React, Sass, axios, redux</strong>)
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "1rem"
                        }}>
                        Разработка и верстка системы согласования договоров, счетов и других документов внутри компании (использование<strong> CSS, HTML, native Javascript и проприетарных библиотек</strong>)
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "1rem"
                        }}>
                        Обработка закрывающих документов и взаимодействие с контрагентами и региональными менеджерами по всей стране.
                        Занесение и оформление счетов, заказов в 1с коммерция.<br />
                        Перевод писем и деловая переписка на английском между дочерними компаниями Recordati LLC.

                    </Typography>
                    {/* <Typography>
                            Контент менеджер
                        </Typography>
                        <Typography>
                            Май 2018 - октябрь 2018; октябрь 2019 - февраль 2020
                        </Typography>
                        <Typography>
                            Создание и организация контента для социальных сетей заведения (фото и видео съемки).
                            Ведение социальных сетей, общение с потенциальными клиентами, бронь столов, организация мероприятий
                        </Typography> */}
                </Fade>

            </Box>
        </>
    )
}

export default Experience
