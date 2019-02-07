import React from 'react'

const Home = () => (
  <div>
    <section>
      <div className="hero is-large" style={{ position: 'relative', overflow: 'hidden' }}>
        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" style={{filter: 'blur(3px)'}}>
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
        </video>
        <div className="hero is-large is-overlay" style={{backgroundColor:'black', opacity: 0.5}} />
        <div className="hero is-large is-overlay">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-white is-size-1 has-text-centered">BOA GUIDES</h1>
              <p className="subtitle has-text-white has-text-centered">Find an experienced guide for your next adventure</p>
              <div className="columns is-centered">
                <div className="column is-6">
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input className="input is-medium" type="text" placeholder="Search by location or activity" />
                    </div>
                    <div className="control">
                      <span className="button is-medium is-info">
                        Search
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="card">
                  <div className="card-image" style={{ position: 'relative' }}>
                    <figure className="image is-3by2">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                    </figure>
                    <div className="is-overlay" style={{ bottom: 0, left: 0, top: 'unset', right: 'unset', padding: '0.5rem'}}>X X X X X</div>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-8">
                <h1 className="title">Find a guide</h1>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  </div>
)

export default Home
