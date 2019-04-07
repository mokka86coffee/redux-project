import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import  {Provider} from 'react-redux';
import  {createStore} from 'redux';
import Button from './Components/Button';
import DblRange from './Components/DblRange/DblRange';


const reducer = ( store, action ) => store;
const store = createStore(reducer,{
    a: 1
});

export default class Sandbox extends React.Component {
    state = {
        btn: false
    }

    fileInputHandler = ({target: { files: [imgSrc] }}) => {
        const { canv, canvCtx } = this;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(imgSrc);
        
        const image = new Image();

        fileReader.addEventListener('load', ({srcElement: { result: base64 }}) => {
            image.src = base64;
        });

        image.addEventListener('load', () => {
            const { width, height } = image;
            Object.assign( canv, { width, height } );
            canvCtx.drawImage(image, 0, 0);
            let rawImgData = canvCtx.getImageData(0,0, width, height );

            // console.time('imgFilter');
			// for (let idx=0, l=rawImgData['data'].length; idx<l; idx+=4) {
            //     for (let m=0; m<10000; m++) {
            //         let k = m;
            //         rawImgData['data'][idx] = 0;
            //     }
            // };
            // console.timeEnd('imgFilter');
            // canvCtx.putImageData(rawImgData,0,0);
            
            console.time('worker');
            const worker = new Worker('./worker.js');
            worker.postMessage(rawImgData);
            worker.onmessage = ({data}) => {
                console.timeEnd('worker');
                canvCtx.putImageData(data,0,0);
                worker.terminate();
            };
            canvCtx.putImageData(rawImgData,0,0);
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <>
                        <input type="file" accept="image/*" onChange={this.fileInputHandler}/>
                        <canvas ref={r => (this.canv = r, this.canvCtx = this.canv.getContext('2d'))}></canvas>
                        <Switch>
                            <Route path='/' exact component={DblRange} />
                        </Switch>
                    </>
                </Router>
            </Provider>
        )
    }
}