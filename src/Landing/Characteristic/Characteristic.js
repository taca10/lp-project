import * as React from 'react';
import './Characteristic.css'
import { Icon } from 'semantic-ui-react'

function Characteristic(){
  return(
    <div className="app_landing_characteristic">
      <div className="characteristic_contents">
        <div className="characteristic_title">
          〇〇の特徴
        </div>
        <div className="characteristic_box sp">
          <div className="contents sp">
            <Icon size="huge" name='copy outline' />
            <h2>
              外部からの投稿
            </h2>
            <p className="contensts_text">
              Google extensionを使用して、
              好きな動画をすぐにwordpressに投稿できます。
              予約投稿もできるので、毎日投稿せずに、まとまった時間に
              作業ができます。
            </p>
          </div>
          <div className="contents sp">
            <Icon size="huge" name="handshake outline" />
            <h2>
              DMMのAPI連携
            </h2>
            <p className="contents_text">
              DMMと連携しているので、〇〇〇〇〇〇〇〇〇〇〇〇
            </p>
          </div>
          <div className="contents sp">
            <Icon size="huge" name="image" />
            <h2>
              サムネ複数取得
            </h2>
            <p className="contents_text">
              動画内の画像から選択して、お気に入りの画像を選択することができます
            </p>
          </div>
          <div className="contents sp">
            <Icon size="huge" name="chart bar" />
            <h2>
              複数のサイトの一元管理
            </h2>
            <p className="contensts_text">
              hogehogehoge
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characteristic;
