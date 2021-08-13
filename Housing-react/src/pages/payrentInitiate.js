import React from "react";
import "../Styles/payrentInitiate.css";

function payrentInitiate() {
  return (
    <div className="css-159dnqk">
      <div className="css-1yeiifd">
        <section className="css-18dz4ui">
          <span className="css-4g6ai3">
            <a href="/edge/pay-rent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="css-0"
              >
                <g fill="none" fill-rule="evenodd">
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#9A7DCC"
                    fill-opacity="1"
                  ></circle>
                  <path
                    fill="#9A7DCC"
                    stroke="#481E90"
                    stroke-linecap="round"
                    stroke-width="1.8"
                    d="M16.5 15.765l5.613-5.613c.203-.203.532-.203.735 0 .203.203.203.532 0 .735L17.235 16.5l5.613 5.613c.203.203.203.532 0 .735-.203.203-.532.203-.735 0L16.5 17.235l-5.613 5.613c-.203.203-.532.203-.735 0-.203-.203-.203-.532 0-.735l5.613-5.613-5.613-5.613c-.203-.203-.203-.532 0-.735.203-.203.532-.203.735 0l5.613 5.613z"
                  ></path>
                </g>
              </svg>
            </a>
          </span>
          <div className="title css-njf4g7">Pay your rent</div>
          <div className="sub-title css-18j2vu0">
            Use your Credit Card and earn up-to 3% in rewards
          </div>
          <div className="css-19yyaij">
            <div className="css-y9vlvs">
              <img
                src="//c.housingcdn.com/s/assets/basicDesk.3f4346db.svg"
                className="img css-1vd0mou"
                alt=""
              />
            </div>
            <div className="css-1bqp17d">Help us know you better</div>
          </div>
          <div className="css-19yyaij">
            <div className="css-1pxw95b">
              <img
                src="//c.housingcdn.com/s/assets/landlordBankDetails.f97ef243.svg"
                className="img css-1vd0mou"
                alt=""
              />
            </div>
            <div className="css-79fk72">Landlord's bank account details</div>
          </div>
          <div className="css-19yyaij">
            <div className="css-1pxw95b">
              <img
                src="//c.housingcdn.com/s/assets/propertyDesk.d04bca08.svg"
                className="img css-1vd0mou"
                alt=""
              />
            </div>
            <div className="css-79fk72">Property Details</div>
          </div>
          <div className="css-19yyaij">
            <div className="css-1pxw95b">
              <img
                src="//c.housingcdn.com/s/assets/paymentModes.c52c0a6a.svg"
                className="img css-1vd0mou"
                alt=""
              />
            </div>
            <div className="css-79fk72">Payment Mode</div>
          </div>
          
            <img
              src="//c.housingcdn.com/s/assets/housing.b5620bd6.png"
              className="img css-1o64udk"
              alt=""
            />
          
        </section>
        <section className="css-10xtqnh">
          <label className="css-1hhrlb6">Enter Basic Details</label>
          <div className="css-mtq8eu">
            <div>
              <form className="css-rdjfux">
                <div className="form-item type-pill css-a802sj">
                  <div className="css-vxtpyg">
                    <input
                      type="text"
                      required=""
                      readonly=""
                      value=""
                      className="inputStyle has-value css-5i0mqs"
                    />
                    <label className="undefined inputLabelStyle css-7eclcj">
                      Full Name
                    </label>
                  </div>
                </div>
                <div className="form-item type-pill css-a802sj">
                  <div className="css-a687h8">
                    <input
                      type="text"
                      required=""
                      readonly=""
                      value="8734915061"
                      className="inputStyle has-value css-5i0mqs"
                    />
                    <label className="undefined inputLabelStyle css-7eclcj">
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="form-item type-pill css-a802sj">
                  <div className="css-vxtpyg">
                    <input
                      type="text"
                      required=""
                      readonly=""
                      value=""
                      className="inputStyle has-value css-5i0mqs"
                    />
                    <label className="undefined inputLabelStyle css-7eclcj">
                      Email Id
                    </label>
                    <div className="css-1wooxx8">
                      <span className="email-upi-suggestions css-g3zf8k">
                        @gmail.com
                      </span>
                      <span className="email-upi-suggestions css-g3zf8k">
                        @yahoo.com
                      </span>
                      <span className="email-upi-suggestions css-g3zf8k">
                        @yahoo.co.in
                      </span>
                      <span className="email-upi-suggestions css-g3zf8k">
                        @rediffmail.com
                      </span>
                      <span className="email-upi-suggestions css-g3zf8k">
                        @email.com
                      </span>
                      <span className="email-upi-suggestions css-g3zf8k">
                        @hotmail.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-item type-pill css-1ascwlj">
                  <div className="sel-cont css-1stt6no">
                    <div className="sel-placeholder css-szbi6c">
                      Payment for
                    </div>
                    <div className="options-wrap">
                      <div className="option css-5uj2yn">House Rent</div>
                      <div className="option css-5uj2yn">Office Rent</div>
                      <div className="option css-5uj2yn">Security Deposit</div>
                      <div className="option css-5uj2yn">Booking Token</div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="css-1lrb7un">
                <button className="button default primary disabled css-v2lr2s text-white">
                  Next, Add Landlord's bank account details
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default payrentInitiate;
            