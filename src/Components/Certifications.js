import React, { Component } from 'react';

class Certifications extends Component {
  render() {

    if(this.props.data){
      var certifications = this.props.data.certifications.map(function(certifications){
        var projectImage = 'images/certifications/'+certifications.image;
        return <div key={certifications.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a target="_blank" href={certifications.url} title={certifications.title}>
               <img alt={certifications.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certifications.title}</h5>
                     <p>{certifications.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="certifications">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Certifications.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certifications}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Certifications;
