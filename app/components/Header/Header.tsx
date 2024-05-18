import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="">
            <nav className="bg-sky-800 border-gray-200 rounded-lg">
				<div className="flex flex-wrap items-center justify-between mx-auto p-4">
					<Link href="/"
					      className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<Image
							src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
							alt="ReactLogo"
							className="h-8"
							width={50}
							height={50}
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowraps">
							Wiki React
						</span>
					</Link>
					<div className="flex md:order-2">
						<div className="relative md:block">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<Image
									src="https://img.icons8.com/ios/50/search--v1.png"
									alt="Icon"
									width={20}
									height={20}
								/>
							</div>
							<input
								type="text"
								id="search-navbar"
								className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search..."
							/>
						</div>
					</div>
					<div
						className="items-center justify-between w-full md:flex md:w-auto md:order-1"
						id="navbar-search"
					>
						<ul className="flex flex-row justify-center p-4 sm:p-0 m-0 sm:m-4 font-medium bg-sky-800 sm:space-x-8 rtl:space-x-reverse sm:flex">
							<Link
								href="/"
								className="text-white py-2 px-3 rounded hover:bg-gray-100 sm:hover:text-blue-700 md:p-0"
							>
								Learn
							</Link>
							<Link
								href="/tutorial"
								className="text-white py-2 px-3 rounded hover:bg-gray-100 sm:hover:text-blue-700 md:p-0"
							>
								Tutorial
							</Link>
							<Link
								href="/blog"
								className="text-white py-2 px-3 rounded hover:bg-gray-100 sm:hover:text-blue-700 md:p-0"
							>
								Blog
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}