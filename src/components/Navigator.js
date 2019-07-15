import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './css.scss';
import ArrorTop from './arrorTop';
import ArrowDown from './arrorDown';

export default class Navigator extends Component {
    constructor (props) {
        super(props);
        this.navigatorDom = React.createRef();
        this.anchorsDom = React.createRef();
        this.anchorsBigwrap = React.createRef();
        this.anchorButtons = {};
    }
    componentDidMount () {
        window.addEventListener('scroll', () => this.showScrollNav());

    }

    onAnchorClickToSection = anchor => {
        const { mode, updateActiveAnchor, sections, pcFixStartingPoint, mFixStartingPoint } = this.props;
        let anchorsDomOffsetheight = this.anchorsDom.current.offsetHeight;
        Object.keys(sections).forEach(section => {
            let top = sections[section].top;
            if (section === anchor) {
                if (mode === 'm') {
                    top = top - (anchorsDomOffsetheight + mFixStartingPoint);
                    window.scrollTo({
                        top: top,
                        behavior: 'smooth'
                    });
                } else if (mode === 'pc') {
                    window.scrollTo({
                        top: top - pcFixStartingPoint,
                        behavior: 'smooth'
                    });
                }

            }
        });
        updateActiveAnchor(anchor);
    };


    isInView (elem) {
        let bounding = elem.getBoundingClientRect();
        // console.log(bounding);
        let view = this.navigatorDom.current.getBoundingClientRect();
        return (
            bounding.top >= view.top &&
      bounding.left >= view.left &&
      bounding.bottom <= view.bottom &&
      bounding.right <= view.right
        );
    }
    showScrollNav () {
        if (!document.querySelector('.nv_coln_anchor.isActive')) {
            return;
        }
        let navigatorDom = this.navigatorDom.current;
        let anchorsContainer = this.anchorsDom.current;

        let activeAnchor = document.querySelector('.nv_coln_anchor.isActive');
        let viewBox = navigatorDom.getBoundingClientRect();

        anchorsContainer.style.marginLeft = anchorsContainer.style.marginLeft || '0px';

        if (!this.isInView(activeAnchor)) {
            let count = 0;
            // const old = parseFloat(anchorsContainer.style.marginLeft.replace("px", ""));
            if (viewBox.left >= activeAnchor.getBoundingClientRect().left) {
                // console.log('at left');
                while (!this.isInView(activeAnchor)) {
                    // console.log(anchorsContainer.style.marginLeft);
                    if (count === 400) break;
                    anchorsContainer.style.marginLeft = parseInt(anchorsContainer.style.marginLeft.replace('px', ''), 10) + 2 + 'px';
                    count++;
                }
                anchorsContainer.style.marginLeft = parseInt(anchorsContainer.style.marginLeft.replace('px', ''), 10) + 2 + 'px';
            } else {
                // console.log('at right');
                while (!this.isInView(activeAnchor)) {
                    if (count === 400) break;
                    anchorsContainer.style.marginLeft = parseInt(anchorsContainer.style.marginLeft.replace('px', ''), 10) - 2 + 'px';
                    count++;
                }
                anchorsContainer.style.marginLeft = parseInt(anchorsContainer.style.marginLeft.replace('px', ''), 10) - 46 + 'px';
                // anchorsContainer.style.marginLeft = old + (viewBox.right - btnBox.right) - btnBox.width + "px";
            }
        }
    }

    render () {
        const cx = classNames.bind(styles);
        const className = 'nv_coln';
        const { data, isFixed, activeAnchor, mIsShowNav, isCoverOpen, toggleCover } = this.props;
        const anchorfixStatusClass = classNames({
            [cx(`${className}`) + '_navigator']: true,
            anchorFixed: isFixed,
            mShowNavClass: mIsShowNav
        });
        const anchor = data.map(({ title, anchorTo }, index) => (
            <span
                key={index}
                className={cx(`${className}`) + `_anchor${anchorTo === activeAnchor ? ' isActive' : ''}`}
                onClick={() => this.onAnchorClickToSection(anchorTo)}
                ref={div => {
                    this.anchorButtons[anchorTo] = div;
                }}
            >
                {title}
            </span>
        ));
        const instant = <div className={cx(`${className}`) + '_instant'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                <g fill="none" fillRule="evenodd">
                    <path fill="#e10500" d="M5 6l5-6H0z" />
                    <path fillRule="nonzero" d="M-3-6h16v16H-3z" />
                </g>
            </svg>
            <span>快速</span>
        </div>;
        return (
            <div className={anchorfixStatusClass} ref={this.navigatorDom}>
                <div className={cx(`${className}`) + '_anchorsBigwrap'} ref={this.anchorsBigwrap}>
                    <div className={cx(`${className}`) + '_anchors'} ref={this.anchorsDom}>
                        {instant}
                        {anchor}
                    </div>
                </div>
                <div className={cx(`${className}`) + '_ArrorTop'} onClick={() => toggleCover()}>
                    {isCoverOpen ? <ArrorTop /> : <ArrowDown />}
                </div>
                <div className={`nv_coln_ButtonCoverContainer ${isCoverOpen ? 'CoverOpenClass' : 'CovercloseClass'}`}>
                    {this.props.data.map(({ title, anchorTo }, index) => (
                        <div
                            key={index} className={cx(`${className}`) + `_anchor${anchorTo === activeAnchor ? ' isActive' : ''}`}
                            onClick={() => this.onAnchorClickToSection(anchorTo)}
                            ref={div => { this.anchorButtons[anchorTo] = div }}>
                            {title}
                        </div>
                    ))}
                </div>
                <div className={`nv_coln_cover ${isCoverOpen ? 'CoverOpenClass' : 'CovercloseClass'}`} />
            </div>
        );
    }
}