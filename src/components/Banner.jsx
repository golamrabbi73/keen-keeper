import plusIcon from "../../public/images/Vector.png";
export default function Banner(){
    return(
        <>
            <header>
                {/* banner */}
                <div className="max-w-6xl mx-auto mt-20 mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Friends to keep close in your life</h1>
                    <p className="text-[#64748B] px-5 mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />relationships that matter most.</p>
                    <button className="btn btn-xs md:btn-md bg-[#244D3F] text-white font-light"><img src={plusIcon} alt="" />Add a Friend</button>
                </div>

                {/* 4 summary cards */}
                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mx-auto gap-6">
                    <div className="card w-65 bg-base-100 card-md shadow-sm p-8 text-center">
                        <h2 className="font-semibold text-[#244D3F] text-4xl mb-2">0</h2>
                        <p className="text-[#64748B]">Total Friends</p>
                    </div>
                    <div className="card w-65 bg-base-100 card-md shadow-sm p-8 text-center">
                        <h2 className="font-semibold text-[#244D3F] text-4xl mb-2">0</h2>
                        <p className="text-[#64748B]">On Track</p>
                    </div>
                    <div className="card w-65 bg-base-100 card-md shadow-sm p-8 text-center">
                        <h2 className="font-semibold text-[#244D3F] text-4xl mb-2">0</h2>
                        <p className="text-[#64748B]">Need Attention</p>
                    </div>
                    <div className="card w-65 bg-base-100 card-md shadow-sm p-8 text-center">
                        <h2 className="font-semibold text-[#244D3F] text-4xl mb-2">0</h2>
                        <p className="text-[#64748B]">Interaction This Month</p>
                    </div>
                </div>
            </header>
            <hr className="max-w-[1145px] mx-auto text-[#E9E9E9] my-10"/>
            
        </>
    )
}