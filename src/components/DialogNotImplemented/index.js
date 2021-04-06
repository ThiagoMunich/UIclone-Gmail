import React from 'react';

import { Dialog, DialogActions, DialogContent, Button, Typography } from '@material-ui/core';

function DialogNotImplemented({ open, close }) {
	return (
		<Dialog open={open} onClose={close}>
			<DialogContent>
				<Typography variant='body2' component='p'>
					Sorry, but not all features are implemented.
				</Typography>
				<Typography variant='caption' component='p'>
					Remember: this is just an UI demo!
				</Typography>
			</DialogContent>
			<DialogActions style={{ justifyContent: 'center' }}>
				<Button size='small' style={{ textTransform: 'none' }} onClick={close}>
					Close me
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogNotImplemented;
