import * as React from 'react';
import './Information.css';

function Information(){
  return(
    <div className="information_page">
      <div className="max_width800 inforamtion_contents">
        <div className="flex_contents sp">
          <div>
            <img src="https://s3.amazonaws.com/lp-react-extension/lp-images/348f73ceb21dc11cb422980d8007fa6d_s.jpg" className="image_box" alt=""/>
          </div>
          <p className="information_text">
            〇〇は無料で使用できて、wordpressへの投稿が外部から簡単にできるサービスです。今まで投稿に時間がかかっていたことが一瞬で投稿できるようになります。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Information
