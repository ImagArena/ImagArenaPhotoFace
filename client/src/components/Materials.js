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
		          <a href="https://www.amazon.com/gp/product/B00N7CD4BK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00N7CD4BK&linkId=7cfc0eaa799afb90e61a62854846439b" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/emido.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Emido</h2>
		          <a href="https://www.amazon.com/gp/product/B01D7KYO56/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01D7KYO56&linkId=83de666bf122bed10c5431e7e86353c2" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/joinks.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Joinks<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00OPDBGZ6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00OPDBGZ6&linkId=d2d31b4917ae9280255bf9ef008b3c71" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/kapla.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Kapla<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B0007KLH1Y/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0007KLH1Y&linkId=362ef99384267c51d0c36eaeb4ef4f23" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/lego.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Lego<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00NHQFA1I/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00NHQFA1I&linkId=46fb44bbe774849a1490abd167c30888" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/links.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Links</h2>
		          <a href="https://www.amazon.com/gp/product/B000QDTWF0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000QDTWF0&linkId=dc054f6d6059ddad2bc8373de766d36f" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>

		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/squigz.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Squigz<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00BSYIUQI/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00BSYIUQI&linkId=5d96a0ecd95c195b9b2cfbf55f08b80d" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/minisquigz.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Mini Squigz<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00T8HWBRG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00T8HWBRG&linkId=6ab91cddf052b55f0b09f3847dcb9ad4" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/pinblocks.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Pinblocks<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B00UCD1MPC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00UCD1MPC&linkId=0641c5e7b8e16c27d82caeab79610639" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/plusplus.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">PlusPlus<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B0080OJ6K8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0080OJ6K8&linkId=639f6cd3eb118e52a1a1579b1032cf36" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/plusplusmidi.gif')} className="img-responsive product" alt="Responsive image" />
		          <h2 className="text-center">PlusPlus Midi<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B0080OJCPM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0080OJCPM&linkId=d3177ca7e4da7b6b21bec265d688fe40" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/zoob.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Zoob<small>®</small></h2>
		          <a href="https://www.amazon.com/gp/product/B0007ZYY14/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0007ZYY14&linkId=3200b0a834edda02b3a81a88da6d6126" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>


		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/tile.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Tiles</h2>
		          <a href="https://www.amazon.com/gp/product/B000F8T9B8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000F8T9B8&linkId=9777e73d91ccf8b7af6c760c63188d4f" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
		          </a>
		        </div>
		        <div className="col-sm-3 col-md-2 productcell">
		          <img src={require('../images/store/cube.gif')} className="img-responsive" alt="Responsive image" />
		          <h2 className="text-center">Cubes</h2>
		          <a href="https://www.amazon.com/gp/product/B000QDTVFG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=imag0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B000QDTVFG&linkId=04d74ded76c29cc282185dc685921349" target="_blank">
		            <img src={require('../images/buy1.gif')} className="img-responsive amazonbutton" alt="Responsive image" />
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
