"use client";
// use client is used when dealing with a client component i.e a frontend component the default
import {
	useRouter,
	useParams,
	useSearchParams,
	usePathname,
} from "next/navigation";
// import { useRouter } from "next/router";
// unlike the default next/router next/navigation is used in place
// useparam is usedm  when yoy want to get the id of a particular page
// /usepath name is used to get the path directory or direction
const PropertyPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const {id} = useParams();
	console.log(" p.s i am debugging");
	const name = searchParams.get("name");
	const pathName = usePathname();
	return (
		<div>
			<button onClick={() => router.push("/")} className="bg-blue-500 p-2">
				{/* the above navigates to the default page when the button is clicked */}
				Go Home {pathName}
			</button>
		</div>
	);
};

export default PropertyPage;
