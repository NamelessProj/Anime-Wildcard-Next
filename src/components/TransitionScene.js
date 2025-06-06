const TransitionScene = ({transitionSceneDuration}) => {
    const style = {
        "--tr-duration": `${transitionSceneDuration}ms`
    }

    return (
        <div className="transition-scene-container fixed top-0 left-0 w-dvw h-dvh z-50 overflow-clip" style={style}>
            <div className="transition-scene relative flex justify-center items-center h-full w-svw">
                <p className="text-center text-4xl font-bold text-balance">
                    Let&#39;s see your final top!
                </p>
            </div>
        </div>
    );
};

export default TransitionScene;