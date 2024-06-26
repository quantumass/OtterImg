const IconWindowOverlay = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M15 6H17V9H15zM25 17H28V19H25zM15 27H17V30H15zM4 17H7V19H4z" />
			<path d="M7.55 9.03H9.55V12.03H7.55z" transform="rotate(-45 8.558 10.545)" />
			<path d="M21.96 9.54H24.96V11.54H21.96z" transform="rotate(-45 23.466 10.54)" />
			<path d="M22.46 23.94H24.46V26.94H22.46z" transform="rotate(-45 23.459 25.443)" />
			<path d="M7.04 24.45H10.04V26.45H7.04z" transform="rotate(-45 8.55 25.448)" />
			<path d="M4 2H28V4H4zM16 24a6 6 0 10-6-6A6 6 0 0016 24zm0-10v8a4 4 0 010-8z" />
		</svg>
	);
};
export default IconWindowOverlay;
