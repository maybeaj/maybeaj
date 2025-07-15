function Nav() {
	return (
		<div className="text-white bg-gray-800 shadow-sm navbar">
			<div className="flex-1">
				<a className="text-xl btn btn-ghost">My Site</a>
			</div>
			<div className="flex-none">
				<ul className="px-1 menu menu-horizontal">
					<li>
						<a className="hover:text-gray-300">Home</a>
					</li>
                    <li>
                        <a className="hover:text-gray-300">About</a>
                    </li>
					<li>
						<a className="hover:text-gray-300">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
