import React, { useRef } from 'react';
import styles from './QuizReport.module.css';

import ReactToPrint from 'react-to-print';

import {
    Container,
    Box,
    Rating,
    Typography,
    Divider,
    Button,
    Link,
} from '@mui/material';

// Icon
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const SummaryReport = () => {

    const summaryReportRef = useRef();

    return (
        <>
            <Box mt={3}>
                <Container maxWidth='xl'>
                    <Typography variant='h5' mb={2}>Quiz Report</Typography>
                    <Box mb={2}>
                        <ReactToPrint
                            trigger={() => {
                                return (
                                    <Button
                                        color='secondary'
                                        size='small'
                                        variant='contained'
                                    >
                                        <FileDownloadIcon />Download Report
                                    </Button>
                                );
                            }}
                            content={() => summaryReportRef.current}
                            documentTitle="ANSWER CLOUD"
                            pageStyle='{margin:5px}'
                        />
                    </Box>
                    <Divider />
                </Container>
            </Box>

            <Container maxWidth='xl'>
                <Box ref={summaryReportRef} mt={3} mb={3} p={2} className={styles.a4}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        {/* <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Name: <span style={{ color: "#1976d2" }}>Bhavya Khurana</span></Typography> */}
                        <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Team Name: <span style={{ color: "#1976d2" }}>Frontenders</span></Typography>
                        <Link variant='subtitle1' href="https://www.mycloudcoaches.com/feedback" target="_blank">Feedback Rubric</Link>
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Date: <span style={{ color: "#1976d2" }}>04-12-2022</span></Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>Title: <span style={{ color: "#1976d2" }}>Sample title (via company)</span></Typography>
                    <Typography sx={{ fontWeight: "bold" }} mb={1} variant='subtitle1'>Coach Name: <span style={{ color: "#1976d2" }}>Deb Ghosh</span></Typography>
                    <table className={styles.table}>
                        <tr>
                            <th className={styles.th}>Overall Ratings</th>
                            <th className={styles.th}>
                                <Rating name="size-small" defaultValue={4} readOnly size="small" />
                            </th>
                            <th className={styles.th}>
                                <Typography color='primary'>XY %
                                </Typography>
                            </th>
                        </tr>
                    </table>

                    {/* <Typography sx={{ color: "#ED6C02" }} mt={1} mb={3} variant='body1'>Overall rating of the interaction including content. Score used for any leaderboard but screening may be based on any parameter listed in the report.</Typography> */}


                    <Typography mt={3} sx={{ fontWeight: "bold" }} variant='subtitle1'>Content Rating:</Typography>
                    <Typography mb={1} variant='body1'>The table below shows the questions, correct answers and marked answers by the candidate.</Typography>
                    <table className={styles.table}>
                        <tr>
                            <th className={styles.th}>Question No.</th>
                            <th className={styles.th}>Marked Answer</th>
                            <th className={styles.th}>Correct Answer</th>
                        </tr>
                        <tr>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                        </tr>
                        <tr>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                            <td className={styles.td}></td>
                        </tr>
                    </table>
                    <Box mt={5}>
                        <Divider />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SummaryReport;