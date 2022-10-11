import React from "react"

import {
  Button,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
} from "@material-ui/core"

function DialogNotImplemented({ open, close }) {
  return (
    <Dialog open={open} onClose={close}>
      <DialogContent>
        <Typography variant="body2" component="p">
          Sorry, but not all features are implemented.
        </Typography>

        <Typography variant="caption" component="p" style={{ marginTop: 10 }}>
          <strong>Remember:</strong> this is just an UI demo!
        </Typography>
      </DialogContent>

      <DialogActions style={{ justifyContent: "center" }}>
        <Button size="small" style={{ textTransform: "none" }} onClick={close}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogNotImplemented
