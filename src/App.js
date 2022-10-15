import mainimg from "./img.jpg"
import clock from "./clock.svg"
import eth from "./eth.svg"
import avatar from "./avatar.png"
import view from "./view.svg"

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-main-bg">
      <div className="bg-card-bg shadow-xl shadow-[rgba(0,0,0,0.25)] w-[350px] h-[575px] justify-center items-center rounded-xl flex flex-col">
        <div className="w-[90%] h-[90%] flex flex-col">
          <div className="w-[315px] h-[315px] group">
            <div className="w-[315px] h-[315px] absolute bg-eth/50 rounded-xl hidden group-hover:flex items-center justify-center "><img src={view} alt="view" className="fill-white"/></div>
            <img src={mainimg} className="rounded-xl" alt="main" />
          </div>
          <h1 className="font-bold text-xl text-white hover:text-eth transition-all mt-2">Equilibrium #3429</h1>
          <h1 className="mt-2 text-text font-thin text-md opacity-75">Our Equilibrium collection promotes balance and calm.</h1>
          <div className="w-[100%] h-[7%] mt-2 flex flex-row items-center justify-between">
            <h1 className="flex flex-row items-center justify-center gap-1 text-eth font-medium text-base"><img src={eth} alt="eth" />0.041ETH</h1>
            <h1 className="flex flex-row items-center justify-center gap-1 text-text text-sm"><img src={clock} alt="clock" />3 days left</h1>
          </div>
          <hr className="text-text opacity-25 mt-2"/>
          <div className="mt-2 w-[100%] h-[10%] flex items-center gap-3">
            <img src={avatar} className="w-[32px] border rounded-full border-white" alt="avatar" />
            <h1 className="text-text text-sm">Creation of <span className="text-white hover:text-eth transition-all">Jules Wyren</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
