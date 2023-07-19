import React from "react";
import { colors } from "../styles/color";
import { typeIcons } from "../styles/icons";

const PokemonCard = ({ id, image, name, types }) => {
    const handleType0 = () => {
        if (types[0]) {
            return types[0].type.name;
        }
        return "";
    };

    const handleType1 = () => {
        if (types[1]) {
            return types[1].type.name;
        }
        return "";
    };

    const background = handleType0();

    return (
        <div
            style={{ background: colors[background] }}
            className="rounded-3xl px-8 ml-5 mb-5 shadow-lg border border-slate-600 hover:cursor-pointer transition ease-in-out hover:scale-110 duration-300"
            key={id}
        >
            <div className="w-64 bg-[url('../img/pokebola.svg')] bg-cover bg-center">
                <div className="flex items-center justify-between text-white font-bold pb-6">
                    <h1 className="text-3xl inter mt-2">{name}</h1>
                    <span className="text-3xl mt-2 text-slate-100 opacity-60">
                        #{id}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-24">
                    <div className="flex flex-col item gap-1">
                        {handleType0() && (
                            <span className="text-sm font-semibold shadow-md text-white rounded-full bg-slate-100 bg-opacity-60 px-2">
                                {handleType0()}
                            </span>
                        )}
                        {handleType1() && (
                            <span className="text-sm font-semibold shadow-md text-white rounded-full bg-slate-100 bg-opacity-60 px-2">
                                {handleType1()}
                            </span>
                        )}
                    </div>
                    <img className="w-24 h-24 mb-2" src={image} alt={name} />
                </div>
                <div>
                    <div className="mb-5 flex items-center gap-2">
                        {handleType0() && (
                            <img
                                className="w-6 h-6 rounded-full shadow-md bg-slate-100 bg-opacity-60 py-1"
                                src={typeIcons[handleType0()]}
                                alt={name}
                            />
                        )}
                        {handleType1() && (
                            <img
                                className="w-6 h-6 rounded-full shadow-md bg-slate-100 bg-opacity-60 py-1"
                                src={typeIcons[handleType1()]}
                                alt={name}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
