
import { useState } from "react";
import data from './data.json'

function App() {

    const [scores] = useState(data)

    return (

        <div className="md:flex   md:items-center md:justify-center md:h-screen">
            <section className=" md:flex shadow-lg md:rounded-3xl w-full bg-white">

                <div className=" bg-gradient-to-t from-slate-blue-dark to-slate-blue-light p-8 text-center
                                 text-white flex flex-col items-center rounded-b-3xl md:flex-1 md:rounded-3xl">

                    <p className="mb-6 text-slate-200 text-xl">Your Result</p>

                    <p className=" bg-gradient-to-t from-slate-blue-circle-dark to-slate-blue-circle-light w-52 h-52 flex flex-col
                                        items-center justify-center rounded-full text-xs text-slate-300">

                        <span className=" text-7xl font-bold text-white">76</span> of 100
                    </p>
                    <h2 className="my-6 text-2xl font-bold">Great</h2>
                    <p className=" text-slate-300 w-52">You scored higher than 65% of the people who have taken these tests.</p>

                </div>
                <div className="p-6 md:flex-1 bg-white md:rounded-3xl">
                    <h2 className="font-bold text-lg text-cyan-950">Summary</h2>
                    {scores.map((score, index) => (

                        <div key={index} style={
                            { backgroundColor: `${score.color}10` }} className=" rounded-2xl my-4 flex justify-between items-center">

                            <h3 style={{ color: score.color }} className="p-5 flex gap-2 items-center">
                                <img src={score.icon} alt={score.category} />
                                {score.category}
                            </h3>

                            <p className="p-2 text-slate-400 mr-2">
                                <span className=" text-cyan-950 font-bold">{score.score}</span> / 100
                            </p>
                        </div>
                    ))}

                    <button className=" bg-cyan-950 text-white w-full hover:bg-gradient-to-t from-slate-blue-dark to-slate-blue-light  p-4 rounded-full">Continue</button>

                </div>
            </section>
        </div>
    );
}

export default App;

