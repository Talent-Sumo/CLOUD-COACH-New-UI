import React, { useState, useEffect } from 'react';
import styles from './FormFeedback.module.css';

import { useNavigate } from 'react-router-dom';

import {
    Container,
    Box,
    Alert,
    Paper,
    Stack,
    CircularProgress,
    Typography,
    Card,
    CardContent,
    Button,
} from '@mui/material';

// Icon
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const FormQuestionsFeedback = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 120000);
    }, []);

    return (
        <>
            <Container sx={{ paddingTop: "2rem" }} maxWidth='lg'>

                {
                    loading && (
                        <Box p={2} sx={{ bgcolor: "#e5f6fd", display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <HourglassTopIcon className={styles.icon} color='primary' sx={{ fontSize: 40 }} />
                                <Typography variant='h6'>Processing : Please wait while we analyze the response.</Typography>

                            </Box>
                            <Box mt={1}>
                                <Button onClick={() => navigate("/form/audio-question")} size='small' variant='contained'>Skip</Button>
                            </Box>
                        </Box>
                    )
                }

                {
                    loading && (
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 2,
                        }}>
                            <CircularProgress />
                        </Box>
                    )
                }

                {
                    !loading && (
                        <div>
                            <Box mt={2}>
                                <Card sx={{ bgcolor: "#f5f5f5" }}>
                                    <CardContent>
                                        <Box mb={2} p={1} sx={{ backgroundColor: "#1976d2", width: '100%' }} align='center'>
                                            <Typography color='white' variant='h5'>Response Analysis Report</Typography>
                                        </Box>
                                        <table className={styles.table}>
                                            <tr>
                                                <th className={styles.th}>Power Skill</th>
                                                <th className={styles.th}>Score</th>
                                            </tr>
                                            <tr>
                                                <td className={styles.td}>Clarity</td>
                                                <td className={styles.td}>NA</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td}>Energy</td>
                                                <td className={styles.td}>NA</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td}>Confidence</td>
                                                <td className={styles.td}>NA</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td}>Fluency</td>
                                                <td className={styles.td}>NA</td>
                                            </tr>
                                        </table>

                                        <Box mt={2} sx={{ display: "flex", justifyContent: "end" }}>
                                            <Button onClick={() => navigate("/form/audio-question")} variant='contained'>Next</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box mt={3}>
                                <Card sx={{ bgcolor: "#f5f5f5" }}>
                                    <CardContent>
                                        <Paper component={Stack} p={2}>
                                            <Typography mb={2} variant='h5'>Coach Suggestion</Typography>
                                            <Typography color='primary' mb={2} variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto natus deserunt repellendus, eos totam consequatur eveniet! Distinctio non accusamus nemo ducimus! Reiciendis natus ad culpa nesciunt quaerat officia deserunt, nihil fuga alias in? Quae, voluptate rem? Quibusdam, sed quisquam consequatur earum cumque suscipit atque ea reiciendis illo ipsam porro?
                                            </Typography>
                                        </Paper>
                                        <Paper component={Stack} p={2} mt={2}>
                                            <Typography mb={2} variant='h5'>Feedback Analysis</Typography>
                                            <Typography color='primary' mb={2} variant='body1'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto natus deserunt repellendus, eos totam consequatur eveniet! Distinctio non accusamus nemo ducimus! Reiciendis natus ad culpa nesciunt quaerat officia deserunt, nihil fuga alias in? Quae, voluptate rem? Quibusdam, sed quisquam consequatur earum cumque suscipit atque ea reiciendis illo ipsam porro?
                                            </Typography>
                                        </Paper>
                                    </CardContent>
                                </Card>
                            </Box>
                        </div>
                    )
                }
            </Container>
        </>
    )
}

export default FormQuestionsFeedback;