require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Materials extends React.Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div className="index">
				<h1 className="banner-title materials"><strong>Materials</strong></h1>
				<p className="banner-subtitle-material">ImagArena® activities feature open-ended building systems that encourage exploration and imaginative play. </p>
				<div className="container-fluid container-fluid-materials">
		      <div className="row">
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/brainflake.gif')} className="img-responsive product" alt="Responsive image" />
		          <h2 className="text-center">Brainflake</h2>
		          <a href="https://www.amazon.com/VIAHART-Interlocking-Educational-Alternative-Childrens/dp/B00N7CD4BK/ref=sr_1_1?ie=UTF8&qid=1492110110&sr=8-1&keywords=brainflake" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/emido.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Emido</h2>
		          <a href="https://www.amazon.com/EMIDO-Building-Different-Interlocking-Engineering/dp/B01D7KYO56/ref=sr_1_2?ie=UTF8&qid=1492110192&sr=8-2&keywords=emido" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/joinks.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Joinks<small>®</small></h2>
		          <a href="https://www.amazon.com/Fat-Brain-Toys-FA101-1-Joinks/dp/B00OPDBGZ6/ref=sr_1_1?ie=UTF8&qid=1492110275&sr=8-1&keywords=joinks" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/kapla.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Kapla<small>®</small></h2>
		          <a href="https://www.amazon.com/Blocks-Natural-Unfinished-Planks-Storage/dp/B0007KLH1Y/ref=sr_1_1?ie=UTF8&qid=1492110314&sr=8-1&keywords=kapla" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/lego.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Lego<small>®</small></h2>
		          <a href="https://www.amazon.com/LEGO-Classic-Medium-Creative-Brick/dp/B00NHQFA1I/ref=pd_sim_21_4?_encoding=UTF8&pd_rd_i=B00NHQFA1I&pd_rd_r=4G30RPB9Q87B5T8VARRT&pd_rd_w=pyXLQ&pd_rd_wg=OdnLS&psc=1&refRID=4G30RPB9Q87B5T8VARRT" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/links.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Links</h2>
		          <a href="https://www.amazon.com/gp/product/B000QDTWF0/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>

		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/squigz.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Squigz<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00BSYIUQI/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/minisquigz.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Mini Squigz<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00T8HWBRG/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/pinblocks.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Pinblocks<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00UCD1MPC/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/plusplus.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">PlusPlus<small>®</small></h2>
		          <a href="https://www.amazon.com/Plus-03310-Plus-Plus-600-Piece-Assortment/dp/B0080OJ6K8/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1492110722&sr=1-1&keywords=plusplus" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/plusplusmidi.gif')} className="img-responsive product" alt="Responsive image" />
		          <h2 className="text-center">PlusPlus Midi<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B0080OJCPM/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/zoob.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Zoob<small>®</small></h2>
		          <a href="https://www.amazon.com/ZOOB-BuilderZ-250-Piece-Kit/dp/B0007ZYY14/ref=sr_1_5?s=toys-and-games&ie=UTF8&qid=1492110840&sr=1-5&keywords=zoob" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>


		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/tile.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Tiles</h2>
		          <a href="https://www.amazon.com/gp/product/B000F8T9B8/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/cube.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Cubes</h2>
		          <a href="https://www.amazon.com/gp/product/B000QDTVFG/ref=oh_aui_search_detailpage?ie=UTF8&psc=1" target="_blank">
		            <img src={require('../images/amazon.png')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>

					</div>



      <div className="row">
          <p className="banner-footer">Joinks® Kapla® Squigz® Pinblock® PlusPlus® and Zoob® are registered trademarks of companies which do not sponsor, authorize or endorse this program or this website.</p>
      </div>

      <center><p id="copyright"><small>Copyright © 2017 ImagArena®</small></p></center>
			</div>

	</div>
    );
  }
}


export default Materials;
