// import React, { Component } from 'react';
// import classNames from 'classnames';
// import styles from '../css.scss';

// export default class Sections extends Component {
//     constructor (props) {
//         super(props);
//         this.sections = {};
//         this.sectionMeta = {};
//     }

//     componentDidMount () {
//         this.updateDimensions();
//     }
//     componentWillUnmount () {
//         window.removeEventListener('resize', () => this.updateDimensions());
//     }

//     updateDimensions () {
//         const { onGetSectionOffsetHeight } = this.props;
//         Object.keys(this.sections).forEach(key => {
//             this.sectionMeta[key] = {
//                 height: this.sections[key].offsetHeight,
//                 top: this.sections[key].offsetTop
//             };
//         });
//         onGetSectionOffsetHeight(this.sectionMeta);
//     }

//     render () {
//         const cx = classNames.bind(styles);
//         const className = 'nv_coln';
//         const { data } = this.props;
//         const sections = data.map((anchor, index) => (
//             <div
//                 key={index}
//                 className={cx(`${className}`) + '_section'}
//                 ref={div => {
//                     this.sections[anchor.anchorTo] = div;
//                 }}
//             >
//         anchors: {anchor.title}
//             </div>
//         ));
//         return <div className={cx(`${className}`) + '_sections'}>{sections}</div>;
//     }
// }
