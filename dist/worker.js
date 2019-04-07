// importScripts();
self.onmessage = ({ data: rawImgData }) => {
    for (let idx=0; idx<rawImgData['data'].length; idx+=4) {
        for (let m=0; m<10000; m++) {
            let k = m;
            rawImgData['data'][idx] = 0;
        }
    };
    self.postMessage(rawImgData);
};