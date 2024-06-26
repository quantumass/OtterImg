const IconSunny = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path
				d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"
				transform="translate(0 .005)"
			/>
			<path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.86 7.856)" />
			<path d="M2 15.005H7V17.005000000000003H2z" />
			<path d="M5.375 23.147H10.333V25.147H5.375z" transform="rotate(-45 7.86 24.149)" />
			<path d="M15 25.005H17V30.005H15z" />
			<path d="M23.147 21.668H25.147V26.625999999999998H23.147z" transform="rotate(-45 24.152 24.149)" />
			<path d="M25 15.005H30V17.005000000000003H25z" />
			<path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.152 7.856)" />
			<path d="M15 2.005H17V7.005H15z" />
		</svg>
	);
};
export default IconSunny;
