import "module-alias/register.js";
import * as fs from 'fs';
import parseTorrent from 'parse-torrent'; 
import { get_file } from "../app/helpers.js";

export function get(req, res, next) {
    parseTorrent(get_file("Pererodzhennya_naysylnishogo_ekzortsysta_v_inshomu_sviti.torrent", "", true))
        .then((torrent) => {
            return res.json((torrent));
        })
        .catch((err) => console.log(err));
    

}

