import './Navbar.scss';

const Navbar = () => {
	return (
		<header className="header-container">
			<div>Logo</div>
			<div className="menu-container">
				<ul className="menu-list">
					<li>Home</li>
					<li>New</li>
					<li>Popular</li>
					<li>Trending</li>
					<li>Categories</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
