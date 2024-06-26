const IconDataBase = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V5A2,2,0,0,0,24,3Zm0,2v6H8V5ZM8,19V13H24v6Zm0,8V21H24v6Z" />
			<circle cx="11" cy="8" r="1" />
			<circle cx="11" cy="16" r="1" />
			<circle cx="11" cy="24" r="1" />
		</svg>
	);
};
export default IconDataBase;
