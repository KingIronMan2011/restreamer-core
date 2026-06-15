import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import type { OutlinedInputProps } from '@mui/material/OutlinedInput';

import Env from './Env';

type ComponentProps = Omit<OutlinedInputProps, 'label'> & {
	env?: boolean;
	helperText?: React.ReactNode;
	label?: React.ReactNode;
	fullWidth?: boolean;
	max?: string | number;
	min?: string | number;
	readOnly?: boolean;
	step?: string | number;
	variant?: string;
};

export default function Component(props: ComponentProps) {
	const id = props.id === null ? uuidv4() : props.id;
	let adornment = null;

	if (props.env) {
		adornment = (
			<InputAdornment position="end">
				<Env />
			</InputAdornment>
		);
	}

	return (
		<FormControl variant="outlined" disabled={props.disabled} fullWidth>
			<InputLabel htmlFor={id}>{props.label}</InputLabel>
			<OutlinedInput
				id={id}
				value={props.value}
				onChange={props.onChange}
				endAdornment={adornment}
				label={props.label}
				multiline={props.multiline}
				rows={props.rows}
				type={props.type}
				inputProps={{
					min: props.min,
					max: props.max,
					step: props.step,
					...(props.inputProps ?? {}),
				}}
				readOnly={props.readOnly}
			/>
			{props.helperText && (
				<FormHelperText>{props.helperText}</FormHelperText>
			)}
		</FormControl>
	);
}

Component.defaultProps = {
	id: null,
	label: '',
	value: '',
	disabled: false,
	multiline: false,
	rows: 1,
	env: false,
	type: 'text',
	helperText: null,
	onChange: function (value) {},
};
