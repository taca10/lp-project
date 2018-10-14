import * as React from 'react';
import { Icon } from 'semantic-ui-react'
import './Process.css';

function Process(){
  return(
    <div className="app_landing_process">
      <div className="landing_process_contents">
        <h2>使い方の流れ</h2>
        <p className="sub_title">カンタン2ステップで、使用可能</p>
        <div className="flex_box sp">
          <div className="contents">
            <h3 className="contents_text">
              <span className="number">1 </span>
              Google extensionを読み込む
            </h3>
            <p className="contents_sub_text">
            クローム右上の3つの点マーク → その他のツール → 拡張機能クリックすると「拡張機能」のページが開く。
            パッケージ化されていない拡張機能を読み込む → ダウンロードした〇〇を読み込む
            </p>
          </div>
          <div className="icon_sp">
            <Icon name='arrow down' className="icon_color" size='huge' />
          </div>
          <div className="icont_pc">
            <Icon name='arrow right' className="icon_color" size='huge' />
          </div>
          {/* <div className="contents">
            <h3 className="contents_text">
            <span className="number">2 </span>
              投稿したい動画検索
            </h3>
            <p>
              投稿したい動画のページにいく
            </p>
          </div> */}
          <div className="contents">
            <h3 className="contents_text">
              <span className="number">2 </span>
                Google extensionを起動
            </h3>
            <p className="contents_sub_text">
              投稿したい動画のページにいき右上の拡張機能から〇〇を押す
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
