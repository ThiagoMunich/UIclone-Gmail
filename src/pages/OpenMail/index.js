import React, { useState } from 'react';

import { Collapse, Dialog, DialogContent, Grid, Slide, Avatar, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles({
	backIcon: {
		opacity: '90%',
	},
	otherIcons: {
		opacity: '70%',
	},
	title: {
		fontWeight: 700,
	},
});

function OpenMail({ open, close, mail }) {
	const classes = useStyles();

	const [openForMe, setOpenForMe] = useState(false);

	return (
		<>
			<Dialog
				fullScreen
				open={open}
				onClose={close}
				transitionDuration={500}
				TransitionComponent={Slide}
				TransitionProps={{ direction: 'right' }}
			>
				<Grid container justify='space-between' style={{ padding: 5 }}>
					<Grid item container md={3} sm={3} xs={3}>
						<ArrowBackIcon onClick={close} className={classes.backIcons} />
					</Grid>

					<Grid item container md={5} sm={5} xs={5} justify='space-between'>
						<SystemUpdateAltOutlinedIcon className={classes.otherIcons} />
						<DeleteForeverOutlinedIcon className={classes.otherIcons} />
						<MailOutlineOutlinedIcon className={classes.otherIcons} />
						<MoreVertOutlinedIcon className={classes.otherIcons} />
					</Grid>
				</Grid>

				<Grid container style={{ padding: 10 }}>
					<Typography variant='h6' component='p'>
						{mail.title}
					</Typography>
				</Grid>

				<Grid container style={{ padding: 8 }} justify='space-between'>
					<Avatar style={{ backgroundColor: mail.avatarColor }}>{mail.avatarLetter}</Avatar>
					<Typography variant='body2' className={classes.title}>
						This text just random
					</Typography>

					<Grid item container md={5} sm={5} xs={5} justify='flex-end'>
						<UndoOutlinedIcon className={classes.otherIcons} style={{ marginRight: 15 }} />
						<MoreVertOutlinedIcon className={classes.otherIcons} />
					</Grid>
					<Grid item container md={6} sm={6} xs={6} justify='center' style={{ marginBottom: 10 }}>
						<Typography variant='caption' component='p'>
							for me
						</Typography>
						{openForMe ? (
							<ExpandLess onClick={() => setOpenForMe(false)} fontSize='small' />
						) : (
							<ExpandMore onClick={() => setOpenForMe(true)} fontSize='small' />
						)}
					</Grid>
				</Grid>

				<Collapse in={openForMe} timeout='auto' unmountOnExit>
					<Alert>Teste</Alert>
				</Collapse>

				<DialogContent>{mail.content}</DialogContent>
			</Dialog>
		</>
	);
}

export default OpenMail;
