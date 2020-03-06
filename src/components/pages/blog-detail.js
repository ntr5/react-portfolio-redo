import React, { Component } from 'react'
import axios from 'axios'
export default class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {}
    }
  }
  getBlogItem() {
    axios.get(`https://nathanstorrrs.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`).then(response => {
      this.setState({
        blogItem: response.data.portfolio_blog
      })
    }).catch(error => {
      console.log("error in getBlogItem", error)
    })
  }
  componentDidMount() {
    this.getBlogItem()
  }
  render() {
    const { content, title, blog_status, featured_image_url } = this.state.blogItem
    return (
      <div className="blog-container">
          <div className="content-container">
            <h1>{title}</h1>
            <div className="featured-image-wrapper">
                <img src={featured_image_url} />
            </div>
            <div className="content">
                {content}
            </div>
          </div>
      </div>
    )
  }
}