import {WasmSectionBinary} from "./wasm-binary-section";
import {ByteArray} from "../../../utils/bytearray";
import {Terminal} from "../../../utils/terminal";
/**
 * Created by n.vinayakan on 17.06.17.
 */
export class WasmBinary {

    data:ByteArray;
    sections:WasmSectionBinary[];

    constructor(){

    }

    read(data:Uint8Array){
        this.data = new ByteArray(data.buffer);

        // Check magic number
        let magic = this.data.readUnsignedInt();
        let version = this.data.readUnsignedInt();

        console.log("WASM Binary Description");
        console.log(magic, version);

        this.readNextSection();
    }

    readNextSection(){
        // let sectionId =
    }

}