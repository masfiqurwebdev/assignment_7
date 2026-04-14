import Link from "next/link";



const Navbar = () => {

    const links = <>
    <li><Link href={'/'} className="btn btn-primary">Home</Link></li>
    <li><Link href={'/timeline'} className="btn btn-outline">Timeline</Link>Home</li>
    <li><Link href={'/status'}>Status</Link></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-2xl font-bold ">Keen<span className="font-medium text-[#244D3F]">Keeper</span></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex gap-4">
            {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
