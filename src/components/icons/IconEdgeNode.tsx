const IconEdgeNode = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<path d="M22 6H26V10H22z" />
			<circle cx="7" cy="7" r="1" />
			<circle cx="25" cy="25" r="1" />
			<circle cx="25" cy="21" r="1" />
			<circle cx="25" cy="17" r="1" />
			<path d="M22,17V15H20V14a2.0023,2.0023,0,0,0-2-2H17V10H15v2H13V10H11v2H10a2.0023,2.0023,0,0,0-2,2v1H6v2H8v2H6v2H8v1a2.0023,2.0023,0,0,0,2,2h1v2h2V24h2v2h2V24h1a2.0023,2.0023,0,0,0,2-2V21h2V19H20V17Zm-4,5H10V14h8Z" />
			<path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z" />
		</svg>
	);
};
export default IconEdgeNode;
