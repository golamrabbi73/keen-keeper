import plusIcon from "../../public/images/Vector.png";
export default function Hero(){
    return(
        <>
            <header>
                <div className="mw-6xl mx-auto mt-20 mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Friends to keep close in your life</h1>
                    <p className="text-[#64748B] px-5 mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />relationships that matter most.</p>
                    <button className="btn btn-xs md:btn-md bg-[#244D3F] text-white font-light"><img src={plusIcon} alt="" />Add a Friend</button>
                </div>
            </header>
        </>
    )
}