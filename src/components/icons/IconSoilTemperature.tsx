const IconSoilTemperature = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<circle cx="5" cy="13" r="1" />
			<circle cx="11" cy="19" r="1" />
			<circle cx="15" cy="25" r="1" />
			<circle cx="17" cy="15" r="1" />
			<circle cx="13" cy="11" r="1" />
			<circle cx="9" cy="27" r="1" />
			<circle cx="3" cy="21" r="1" />
			<path d="M25 30a4.9863 4.9863 0 01-3-8.98V15a3 3 0 016 0v6.02A4.9863 4.9863 0 0125 30zm0-16a1.0011 1.0011 0 00-1 1v7.13l-.4971.2893A2.9676 2.9676 0 0022 25a3 3 0 006 0 2.9676 2.9676 0 00-1.5029-2.5811L26 22.13V15A1.0011 1.0011 0 0025 14zM2 6H30V8H2z" />
		</svg>
	);
};
export default IconSoilTemperature;
