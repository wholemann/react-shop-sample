import React from 'react';
import { useParams } from 'react-router-dom';

import productStore from '../stores/productStore';

// { id: 1, name: '가디건', price: 15000, imageUrl: '/src/assets/detail-default.jpg' },

function ProductDetail() {
  const { productId } = useParams();
  const product = productStore.getProduct(productId);
  const { imageUrl } = product;

  return (
    <>
      <article id="content">
        <section id="product-images">
          <img
            src={imageUrl}
            alt=""
            width="50%"
          />
        </section>
        <section id="user-profile">
          <div id="user-profile-image">
            <img alt="홀맨" src="http://jjaltoon.gallery/wp-content/uploads/2018/09/4-4.png"
            />
          </div>
          <div id="user-profile-left">
            <div id="nickname">홀맨</div>
            <div id="region-name">용산구 이태원동</div>
          </div>
        </section>
        <section id="product-detail">
          <h1 className="product-title">에어프라이어</h1>
          <p id="product-category">
            가전
            <time> 5시간 전</time>
          </p>
          <p id="product-price" >
              50000원
          </p>
          <div id="product-description">
            <p>
            -실사용 2회입니다.
            -이마트에서 산 "일렉트로맨" 에어프라이어(용량5.5)입니다.
            -제품설명서, 레시피북 그대로 있습니다.

            빠른 처분 위하여 싸게 내놓습니다.
            직접 가지러 오셔야 합니다.
            </p>
          </div>
          <p id="product-counts">
            조회 1031
          </p>
        </section>
        <section id="product-comments">
          <h3>댓글 2</h3>
          <ol id="product-comments-list">
            <li>
              <div className="product-comment">
                <div className="product-comment-wrap">
                  <div className="product-comment-profile">
                    <img 
                      alt="" 
                      width="10%"
                      src="http://jjaltoon.gallery/wp-content/uploads/2018/09/4-4.png"/>
                  </div>
                  <div className="product-comment-nickname">
                    영규
                  </div>
                  <div className="product-comment-region-name">
                    용산구 이태원동
                  </div>
                  <div className="product-comment-text">
                    물건이 너무 구리네요.
                  </div>
                  <time className="product-comment-time">
                    1시간 전
                  </time>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </article>
    </>
  );
}

export default ProductDetail;
