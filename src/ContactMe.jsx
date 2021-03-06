import { Dialog, DialogTitle, List, ListItem } from "@material-ui/core";
import { Drafts, Home, Phone } from "@material-ui/icons";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, { useState } from "react";

export function ContactInfo({ open, onClose }) {
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>Contact Details</DialogTitle>
			<List>
				<ListItem>
					<ListItem>
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						Southbank, Melbourne, VIC, 3006, Australia
					</ListItem>
				</ListItem>
				<ListItem>
					<ListItemButton
						component="a"
						href="mailto:dannyhuang1234@gmail.com"
					>
						<ListItemIcon>
							<Drafts />
						</ListItemIcon>
						dannyhuang1234@gmail.com
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItem>
						<ListItemIcon>
							<Phone />
						</ListItemIcon>
						+61 452504531
					</ListItem>
				</ListItem>
			</List>
		</Dialog>
	);
}

export default function ContactMe(Props) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<a
				style={{
					"text-decoration": "underline",
					color: "white",
				}}
				href="javascript:void(0)"
				onClick={handleClickOpen}
			>
				Contact Me
			</a>

			<ContactInfo open={open} onClose={handleClose} />
		</>
	);
}
