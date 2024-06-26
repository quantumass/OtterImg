const IconWindowAuto = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M15 4H17V7H15zM25 15H28V17H25zM15 25H17V28H15zM4 15H7V17H4z" />
			<path d="M7.55 7.04H9.55V10.04H7.55z" transform="rotate(-45 8.55 8.548)" />
			<path d="M21.96 7.55H24.96V9.55H21.96z" transform="rotate(-45 23.454 8.555)" />
			<path d="M22.45 21.95H24.45V24.95H22.45z" transform="rotate(-45 23.452 23.446)" />
			<path d="M7.05 22.45H10.05V24.45H7.05z" transform="rotate(-45 8.544 23.451)" />
			<path d="M4 30H28V32H4zM4 0H28V2H4zM16 10a6 6 0 106 6A6 6 0 0016 10zm-4 6a4 4 0 014-4v8A4 4 0 0112 16z" />
		</svg>
	);
};
export default IconWindowAuto;
