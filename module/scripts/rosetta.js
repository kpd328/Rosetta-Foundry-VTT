/**
 * The main Rosetta module class.
 */
class Rosetta {
    static ID = 'rosetta';

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

        if (shouldLog) {
            console.log(this.ID, '|', ...args);
        }
    }
}

Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(Rosetta.ID);
});

Rosetta.log(false, 'Starting Module.');