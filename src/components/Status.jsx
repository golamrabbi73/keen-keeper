export default function Status(){
    return(
        <>
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
        </>
    )
}