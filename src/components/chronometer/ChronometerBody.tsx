'use client'

import { MdOutlineTimer } from "react-icons/md";
import styles from "./styles.module.css";
import { useMemo, useRef, useState } from "react";
import formatTime from "@/utils/formatTime";

export default function ChronometerBody() {
    const timerInterval = useRef<NodeJS.Timeout | null>(null);

    const [time, setTime] = useState<number>(0);
    const runningTime: string = useMemo(() => {
        if (time === 0) {
            return '00:00:00';
        }

        const seconds: number = time % 60;
        const minutes: number = Math.floor((time / 60) % 60);
        const hours: number = Math.floor(time / 3600);
        return formatTime(hours, minutes, seconds);
    }, [time]);

    const setTimer = () => {
        console.log(timerInterval);
        if(timerInterval.current) {
            console.log(timerInterval.current);
            clearInterval(timerInterval.current);
            console.log(timerInterval.current);
        }

        timerInterval.current = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);
    }

    const stopTimer = () => {
        if(!timerInterval.current){
            return;
        }

        clearInterval(timerInterval.current);
    }

    const resetTimer = () => {
        if(!timerInterval.current){
            return;
        }

        clearInterval(timerInterval.current);
        setTime(0);
    }

    return (
        <main className="md-w-80 md-h-80 border-2 rounded-md shadow-md px-5 py-3 text-center bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-600">
                Contar tempo
            </h2>
            <MdOutlineTimer className="w-80 h-80 text-purple-800 mt-3 m-auto" />
            <p className="text-3xl font-bold text-gray-500">{ runningTime }</p>
            <div className="mt-3 flex gap-3 flex-col">
                <button
                    onClick={setTimer}
                    className={`${styles.button} bg-green-400 hover:bg-green-500`}
                >
                    Iniciar
                </button>
                <button
                    onClick={stopTimer}
                    className={`${styles.button} bg-red-400 hover:bg-red-500`}
                >
                    Parar
                </button>
                <button
                    onClick={resetTimer}
                    className={`${styles.button} bg-yellow-400 hover:bg-yellow-500`}
                >
                    Resetar
                </button>
            </div>
        </main>
    );
}