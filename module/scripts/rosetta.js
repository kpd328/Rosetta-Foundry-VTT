/**
 * The main Rosetta module class.
 */
class Rosetta {
    static ID = 'rosetta';

    static FLAGS = {

    }

    static TEMPLATES = {

    }
}

class RosettaData {
    static get allLangs() {}

    static getLangByID(langId) {}

    static createLang(langData) {}

    static updateLang(langId, updateData) {}

    static deleteLang(langId) {}
}

/**
 * Register debug flag with developer mode's custom hook
 */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(Rosetta.ID);
});

/**
 * A small helper function which leverages developer mode flags to gate debug logs.
 * @param {boolean} force - forces the log even if the debug flag is not on
 * @param  {...any} args - what to log
 */
function log(force, ...args) {
    try{
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(Rosetta.ID);

        if (shouldLog) {
            console.log(Rosetta.ID, '|', ...args);
        }
    } catch(e) {
        console.error("Rosetta | Why is there an error logging? |", ...args , '\n', e);
    }
}

log(false, 'Starting Module.');