import React from 'react';

import { Dialog, DialogContent } from '@material-ui/core';

function OpenMail({ open, close, mail }) {
	return (
		<>
			<Dialog open={open} onClose={close}>
				<DialogContent>{mail.content}</DialogContent>
			</Dialog>
		</>
	);
}

export default OpenMail;
