import fs from 'fs';
import path from 'path';

class Language {
    static systemLangs = fs.readdirSync('../lang').filter(file => path.extname(file) === '.json');
    static userLangs = fs.readdirSync('../../usr/lang').filter(file => path.extname(file) === '.json');
}