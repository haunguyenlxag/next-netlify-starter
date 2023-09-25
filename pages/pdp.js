import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Pdp() {
  return (
    <div className="container">
      <Head>
        <title>PDP Page</title>
        <link rel="icon" href="/favicon.ico" />
          <script type="text/javascript" src="order.js"></script>
      </Head>

      <main>
        <Header title="Welcome to cart page!" />
        <div>
            <div className="col-12">
                <div className="text-center mt-3">
                    <span className="title">Order lookup</span>
                </div>
                <input type="text" id="psid" />
                <div className="form-group">
                    <label htmlFor="customerName">Customer:</label>
                    <input type="text" id="customerName" className="form-control" placeholder="Name..." />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" className="form-control" placeholder="Email address..." />
                        <div className="invalid-feedback">Please fill out your email address.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="orderNumber">Order number:</label>
                    <input type="text" id="orderNumber" className="form-control" placeholder="Order number..." />
                        <div className="invalid-feedback">Please fill out your order number.</div>
                </div>
                <button className="btn btn-primary" id="btnFindOrder"> FIND ORDER </button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
