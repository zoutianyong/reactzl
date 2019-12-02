import React, { Component } from 'react'
import {Pinpai,AllPinPai,PinpaiList,PinpaiTitle,NameList} from "./styled"
export default class Find extends Component {
    render() {
        return (
            <Pinpai>
                <AllPinPai>
                    <div className="allCenter">
                        <span>全部品牌</span>
                    </div>
                    <div className="allSearch">
                        <span className="iconfont">&#xe654;</span>
                    </div>
                </AllPinPai>
                <PinpaiList>
                    <div className="imgList">
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/bf18df746d6cf80d3ef3d2716ac9fca8.jpg"/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/7bcd4fa71ada2216efd67a946ca5d890.jpg"/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/0ea7d0b67fb9ab77200e99e898db85a5.jpg"/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/cecde013b1a2a46fffd58008f4513c02.jpg"/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/4b1b25451757fc7f1e42522860bfbc8a.jpg"/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/8bdc978069ebd00e586266612cdc6065.jpg"/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/4b1b25451757fc7f1e42522860bfbc8a.jpg"/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/8bdc978069ebd00e586266612cdc6065.jpg"/>
                        </div>
                        <div>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/4b1b25451757fc7f1e42522860bfbc8a.jpg"/>
                        <img src="https://pic.cdfgsanya.com/assets/upload/img/8bdc978069ebd00e586266612cdc6065.jpg"/>
                        </div>
                    </div>
                    
                    <PinpaiTitle>
                        <div className="pinpaiLeft"></div>
                        <div className="pinpaiCenter">全部品牌</div>
                        <div className="pinpaiRight"></div>
                    </PinpaiTitle>
                    <NameList>
                        <div className="silderList">
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                            <p>D</p>
                            <p>E</p>
                            <p>F</p>
                            <p>G</p>
                            <p>H</p>
                            <p>I</p>
                            <p>J</p>
                            <p>K</p>
                            <p>L</p>
                            <p>M</p>
                            <p>N</p>
                            <p>O</p>
                            <p>P</p>
                            <p>R</p>
                            <p>S</p>
                            <p>T</p>
                            <p>V</p>
                            <p>W</p>
                            <p>Y</p>
                        </div>
                        <div className="one">
                            <div className="nameTitle"><span>A</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                        </div>
                        <div className="one">
                            <div className="nameTitle"><span>B</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                        </div>
                        <div className="one">
                            <div className="nameTitle"><span>C</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                        </div>
                        <div className="one">
                            <div className="nameTitle"><span>D</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                            <div className="titleList"><span>APM MONACO</span></div>
                        </div>
                    </NameList>
                </PinpaiList>
            </Pinpai>
        )
    }
}
