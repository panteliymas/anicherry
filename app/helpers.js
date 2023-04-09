// import * as dotenv from 'dotenv';
// dotenv.config();

import * as fs from 'fs';

export function get_file(pathToFile, moduleName="", file=false) {
    let app_root = process.env.APP_ROOT;
    moduleName.length ? moduleName += "/" : "";
    let path = `${app_root}/public/storage/${moduleName}${pathToFile}`;
    if (!file) return path;
    if ( fs.existsSync(path) )
        return fs.readFileSync(path);
    throw new Error("No such file or directory");
}