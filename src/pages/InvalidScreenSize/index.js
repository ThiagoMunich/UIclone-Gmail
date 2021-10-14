import React from 'react';

import { Typography, Grid } from '@material-ui/core';

function InvalidScreenSize() {
	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			style={{ position: 'fixed', top: '50%', backgroundColor: '#F3F3F3' }}
		>
			<Typography variant='h2'>Invalid screen size!</Typography>
			<Typography variant='body1'>
				Please orient your device to portrait or find a smaller screen. You won't be disappointed.
			</Typography>
			<Typography variant='caption'>Max width allowed: 600px</Typography>
		</Grid>
	);
}

export default InvalidScreenSize;
