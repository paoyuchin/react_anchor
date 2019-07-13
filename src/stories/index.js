import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Anchor from '../components/Module';
import { Button, Welcome } from '@storybook/react/demo';
import '../components/css.scss'
let divStyle = {
  height: '600px',
  width: '100%',
  outline: '1px solid black'
};

const props = {
  data: [{
      title: '季節玩法', // 名稱 string
      anchorTo: 'season'
    },
    {
      title: '團體旅遊', // 名稱 string
      anchorTo: 'grouptravel'
    },
    {
      title: '機票資訊', // 名稱 string
      anchorTo: 'airplantickets'
    },
    {
      title: '訂房資訊', // 名稱 string
      anchorTo: 'booking'
    },
    {
      title: '自由行程', // 名稱 string
      anchorTo: 'selftour'
    },
    {
      title: '票卷優惠', // 名稱 string
      anchorTo: 'tickets'
    },
    {
      title: '特惠限時搶購', // 名稱 string
      anchorTo: 'specialoffer'
    },
  ],
  options: {
    fixed: {
      mobile: {
        'startFixedY': 44, // 此預設為m預設header高度, 若無header請設0
        'endFixedY': 200 // 此預設為m預設banner高度, 若無banner請設0
      },
      desktop: {
        'startFixedY': 80, // 此預設為pc預設header高度, 若無header請設0
        'endFixedY': 400 // 此預設為pc預設banner高度, 若無banner請設0, 模組一進來的高度為startFixedY與endFixedY相加的高度
      }
    }
  }
};


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('導航 (navs)', module).add('nv_coln', () => (
    <div>
        <div className="nv_coln_fake_header">header</div>
        <div className="nv_coln_fake_banner">banner</div>
        <Anchor data={props.data} options={props.options} />
        <div data-anchor="season" style={divStyle}>anchors:season</div>
        <div data-anchor="grouptravel" style={divStyle}>anchors:grouptravel</div>
        <div data-anchor="airplantickets" style={divStyle}>anchors:airplantickets</div>
        <div data-anchor="booking" style={divStyle}>anchors:booking</div>
        <div data-anchor="selftour" style={divStyle}>anchors:selftour</div>
        <div data-anchor="tickets" style={divStyle}>anchors:tickets</div>
        <div data-anchor="specialoffer" style={divStyle}>anchors:specialoffer</div>
    </div>
));
