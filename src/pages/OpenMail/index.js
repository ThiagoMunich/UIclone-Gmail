import React from 'react';

import { Dialog, Grid, Slide, Avatar, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { IoLogoPwa } from 'react-icons/io5';
import { AiFillLinkedin } from 'react-icons/ai';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import { FaReact, FaLaravel, FaDigitalOcean, FaGithub } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiGithubactions, SiGmail } from 'react-icons/si';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';

import profilePicture from '../../assets/images/profilePicture.jpg';

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

				<Grid container style={{ padding: 8 }} justify='space-between' alignItems='center'>
					<Avatar style={{ backgroundColor: mail.avatarColor }}>{mail.avatarLetter}</Avatar>
					<Typography variant='body2' className={classes.title}>
						Feel free to contact me!
					</Typography>

					<Grid item container md={5} sm={5} xs={5} justify='flex-end'>
						<UndoOutlinedIcon className={classes.otherIcons} style={{ marginRight: 15 }} fontSize='small' />
						<MoreVertOutlinedIcon className={classes.otherIcons} fontSize='small' />
					</Grid>
				</Grid>

				<Grid container style={{ padding: 10 }}>
					<Grid item md={12} sm={12} xs={12}>
						<Typography variant='body2' component='p'>
							My name is Thiago Munich and I'm a full stack developer.
						</Typography>
					</Grid>
				</Grid>

				<Grid container justify='center' style={{ marginTop: 15 }}>
					<img src={profilePicture} alt='kabal' style={{ borderRadius: 360, width: '40%' }} />
				</Grid>

				<Grid container style={{ padding: 10, marginTop: 20 }} justify='space-between'>
					<Grid item>
						<Typography variant='caption'>
							<strong>Experience:</strong> nearly 2 years
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='caption'>
							<strong>Availability:</strong> preferably freelances
						</Typography>
					</Grid>
				</Grid>

				<Grid container direction='row' alignItems='center' justify='space-between' style={{ padding: 10 }}>
					<Grid container item alignItems='center' justify='space-between' md={5} sm={5} xs={5}>
						<FaReact size={20} style={{ color: '#61DBFB' }} />
						<Typography variant='caption'>React JS</Typography>
					</Grid>

					<Grid container item alignItems='center' justify='space-between' md={5} sm={5} xs={5}>
						<FaReact size={20} style={{ color: '#61DBFB' }} />
						<Typography variant='caption'>React Native</Typography>
					</Grid>

					<Grid
						container
						item
						alignItems='center'
						justify='space-between'
						md={5}
						sm={5}
						xs={5}
						style={{ marginTop: 20 }}
					>
						<IoLogoPwa size={20} style={{ color: '#1D395D' }} />
						<Typography variant='caption'>React PWA</Typography>
					</Grid>

					<Grid
						container
						item
						alignItems='center'
						justify='space-between'
						md={5}
						sm={5}
						xs={5}
						style={{ marginTop: 20 }}
					>
						<FaLaravel size={20} style={{ color: '#F05340' }} />
						<Typography variant='caption'>Laravel</Typography>
					</Grid>

					<Grid
						container
						item
						alignItems='center'
						justify='space-between'
						md={5}
						sm={5}
						xs={5}
						style={{ marginTop: 20 }}
					>
						<FaGithub size={20} style={{ color: '#333' }} />
						<Typography variant='caption'>GitHub</Typography>
					</Grid>

					<Grid
						container
						item
						alignItems='center'
						justify='space-between'
						md={5}
						sm={5}
						xs={5}
						style={{ marginTop: 20 }}
					>
						<SiGithubactions size={20} style={{ color: '#333' }} />
						<Typography variant='caption'>GitHub Actions</Typography>
					</Grid>

					<Grid
						container
						item
						alignItems='center'
						justify='space-between'
						md={5}
						sm={5}
						xs={5}
						style={{ marginTop: 20 }}
					>
						<SiMicrosoftsqlserver size={20} style={{ color: '#F25022' }} />
						<Typography variant='caption'>SQL Server</Typography>
					</Grid>

					<Grid
						container
						item
						alignItems='center'
						justify='space-between'
						md={5}
						sm={5}
						xs={5}
						style={{ marginTop: 20 }}
					>
						<FaDigitalOcean size={20} style={{ color: '#008BCF' }} />
						<Typography variant='caption'>Cloud Computing</Typography>
					</Grid>
				</Grid>

				<Grid container style={{ padding: 10 }}>
					<Grid item md={12} sm={12} xs={12}>
						<Typography variant='overline' component='p'>
							Contact me
						</Typography>
					</Grid>
					<a href='https://linkedin.com/in/thiagomunich' target='_blank' rel='noreferrer'>
						<AiFillLinkedin size={30} style={{ color: '#008BCF' }} />
					</a>
					<a href='mailto:thiagomunich@gmail.com' target='_blank' rel='noreferrer'>
						<SiGmail size={30} style={{ color: '#BB001B', marginLeft: 10 }} />
					</a>
				</Grid>
			</Dialog>
		</>
	);
}

export default OpenMail;
