const config = {
    duration: 2000,
    transitionTimingFunction: 'ease-in-out',
    wrapperClassName: null,
    containerClassName: null,
    wrapperStyle: null,
    containerStyle: null,
    transitionDelay: 0,
    unmountAfterFadeOut: false
}


const getConfig = (userConfig) => {
    const newConfig = {
        ...config,
        ...userConfig,
    }
    newConfig.containerStyle = {
        ...newConfig.containerStyle,
        transition: `opacity ${newConfig.duration}ms ${newConfig.transitionTimingFunction} ${newConfig.transitionDelay}ms`,
        opacity: 0,
    }
    newConfig.wrapperStyle = {
        ...newConfig.wrapperStyle,
        display: 'none'
    }
    newConfig.fullDuration = newConfig.duration + newConfig.transitionDelay;
    return newConfig;
}


export default config;
export {getConfig};