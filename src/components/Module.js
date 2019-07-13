import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './css.scss';
import Navigator from './Navigator';
import scroll from './Scroll';
scroll.polyfill();

class Module extends Component {
    constructor (props) {
        super(props);
        this.sections = {};
        this.state = {
            displacement: 0,
            isFixed: false,
            activeAnchor: '',
            mode: window.innerWidth >= 980 ? 'pc' : 'm',
            pcFixStartingPoint: this.props.options.fixed.desktop.startFixedY, // 即為pc版header高度 若無 請輸入0
            pcFixEndingPoint: this.props.options.fixed.desktop.endFixedY, // pc版banner高度 若無 請輸入0;scroll超過此高度banner就會fixed
            mFixStartingPoint: this.props.options.fixed.mobile.startFixedY,
            mFixEndinggPoint: this.props.options.fixed.mobile.endFixedY,
            mIsShowNav: false,
            isCoverOpen: false
        };
    }
    componentDidMount () {
        console.log(1, this.state.mode);
        console.log(2, this.props.options)
        this.props.data.forEach(section => {
            const element = document.querySelector(`[data-anchor=${section.anchorTo}]`);
            // console.log('element', element);
            this.sections[section.anchorTo] = {
                top: element instanceof Element ? element.offsetTop : 0,
                height: element instanceof Element ? element.offsetHeight: 0
            };
        });
        window.addEventListener('scroll', () => this.onScroll());
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.onScroll, false);
    }
    onScroll = () => {
        const displacement = (document.documentElement.scrollTop || document.body.scrollTop);
        let activeAnchor;
        Object.keys(this.sections).forEach(sectionName => {
            if (this.state.mode === 'm') {
                if (this.sections[sectionName].top <= displacement + this.state.mFixStartingPoint + 44) { // 需再另外加上nav的高度
                    activeAnchor = sectionName;
                }
            }
            if (this.state.mode === 'pc') {
                if (this.sections[sectionName].top <= displacement + this.state.pcFixStartingPoint) {
                    activeAnchor = sectionName;
                }
            }
        });
        this.setState(prevState => ({
            ...prevState,
            displacement: displacement,
            isFixed: this.state.mode === 'pc' ? displacement >= this.state.pcFixEndingPoint : this.state.displacement >= this.state.mFixEndinggPoint,
            activeAnchor: activeAnchor,
            mIsShowNav: this.state.displacement >= this.state.mFixEndinggPoint
        }));

    };

    updateActiveAnchor = newAchor => {
        this.setState(prevState => ({
            ...prevState,
            activeAnchor: newAchor,
            isCoverOpen: false
        }));
    };
    toggleCover = () => {
        this.setState(prevState => ({
            ...prevState,
            isCoverOpen: !this.state.isCoverOpen
        }));
    }

    render () {
        const cx = classNames.bind(styles);
        const className = 'nv_coln';
        const { data } = this.props;
        const {
            mode,
            displacement,
            isFixed,
            sectionMeta,
            bannerHeight,
            headerHeight,
            activeAnchor,
            pcFixStartingPoint,
            pcFixEndingPoint,
            mFixStartingPoint,
            mFixEndinggPoint,
            mIsShowNav,
            isCoverOpen
        } = this.state;
        const classes = classNames.bind(styles)('nv_coln');

        let navInitialPosition = {
            position: mode === 'pc' ? 'fixed' : null,
            top: mode === 'pc' ? (pcFixStartingPoint + pcFixEndingPoint) : null,

        };
        return (
            <div className={classes} style={navInitialPosition}>
                <Navigator
                    data={data}
                    displacement={displacement}
                    isFixed={isFixed}
                    sectionMeta={sectionMeta}
                    activeAnchor={activeAnchor}
                    bannerHeight={bannerHeight}
                    headerHeight={headerHeight}
                    mode={mode}
                    updateActiveAnchor={this.updateActiveAnchor}
                    sections={this.sections}
                    pcFixStartingPoint={pcFixStartingPoint}
                    pcFixEndingPoint={pcFixEndingPoint}
                    mFixStartingPoint={mFixStartingPoint}
                    mFixEndinggPoint={mFixEndinggPoint}
                    mIsShowNav={mIsShowNav}
                    isCoverOpen={isCoverOpen}
                    toggleCover={this.toggleCover}
                />
            </div>
        );
    }
}

Module.defaultProps = {
    options: {
        fixed: {
            mobile: {
                startFixedY: 0,
                endFixedY: 0
            },
            desktop: {
                startFixedY: 0,
                endFixedY: 0
            }
        }
    },
    data: [
        {
            title: '季節玩法',
            anchorTo: 'season'
        },
        {
            title: '團體旅遊',
            anchorTo: 'grouptravel'
        },
        {
            title: '機票資訊',
            anchorTo: 'airplantickets'
        },
        {
            title: '訂房資訊',
            anchorTo: 'booking'
        },
        {
            title: '自由行程',
            anchorTo: 'selftour'
        },
        {
            title: '票卷優惠',
            anchorTo: 'tickets'
        },
        {
            title: '特惠限時搶購',
            anchorTo: 'specialoffer'
        }
    ]
};

Module.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            anchorTo: PropTypes.string,
        })
    ),
    options: PropTypes.shape({
        fixed: PropTypes.shape({
            mobile: PropTypes.shape({
                startFixedY: PropTypes.number,
                endFixedY: PropTypes.number,
            }),
            dessktop: PropTypes.shape({
                startFixedY: PropTypes.number,
                endFixedY: PropTypes.number,
            })
        })
    })
};
export default Module;
