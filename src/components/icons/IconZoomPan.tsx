const IconZoomPan = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M27.01 12L25.6 13.41 28.18 16 25.59 18.59 27.01 20 31.01 16 27.01 12zM6.41 13.42L5 12 1 16 5 20 6.42 18.59 3.83 16 6.41 13.42zM16 28.17L13.41 25.58 12 27 16 31 20 27 18.59 25.59 16 28.17zM16 3.83L18.58 6.41 20 5 16 1 12 5 13.41 6.42 16 3.83zM22 16a6 6 0 10-2.53 4.89l3.82 3.82 1.42-1.42-3.82-3.82A6 6 0 0022 16zm-6 4a4 4 0 114-4A4 4 0 0116 20z" />
		</svg>
	);
};
export default IconZoomPan;
