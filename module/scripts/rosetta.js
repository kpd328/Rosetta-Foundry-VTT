/**
 * The main Rosetta module class.
 */
class Rosetta {
    static ID = 'rosetta';
}

Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(Rosetta.ID);
});

function log(force, ...args) {
    try{
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(Rosetta.ID);

        if (shouldLog) {
            console.log(Rosetta.ID, '|', ...args);
        }
    } catch(e) {
        console.error("Rosetta | Why is there an error logging? | ", ...args , '\n', e);
    }
}

log(false, 'Starting Module.');