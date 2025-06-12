import './index.css';

export default function NavBar(){
    return(
      <nav>
       <div className='w-full bg-white shadow-md h-9 flex'>
        <div className="w-[20%] border">
        {/* Left content */}
      </div>
      <div className="w-[60%] border">
        {/* Center content */}
      </div>
      <div className="w-[20%] border">
        {/* Right content */}
      </div>

       </div>
      </nav>
    );
}