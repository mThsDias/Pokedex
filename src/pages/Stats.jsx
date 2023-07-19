import { useNavigate } from "react-router-dom";
import { colors } from "../styles/color";
import { typeIcons } from "../styles/icons";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Stats = () => {
    const storedData = localStorage.getItem("pokemonData");
    const storedPokemon = storedData ? JSON.parse(storedData) : null;

    const navigate = useNavigate();

    const handleType0 = () => {
        if (storedPokemon.types[0]) {
            return storedPokemon.types[0].type.name;
        }
        return "";
    };

    const handleType1 = () => {
        if (storedPokemon.types[1]) {
            return storedPokemon.types[1].type.name;
        }
        return "";
    };

    const background = storedPokemon.types[0].type.name;

    return (
        <div
            style={{ background: colors[`${background}`] }}
            className="min-h-screen"
        >
            <button
                onClick={() => navigate("/")}
                className=" transition ease-in-out hover:underline hover:-translate-y-1 hover:scale-110 text-4xl text-white font-semibold ml-20 mt-12 flex flex-col absolute max-2xl:mt-5 max-2xl:ml-10 max-2xl:text-3xl max-lg:text-3xl max-md:ml-5 max-sm:mt-8 max-sm:ml-8"
            >
                <HiArrowNarrowLeft />
                <span className="text-base max-lg:text-sm">voltar</span>
            </button>
            <div className="flex justify-center items-end pt-32 gap-5 w-full max-2xl:pt-12 max-lg:pt-3 max-sm:pt-20">
                <div>
                    <img
                        className="h-96 max-2xl:h-60 max-lg:h-44"
                        src={
                            storedPokemon.sprites.other.dream_world
                                .front_default
                        }
                        alt={storedPokemon.name}
                    />
                </div>
                <div className="flex flex-col pt-28 ml-5 max-sm:ml-1">
                    <div className="flex gap-2 flex-wrap flex-col">
                        <div className="flex gap-2">
                            {handleType0() && (
                                <img
                                    className="w-10 rounded-full bg-slate-500 bg-opacity-60 px-2 shadow-md max-lg:w-9 max-sm:w-7"
                                    src={typeIcons[`${handleType0()}`]}
                                    alt={storedPokemon.name}
                                />
                            )}
                            {handleType0() && (
                                <span className="font-semibold text-white shadow-md rounded-full bg-slate-500 bg-opacity-60 px-2 py-1  max-lg:text-sm max-sm:text-xs">
                                    {storedPokemon.types[0].type.name}
                                </span>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {handleType1() && (
                                <img
                                    className="w-10 rounded-full bg-slate-500 bg-opacity-60 px-2 shadow-md max-lg:w-9 max-sm:w-7"
                                    src={typeIcons[`${handleType1()}`]}
                                    alt={storedPokemon.name}
                                />
                            )}
                            {handleType1() && (
                                <span className="font-semibold text-white shadow-md rounded-full bg-slate-500 bg-opacity-60 px-2 py-1 max-lg:text-sm max-sm:text-xs">
                                    {storedPokemon.types[1].type.name}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-5 flex-wrap">
                        <h1
                            className="text-7xl font-bold mt-2 text-slate-100
                        max-2xl:text-6xl max-lg:text-5xl max-sm:text-3xl"
                        >
                            {storedPokemon.name}
                        </h1>
                        <span className="text-8xl font-bold mt-2 text-slate-100 opacity-60 max-2xl:text-6xl max-lg:text-5xl max-sm:text-3xl">
                            #{storedPokemon.id}
                        </span>
                    </div>
                    <div className="flex justify-between mt-5 flex-wrap max-2xl:mt-2 max-sm:mr-5">
                        <div className="flex flex-col">
                            <span className="text-base text-white font-semibold max-lg:text-sm max-sm:text-xs">
                                - Height
                            </span>
                            <span className="text-base text-white font-semibold max-lg:text-sm max-sm:text-xs">
                                - Weigth
                            </span>
                            <span className="text-base text-white font-semibold max-lg:text-sm max-sm:text-xs">
                                - Abilities
                            </span>
                        </div>
                        <div className="flex-col flex">
                            <span className="text-base text-white font-semibold max-lg:text-sm max-sm:text-xs">
                                {storedPokemon.height}M
                            </span>
                            <span className="text-base text-white font-semibold max-lg:text-sm max-sm:text-xs">
                                {storedPokemon.weight}KG
                            </span>
                            <span className="text-base text-white font-semibold max-lg:text-sm max-sm:text-xs">
                                {storedPokemon.abilities[0].ability.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex  w-full gap-10 mt-10 items-center max-sm:mt-28">
                <div className="flex items-start justify-center w-full text-white font-semibold gap-32 max-2xl:gap-24 max-md:gap-0">
                    <h1 className="text-white font-bold text-6xl max-2xl:text-5xl max-md:pr-3 max-lg:text-4xl max-lg:mr-5 max-sm:text-2xl max-sm:hidden">
                        Stats
                    </h1>
                    <div className="flex flex-col gap-6 max-2xl:gap-2 max-md:mr-5 max-md:gap-2 max-sm:text-xs max-sm:gap-5 max-sm:ml-3">
                        <span>Hp</span>
                        <span>Attack</span>
                        <span>Defense</span>
                        <span>Special Attack</span>
                        <span>Special Defense</span>
                        <span>Speed</span>
                    </div>
                    <div className="flex flex-col gap-6 max-2xl:gap-4 max-sm:gap-6">
                        <div className=" flex items-center w-56 h-6 rounded-full max-2xl:h-4 max-sm:h-3 max-sm:ml-2">
                            <span
                                className="h-6 bg-white rounded-md dark:bg-white max-2xl:h-4 max-sm:h-3"
                                style={{
                                    width: `${storedPokemon.stats[0].base_stat}%`,
                                }}
                            ></span>
                        </div>
                        <div className=" flex items-center w-56 h-6 rounded-full max-2xl:h-4 max-sm:h-3 max-sm:ml-2">
                            <span
                                className="h-6 bg-white rounded-md max-2xl:h-4 max-sm:h-3 "
                                style={{
                                    width: `${storedPokemon.stats[1].base_stat}%`,
                                }}
                            ></span>
                        </div>
                        <div className=" flex items-center w-56 h-6 rounded-full max-2xl:h-4 max-sm:h-3 max-sm:ml-2">
                            <span
                                className="h-6 bg-white rounded-md dark:bg-white max-2xl:h-4 max-sm:h-3"
                                style={{
                                    width: `${storedPokemon.stats[2].base_stat}%`,
                                }}
                            ></span>
                        </div>
                        <div className=" flex items-center w-56 h-6 rounded-full max-2xl:h-4 max-sm:h-3 max-sm:ml-2">
                            <span
                                className="h-6 bg-white rounded-md dark:bg-white max-2xl:h-4 max-sm:h-3"
                                style={{
                                    width: `${storedPokemon.stats[3].base_stat}%`,
                                }}
                            ></span>
                        </div>
                        <div className=" flex items-center w-56 h-6 rounded-full max-2xl:h-4 max-sm:h-3 max-sm:ml-2">
                            <span
                                className="h-6 bg-white rounded-md dark:bg-white max-2xl:h-4 max-sm:h-3"
                                style={{
                                    width: `${storedPokemon.stats[4].base_stat}%`,
                                }}
                            ></span>
                        </div>
                        <div className=" flex items-center w-56 h-6 rounded-full max-2xl:h-4 max-sm:h-3 max-sm:ml-2">
                            <span
                                className="h-6 bg-white rounded-md dark:bg-white max-2xl:h-4 max-sm:h-3"
                                style={{
                                    width: `${storedPokemon.stats[5].base_stat}%`,
                                }}
                            ></span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 max-2xl:gap-2 max-md:ml-5 max-sm:text-xs max-sm:gap-5 max-sm:mr-1 max-sm:ml-2">
                        <span>{storedPokemon.stats[0].base_stat}</span>
                        <span>{storedPokemon.stats[1].base_stat}</span>
                        <span>{storedPokemon.stats[2].base_stat}</span>
                        <span>{storedPokemon.stats[3].base_stat}</span>
                        <span>{storedPokemon.stats[4].base_stat}</span>
                        <span>{storedPokemon.stats[5].base_stat}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
