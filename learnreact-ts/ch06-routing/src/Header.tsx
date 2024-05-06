// import { FormEvent } from 'react';
import { NavLink, Link, useSearchParams, Form } from 'react-router-dom';
import logo from './logo.svg';

export function Header() {
	const [searchParams] = useSearchParams();
	// const navigate = useNavigate();

	// function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
	// 	e.preventDefault();
	// 	const formData = new FormData(e.currentTarget);
	// 	const search = formData.get('search') as string;
	// 	//setSearchParams({ search });
	// 	//navigate(`/products/?search=${search}`);
	// }

	return (
		<header
			className="text-center text-slate-50 bg-slate-900 h-40 p-5"
		>
			<Form
				className="relative text-right"
				action="/products"
			>
				<input
					type="search"
					name="search"
					placeholder="Search"
					defaultValue={searchParams.get('search') ?? ''}
					className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
				/>
			</Form>
			<Link to="">
				<img
					src={logo}
					alt="Logo"
					className="inline-block h-20" 
				/>
			</Link>
			<Link to="">
				<h1 className="text-2xl">React Tools</h1>
			</Link>
			<nav>
				<NavLink
					to="products"
					className={({ isActive }) =>
						`text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
							isActive ? "border-white" : "border-transparent"
						}`
					}
				>
					Products
				</NavLink>
			</nav>
		</header>
	);
}