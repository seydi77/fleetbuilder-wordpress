import React, {Component} from "react";
import {StaticQuery, graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              nodes {
                fluid {
                    originalName
                    originalImg
                }
                gatsbyImageData(
                  breakpoints: 2500
                  layout: FULL_WIDTH
                  placeholder: NONE
                )
              }
            }
          }
        `}
        render={data => {
          const image = data.allImageSharp.nodes.find(
            node => node.fluid.originalName === this.props.imgName.replace(/^.*[\\/]/, ""),
          );
          if (!image) {
            return null;
          }
          return <GatsbyImage
            alt="Highland"
            style={this.props.style}
            loading="eager"
            objectFit={this.props.objectFit}
            image={image.gatsbyImageData}/>;
        }}
      />
    );
  }
}

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
  style: PropTypes.object,
  objectFit: PropTypes.string,
};

Image.defaultProps = {
  style: {
    width: "100%",
    height: "100%"
  },
  objectFit: 'cover'
}

export default Image;
