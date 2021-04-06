import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import profilePicture from '../../assets/images/profilePicture.jpg';
import DialogNotImplemented from '../DialogNotImplemented';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: 50,
		marginBottom: 10,
		justifyContent: 'space-between',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	meetingText: {
		fontWeight: 700,
		fontSize: 20,
	},
}));

export default function MeetingHeader() {
	const classes = useStyles();
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
			<Paper className={classes.root} elevation={0}>
				<IconButton className={classes.iconButton} onClick={() => setOpenDialog(true)}>
					<MenuIcon />
				</IconButton>
				<Typography className={classes.meetingText}>Meeting</Typography>
				<IconButton className={classes.iconButton}>
					<Avatar alt='kabal' src={profilePicture} />
				</IconButton>
			</Paper>
			<DialogNotImplemented open={openDialog} close={() => setOpenDialog(false)} />
		</>
	);
}
