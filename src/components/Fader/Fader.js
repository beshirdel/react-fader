import {useEffect, useRef, useState, useMemo} from "react";
import {getConfig} from "./config";


const Fader = ({config = {}, fadeIn, children, onTransitionEnd}) => {

    const [mounted, setMounted] = useState(fadeIn);
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const firstTime = useRef(true);

    const configuration = useMemo(() => {
        return getConfig(config)
    }, [config]);

    useEffect(() => {
        const mountElement = (mountState) => {
            setMounted(mountState)
            wrapperRef.current.style.display = mountState ? 'inherit' : 'none';
        };
        containerRef.current.style.opacity = fadeIn ? 1 : 0;

        let timerId1, timerId2;

        timerId1 = fadeIn ? mountElement(true) :
            setTimeout(() => mountElement(false), configuration.fullDuration);

        if (!firstTime.current) {
            timerId2 = setTimeout(() => (typeof onTransitionEnd === 'function') && onTransitionEnd(fadeIn),
                configuration.fullDuration)
        }

        firstTime.current = false;

        return () => {
            clearTimeout(timerId1);
            clearTimeout(timerId2);
        }

    }, [fadeIn]);


    return (
        <div className={configuration.containerClassName} ref={containerRef} style={configuration.containerStyle}>
            <div ref={wrapperRef} className={configuration.wrapperClassName} style={configuration.wrapperStyle}>
                {configuration.unmountAfterFadeOut ? (mounted && children) : children}
            </div>
        </div>)
}
export default Fader;
