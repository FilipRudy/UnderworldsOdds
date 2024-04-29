import { useEffect, useRef } from "react";

const useOnce = (effect: any) => {
    const didRun = useRef(false);

    useEffect(() => {
        if (!didRun.current) {
            effect();
            didRun.current = true;
        }
    }, [effect]);
};

export default useOnce;
