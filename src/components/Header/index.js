import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import profilePicture from '../../assets/images/profilePicture.jpg';
import DialogNotImplemented from '../DialogNotImplemented';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: 50,
		marginBottom: 10,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
}));

export default function Header() {
	const classes = useStyles();
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
			<Paper component='form' className={classes.root}>
				<IconButton className={classes.iconButton} onClick={() => setOpenDialog(true)}>
					<MenuIcon />
				</IconButton>
				<InputBase className={classes.input} placeholder='Search e-mail' />

				<IconButton className={classes.iconButton}>
					<Avatar alt='kabal' src={profilePicture} />
				</IconButton>
			</Paper>
			<DialogNotImplemented open={openDialog} close={() => setOpenDialog(false)} />
		</>
	);
}
