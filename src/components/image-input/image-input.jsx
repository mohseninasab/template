import React, { useState } from "react"
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography"

// #############################################################################
// ImageInput component
// #############################################################################

export default function ImageInput(props){
	const { classes = {}, label="Choose File", required = false } = props;
	const { defaultImage = "", showDefaultImage = false } = props;
	const classNames = useStyles();
	const [data, setData] = useState("");
	const [rawData, setRawData] = useState("");
	const [ showDefault, setShowDefault ] = useState(showDefaultImage)

	// ###########################################################################
	// handle the change of the image
	// ###########################################################################

	const handleChange = (event) => {
		if(!event.target.files[0]) return;

		const file =  event.target.files[0];
		const oFReader = new FileReader();
		const value = event.target.value;

		setData(event.target.value);
		setShowDefault(false)
		oFReader.readAsDataURL(event.target.files[0]);

		oFReader.onload = (oFREvent) => {
			setRawData(oFREvent.target.result);
			if(props.onChange) props.onChange([file, oFREvent.target.result, value])
		}
	}

	// ###########################################################################
	// clean data
	// ###########################################################################

	const cleanData = () => {
		setData("");
		setRawData("");
		setShowDefault(false)
		if(props.onChange) props.onChange("")
	}

	// ###########################################################################
	// return 
	// ###########################################################################

	return (
		<div className={`${classNames.root} ${classes.root}`}>

			<input
				value={data}
				required={required} 
				accept='image/*' 
				className={classes.input}
				type="file" 
				onChange={handleChange}
			/>

			<IconButton onClick={cleanData} className={classes.icon}>
				<CloseIcon/>
			</IconButton>

			<img src={showDefault ? rawData ? rawData : defaultImage : rawData} alt=""/>

			{!data &&
				<label>
					<Typography variant="caption" color="inherit">{label}</Typography>
				</label>
			} 
		</div>
	);
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: 70,
		position: "relative",
		display: "flex",
		alignItems: "center",
    justifyContent: "center",
		width: "100%",
		overflow: "hidden",
		...theme.palette.ImageInput,

		"& > input":{
				zIndex: 2,
        width: "100%",
        height: "100%",
        opacity: 0,
        position: "absolute",
        padding: 5,
        left: 0,
        top: 0,
    },

    "& > button":{
    		zIndex: 3,
        position: "absolute",
        padding: 4,
        left: 2,
        top: 2,
    },

    "& > label":{
    	zIndex: 1,
    	position: "absolute",
    },
    "& > img":{
    	zIndex: 0,
    	width: "100%"
    },
	},
}));

// #############################################################################
// styles
// #############################################################################

export { ImageInput }